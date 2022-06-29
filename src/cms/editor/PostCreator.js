// Adds a post editor based on EditorJS that creates new posts and saves them to the Firestore database
import React, { useState, useEffect } from 'react';
import firebase from "../../utils/firebase";
import PropTypes from "prop-types"
import slugify from 'slugify';
import {v4 as uuidv4} from 'uuid';

function PostCreator() {
	const userLoggedIn = firebase.getUser();
 
	const handleSubmit = async () => {
		const slug = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString() + "-" + slugify("New post").toLowerCase();
		const uuid = uuidv4();
		
		const post = {
			author: userLoggedIn.uid,
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
		<button onClick={handleSubmit} className="fixed w-16 h-16 p-0 transition duration-200 ease-in bg-red-600 rounded-full shadow hover:bg-red-700 active:shadow-lg mouse focus:outline-none bottom-10 right-10">
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="inline-block w-6 h-6">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399 C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
	);
}

export default PostCreator;