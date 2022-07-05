import React from "react";
import Footer from "../../components/cms/pages/Footer";
import Posts from "../../components/cms/pages/landing/Posts.js";
import BlogHeader from "../../components/cms/pages/landing/headers/BlogHeader";
import Navbar from "../../components/vendor/welcome/navbar/Navbar";
import Head from 'next/head';
import { where } from "@firebase/firestore/lite";
import firebase from "../../components/utils/firebase";

export default function Welcome() {
	return (
		<div className='w-full h-full bg-gray-900'>
			<Head>
				<title>News &middot; CompensationVR</title>
			</Head>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<main className="mt-14">
					<div className="divide-y divide-gray-700">
						<BlogHeader/>
						<Posts />
					</div>
				<Footer/>
				</main>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await unstable_getServerSession(context.req, context.res, authOptions)

	const role = session ? (await firebase.getUserData(session.user.uid)).role : "default";
	const posts = await firebase.getPosts(where('visibility', '==', "public"));
	console.log(role);
	return {
		props: { posts, role }
	};
}
