import React, { useState } from "react";
import Footer from '../Footer';
import Posts from "./Posts.js";
import BlogHeader from "./headers/BlogHeader";
import firebase from "../../../utils/firebase";
import Navbar from "../../../vendor/welcome/navbar/Navbar";

function Welcome() {
	return (
		<div className='w-full h-full bg-gray-900'>
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

export default Welcome;
