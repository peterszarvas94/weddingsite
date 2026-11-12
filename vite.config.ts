import { fileURLToPath } from "node:url";
import { defineConfig, runnerImport, type Plugin, type ViteDevServer } from "vite";
import { render, type Node } from "./src/jsx/jsx-runtime";

const root = fileURLToPath(new URL(".", import.meta.url));

// The local JSX runtime, used both for the build and for rendering pages.
const jsxConfig = {
	resolve: { alias: { "@jsx": `${root}src/jsx` } },
	oxc: { jsx: { runtime: "automatic" as const, importSource: "@jsx" } },
};

// Each HTML entry is a one-line stub, `<!-- render src/pages/<page>.tsx -->`.
// The page's default export renders the whole document with the local JSX runtime,
// and Vite then processes the resulting HTML (CSS, images, hashing) as usual.
function renderPages(): Plugin {
	let server: ViteDevServer | undefined;
	return {
		name: "render-pages",
		configureServer(s) {
			server = s;
		},
		transformIndexHtml: {
			order: "pre",
			async handler(html) {
				const match = html.match(/<!--\s*render\s+(\S+)\s*-->/);
				if (!match) return html;
				const id = `/${match[1]}`;
				const page = server
					? await server.ssrLoadModule(id)
					: (await runnerImport<{ default: () => Node }>(`${root}${id.slice(1)}`, { configFile: false, root, ...jsxConfig })).module;
				return render(page.default());
			},
		},
		handleHotUpdate({ file, server }) {
			if (file.endsWith(".tsx") || file.endsWith(".ts")) server.ws.send({ type: "full-reload" });
		},
	};
}

export default defineConfig({
	...jsxConfig,
	plugins: [renderPages()],
	build: {
		// Keep the output readable: indented HTML and unminified CSS.
		cssMinify: false,
		rollupOptions: {
			input: {
				index: `${root}index.html`,
				hu: `${root}hu/index.html`,
				en: `${root}en/index.html`,
			},
		},
	},
	server: { host: true },
});
