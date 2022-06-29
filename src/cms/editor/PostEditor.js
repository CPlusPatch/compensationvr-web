import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebase from "../../utils/firebase";
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import Delimiter from '@editorjs/delimiter'
import CodeTool from "@editorjs/code";
import EditorNavbar from "./navbar/EditorNavbar";
import EditorSettingsModal from "./modals/EditorSettingsModal";
import Undo from 'editorjs-undo';
import DragDrop from "editorjs-drag-drop";
import slugify from 'slugify';

var editorId = "";
function PostEditor() {
	const { uuid } = useParams();
	const [userData, setUserData] = useState({
		name: "Loading...",
		role: "Loading...",
		avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y",
	});
	const [settingsModal, setSettingsModal] = useState(<></>);
	const userLoggedIn = firebase.getUser();
	const [postData, setPostData] = useState({
		id: "",
		data: {
			title: "",
			visibility: "public",
			description: "",
		}
	});
	
	const handleChange = async (editor) => {
		const savedData = await editor.saver.save();
		await firebase.setPostField(editorId, "blocks", JSON.stringify(savedData));
	}

	const handleTitleChange = async (e) => {
		const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-" + slugify(e.target.value).toLowerCase();
		await firebase.setPostField(editorId, "title", e.target.value);
		await firebase.setPostField(editorId, "slug", slug);
	}

	const handleVisibilityChange = async (obj) => {
		await firebase.setPostField(editorId, "visibility", obj.type);
	}

	const handleDescriptionChange = async (e) => {
		await firebase.setPostField(editorId, "description", e.target.value);
	}

	const handleOpenSettingsModal = () => {
		const [v, d] = [postData.data.visibility, postData.data.description];
		setSettingsModal(
			<EditorSettingsModal key={Math.round(Math.random() * 1000000)} onVisibilityChange={handleVisibilityChange} onDescriptionChange={handleDescriptionChange} visibility={v} description={d}/>
		);
	}
	
	useEffect(() => {
		async function fetchPostData() {
			const post = (await firebase.getPostByFields(where("uuid", "==", uuid)))[0];
			editorId = post.id;
			setPostData({id: post.id, data: post.data});
			let editor = new EditorJS({
				holder: 'editor',
				tools: {
					list: {
						class: List,
						inlineToolbar: true
					},
					image: {
						class: Image,
						config: {
							uploader: {
								uploadByFile(file){
									const storageRef = ref(firebase.storage, "uploads/" + file.name + "-" + Date.now());
									// 'file' comes from the Blob or File API
									return uploadBytes(storageRef, file).then(async (snapshot) => {
										return {
											success: 1,
											file: {
												url: await getDownloadURL(snapshot.ref),
											}
										};
									});
								},
						
								uploadByUrl(url){
									// no
								}
							}
						}
					},
					header: Header,
					delimiter: Delimiter,
					code: CodeTool
				},
				data: JSON.parse(post.data.blocks),
				onChange: handleChange,
				onReady: () => {
					new Undo({ editor });
					new DragDrop(editor);
				},
			});
		}
		fetchPostData();
		async function fetchUserData() {
			const data = await firebase.getUserData(userLoggedIn.uid);
			setUserData({
				role: "Admin", // Will always be Admin, since only admins can make posts
				name: data.name,
				avatar: data.avatar
			});
		}
		fetchUserData();
	}, []);

	return (
		<>
			<EditorNavbar
				name={userData.name}
				role={userData.role}
				avatar={userData.avatar}
				title={postData.data.title}
				onTitleChange={handleTitleChange}
				openSettingsModal={handleOpenSettingsModal}/>
			<div className="flex justify-center w-full h-full mt-16">
				<style>{"\
					.prose :where(img):not(:where([class~=\"not-prose\"] *)) {\
						margin-top: 0;\
						margin-bottom: 0;\
					}\
				"}</style>
				<script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
				<div className="w-full h-full px-4 pt-8 prose shadow-lg md:px-0 md:w-11/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12 max-w-none">
					<div id="editor"></div>
				</div>
			</div>
			{settingsModal}
		</>
	);
}

export default PostEditor