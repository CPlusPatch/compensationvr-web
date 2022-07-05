import React, { useEffect, useState } from "react";
import firebase from "../../../../utils/firebase";
import slugify from 'slugify';
import {v4 as uuidv4} from 'uuid';
import { useSession } from "next-auth/react";
  
export default function BlogHeader() {
	const { data: session } = useSession();
 
	const handleSubmit = async () => {
		var user = await firebase.getUser();
		const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-" + slugify("New post").toLowerCase();
		const uuid = uuidv4();
		
		const post = {
			author: user.uid,
			"banner-url": "",
			blocks: '{"time":1649917379711,"blocks":[],"version":"2.23.2"}',
			categories: [],
			description: "",
			slug: slug,
			title: "New post",
			uuid: uuid,
			visibility: "private",
			date: Date.now(),
		}
		await firebase.addPost(post);
		window.location.href = "/blog/editor/" + uuid;
		
	};
		
	return (
		<div className="flex items-center justify-between pt-6 pb-8 space-y-2 md:space-y-5 font-exo">
			<div>
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
				<p className="mt-2 text-lg leading-7 text-gray-200">Latest CompensationVR news</p>
			</div>
			<div>
				{/*
				<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-not-allowed hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Search
				</button>
				*/}
				{session ?  
				<button onClick={handleSubmit} type="button" className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm md:mt-0 md:ml-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Create
				</button> : null
				}
			</div>
		</div>
	)
}