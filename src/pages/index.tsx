import { Layout } from "../Layout";

// The server redirects / to /hu/; this page covers the dev server and anything else.
export default () => (
	<Layout lang="hu" description="Adri és Peti esküvői meghívója" head={<meta http-equiv="refresh" content="0; url=/hu/" />}>
		<a href="/hu/">Adri &amp; Peti</a>
	</Layout>
);
