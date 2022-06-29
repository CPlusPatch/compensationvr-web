import React, { useState } from "react";
import Footer from '../Footer';
import Posts from "./Posts.js";
import PostCreator from "../../editor/PostCreator";
import AppNavbar from "..//navbar/AppNavbar";
import BlogHeader from "./headers/BlogHeader";
import firebase from "../../../utils/firebase";

function Welcome() {
	const userLoggedIn = firebase.getUser();

	return (
		<div className="px-4 mx-5 sm:px-6 xl:px-0 md:mx-48">
			<div className="flex flex-col justify-between h-screen">
				<AppNavbar/>
				<main className="mb-auto">
					<div className="divide-y divide-gray-200 dark:divide-gray-700">
						<BlogHeader/>
						<Posts />
						{JSON.stringify(userLoggedIn) == "{}" ? null : <PostCreator />}
					</div>
				<Footer/>
				</main>
			</div>
		</div>
	);
}

export default Welcome;
