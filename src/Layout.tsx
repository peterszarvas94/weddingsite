import type { Child } from "@jsx/jsx-runtime";

const fonts =
	"https://fonts.googleapis.com/css2?family=Spectral&family=Spectral+SC&family=Water+Brush&display=swap";

export const Layout = (props: { lang: string; description: string; head?: Child; children?: Child }) => (
	<html lang={props.lang}>
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={props.description} />
			<meta name="theme-color" content="#000000" />
			<title>Adri &amp; Peti</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link rel="stylesheet" href={fonts} />
			<link rel="stylesheet" href="/src/styles/main.css" />
			{props.head}
		</head>
		<body>{props.children}</body>
	</html>
);
