import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from 'next/router';
import { where } from "firebase/firestore/lite";
import firebase from "../../../components/utils/firebase";
import Blocks from 'editorjs-blocks-react-renderer';
import Head from 'next/head';
import Navbar from "../../../components/vendor/welcome/navbar/Navbar";


export default function PostView(props) {
	return (
		<div className='bg-gray-900'>
			<Head>
				<title>{props.data.title} &middot; CompensationVR</title>
				<meta property="og:title" content={props.data.title} />
			</Head>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<div className="flex justify-center w-full h-full">
					<div className="w-full h-full mt-16 prose md:mt-24 lg:mt-32 md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
						<div className="w-full h-full px-4 text-gray-100">
							<Blocks data={JSON.parse(props.data.blocks)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

PostView.propTypes = {
	data: PropTypes.object,
};

export async function getServerSideProps(context) {
	const user = firebase.isUserLoggedIn() ? await firebase.getUserData((await firebase.getUser()).uid) : {role: "default"};

	var whereData = where('visibility', '==', "public"); // Default value if signed out
	if (user.role == "user") whereData = where('visibility', "in", ["public", "restricted"]);
	if (user.role == "admin") whereData = where('visibility', "in", ["public", "restricted", "private"]);

	const post = (await firebase.getPostByFields(whereData, where("slug", "==", context.query.slug)))[0];

	return {
		props: {
			data: post.data
		}, // will be passed to the page component as props
	}
  }