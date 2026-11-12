// A tiny JSX runtime that renders to indented, readable HTML at build time.
// Nothing here ships to the browser.

type Element = { kind: "element"; tag: string; attrs: Record<string, unknown>; children: Node[] };
type Text = { kind: "text"; value: string };
type Raw = { kind: "raw"; value: string };
type Fragment = { kind: "fragment"; children: Node[] };
export type Node = Element | Text | Raw | Fragment;

export type Child = Node | string | number | boolean | null | undefined | Child[];
type Props = Record<string, unknown> & { children?: Child };
type Component = (props: any) => Node;

const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);

const toNodes = (child: Child): Node[] => {
	if (Array.isArray(child)) return child.flatMap(toNodes);
	if (child == null || typeof child === "boolean") return [];
	if (typeof child === "object") return child.kind === "fragment" ? child.children : [child];
	return [{ kind: "text", value: String(child) }];
};

export function jsx(type: string | Component, props: Props): Node {
	if (typeof type === "function") return type(props);
	const { children, ...attrs } = props;
	return { kind: "element", tag: type, attrs, children: toNodes(children) };
}

export const jsxs = jsx;

export const Fragment = ({ children }: { children?: Child }): Node => ({ kind: "fragment", children: toNodes(children) });

/** Inserts trusted markup without escaping it. */
export const raw = (value: string): Node => ({ kind: "raw", value });

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const attrs = (values: Record<string, unknown>) =>
	Object.entries(values)
		.filter(([, value]) => value != null && value !== false)
		.map(([name, value]) => (value === true ? ` ${name}` : ` ${name}="${escape(String(value))}"`))
		.join("");

// Elements holding only other elements put each child on its own indented line.
// Anything holding text stays on one line, so no whitespace is added where it could show.
const print = (node: Node, depth: number, inline: boolean): string => {
	switch (node.kind) {
		case "text":
			return escape(node.value);
		case "raw":
			return node.value;
		case "fragment":
			return node.children.map((child) => print(child, depth, inline)).join(inline ? "" : `\n${"\t".repeat(depth)}`);
		case "element": {
			const open = `<${node.tag}${attrs(node.attrs)}>`;
			if (voidTags.has(node.tag)) return open;
			const close = `</${node.tag}>`;
			const kids = node.children;
			if (inline || kids.length === 0 || kids.some((kid) => kid.kind === "text" || kid.kind === "raw"))
				return open + kids.map((kid) => print(kid, depth, true)).join("") + close;
			const pad = "\t".repeat(depth + 1);
			return `${open}\n${kids.map((kid) => pad + print(kid, depth + 1, false)).join("\n")}\n${"\t".repeat(depth)}${close}`;
		}
	}
};

/** Renders a page to an HTML document. */
export const render = (node: Node) => `<!doctype html>\n${print(node, 0, false)}\n`;

export namespace JSX {
	export type Element = Node;
	export interface ElementChildrenAttribute {
		children: {};
	}
	export interface IntrinsicElements {
		[tag: string]: Record<string, unknown> & { children?: Child };
	}
}
