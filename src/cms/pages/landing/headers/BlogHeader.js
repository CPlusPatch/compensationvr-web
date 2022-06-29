import React from "react";
import firebase from "../../../../utils/firebase";
  
export default function BlogHeader() {
	const userLoggedIn = firebase.isUserLoggedIn();
	
	return (
		<div className="flex items-center justify-between pt-6 pb-8 space-y-2 md:space-y-5">
			<div>
				<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
				<p className="mt-2 text-lg leading-7 text-gray-700">The latest (and worst) of my shitposts</p>
			</div>
			<div>
				<button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-not-allowed hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Search
				</button>
				{userLoggedIn ?  
				<button type="button" className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm md:mt-0 md:ml-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Create
				</button> : null
				}
			</div>
		</div>
	)
}