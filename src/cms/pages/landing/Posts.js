import React, { useState, useEffect } from 'react';
import firebase from "../../../utils/firebase.js";
import PropTypes from "prop-types";
import { where } from "@firebase/firestore/lite";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [userData, setUserData] = useState({role: "default"});

	useEffect(() => {
		async function fetchUserDataAndPosts() {
			const userLoggedIn = await firebase.getUser();
			var tmpUserRole = "default;" // For some reason useState doesn't work here
			if (userLoggedIn != false) {
				const data = await firebase.getUserData(userLoggedIn.uid);
				tmpUserRole = data.role;
				setUserData({role: data.role});
			}
			var whereData = where('visibility', '==', "public"); // Default value if signed out
			if (tmpUserRole == "user") whereData = where('visibility', "in", ["public", "restricted"]);
			if (tmpUserRole == "admin") whereData = where('visibility', "in", ["public", "restricted", "private"]);
			setPosts(await firebase.getPosts(whereData));
		}
		fetchUserDataAndPosts();
    }, []);

	return (
		<div className="grid gap-16 pt-10 mt-6 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.id}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <div className="block mt-2">
				{userData.role == "admin" ?
                <a className="text-xl font-semibold text-gray-100" href={"/blog/editor/" + post.data.uuid}>{post.data.title}</a> :
				<a className="text-xl font-semibold text-gray-100" href={"/blog/posts/" + post.data.slug}>{post.data.title}</a>
				}
                <p className="mt-3 text-base text-gray-200">{post.data.description}</p>
              </div>
              <div className="mt-3">
                <a href={"/blog/posts/" + post.data.slug} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
	);
}