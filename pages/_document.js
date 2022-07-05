import React from "react";
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
	<Html lang="en">
		<Head>
			<meta charSet="utf-8" />
			<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
			
			<meta name="description" content="A new social VR game designed to be as fun as possible" />
			<meta property="og:title" content="CompensationVR" />
			<meta property="og:type" content="Website" />
			<meta property="og:image" content="https://cdn.discordapp.com/icons/812825311002624060/c47013b226b3d61b65c817505b707a78.webp" />
			<meta property="og:description" content="A new social VR game designed to be as fun as possible" />

			<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
			<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500;900&family=Inter:wght@500&display=swap" rel="stylesheet"/> 
		</Head>
		<body className="relative w-full h-full antialiased">
		  <Main/>
		  <NextScript />
		</body>
	</Html>
	);
}