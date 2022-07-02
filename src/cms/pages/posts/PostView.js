import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { where } from "firebase/firestore/lite";
import firebase from "../../../utils/firebase";
import Blocks from 'editorjs-blocks-react-renderer';
import { Helmet } from "react-helmet";
import Navbar from "../../../vendor/welcome/navbar/Navbar";


function PostView() {
	const { slug } = useParams();
	const [postData, setPostData] = useState({
		id: "",
		data: {
			title: "",
			visibility: "public",
			description: "",
			blocks: '{"time":1649917379711,"blocks":[],"version":"2.23.2"}',
		}
	});

	
	useEffect(() => {
		async function fetchPostData() {
			const user = firebase.isUserLoggedIn() ? await firebase.getUserData((await firebase.getUser()).uid) : {role: "default"};

			var whereData = where('visibility', '==', "public"); // Default value if signed out
			if (user.role == "user") whereData = where('visibility', "in", ["public", "restricted"]);
			if (user.role == "admin") whereData = where('visibility', "in", ["public", "restricted", "private"]);
			const post = (await firebase.getPostByFields(whereData, where("slug", "==", slug)))[0];
			setPostData({id: post.id, data: post.data});
		}
		fetchPostData();
	}, []);

	return (
		<div className='bg-gray-900'>
			<Helmet>
				<title>{postData.data.title} &middot; CompensationVR</title>
				<meta property="og:title" content={postData.data.title} />
			</Helmet>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<div className="flex justify-center w-full h-full">
					<style>{"\
						.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\
							margin-top: 0;\
							margin-bottom: 0;\
						}\
						.prose :where(h1,h2,h3,h4,h5,h6):not(:where([class~=\"not-prose\"] *)) {\
							color: inherit;\
						}\
					"}</style>
					<div className="w-full h-full mt-16 prose md:mt-24 lg:mt-32 md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
						<div className="w-full h-full px-4 text-gray-100">
							<Blocks data={JSON.parse(postData.data.blocks)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostView