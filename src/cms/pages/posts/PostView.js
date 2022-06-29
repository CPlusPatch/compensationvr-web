import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import firebase from "../../../utils/firebase";
import Blocks from 'editorjs-blocks-react-renderer';
import AppNavbar from "../navbar/AppNavbar";


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
			const post = (await firebase.getPostByFields(where("visibility", "==", "public"), where("slug", "==", slug)))[0];
			setPostData({id: post.id, data: post.data});
		}
		fetchPostData();
	}, []);

	return (
		<div className="px-4 mx-5 sm:px-6 xl:px-0 md:mx-48">
			<div className="flex flex-col justify-between h-screen">
				<AppNavbar/>
				<div className="flex justify-center w-full h-full">
					<style>{"\
						.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\
							margin-top: 0;\
							margin-bottom: 0;\
						}\
					"}</style>
					<div className="w-full h-full prose md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
						<div className="w-full h-full px-4">
							<Blocks data={JSON.parse(postData.data.blocks)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostView