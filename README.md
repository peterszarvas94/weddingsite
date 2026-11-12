# Wedding invitation

Adri & Peti's wedding invitation: two static pages, `/hu/` and `/en/`, with no JavaScript in the browser.

The pages are written in TSX and rendered to indented HTML at build time by a small local JSX runtime (`src/jsx/jsx-runtime.ts`), not React. Each HTML entry (`index.html`, `hu/index.html`, `en/index.html`) is a one-line stub naming the page in `src/pages/` that renders it; the `render-pages` plugin in `vite.config.ts` fills it in, and Vite handles the CSS and images. The text for both languages lives in `src/content.ts`.

```sh
npm install
npm run dev     # development server
npm run build   # type-check, then static output in dist/
```

Deployed on Coolify (server `hub`) from the `Dockerfile`, which builds the site and serves `dist/` with Caddy at https://wedding.peterszarvas.hu.
