import React from "react";
import PropTypes from "prop-types";
import '../styles/globals.css';
import Head from 'next/head';
import initAuth from "../auth/initAuth";

initAuth();

export default function App ( { Component, pageProps } ) {
    return (
        <>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>CompensationVR &middot; Social Application</title>
			</Head>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<Component { ...pageProps } />
		</>
    );
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};