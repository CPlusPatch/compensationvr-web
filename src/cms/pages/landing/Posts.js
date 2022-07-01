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
		<div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
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


/*
	THE FOLLOWING CODE IS LEGACY CODE THAT I KEPT HERE BECAUSE WHY NOT
*/
function PostCard(props) {
	const [data, setData] = useState({});

	useEffect(() => {
		async function fetchUserData() {
			const author = props.author;
			const userData = await firebase.getUserData(author);
			setData(userData);
		}
		fetchUserData();
	}, []);

	return (
		<article>
		<div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
			<dl>
				<dt className="sr-only">Published on</dt>
				<dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
					<time dateTime="2021-08-07T15:32:14.000Z">August 7, 2021</time>
				</dd>
			</dl>
			<div className="space-y-5 xl:col-span-3">
				<div className="space-y-6">
					<div>
						<h2 className="text-2xl font-bold leading-8 tracking-tight">
							{props.role == "admin" ?
							<a className="text-gray-900 dark:text-gray-100" href={"/blog/editor/" + props.uuid}>{props.title}</a>
							:
							<a className="text-gray-900 dark:text-gray-100" href={"/blog/posts/" + props.slug}>{props.title}</a>
							}
						</h2>
								
						<div className="flex flex-wrap"><a
								className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								href="/tags/next-js">category1</a><a
								className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								href="/tags/tailwind">css</a><a
								className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
								href="/tags/guide">amogos</a></div>
					</div>
					<div className="prose text-gray-500 max-w-none dark:text-gray-400">{props.desc}</div>
				</div>
				<div className="text-base font-medium leading-6"><a
						className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
						href={"/blog/posts/" + props.slug}>Read more →</a></div>
			</div>
		</div>
	</article>
	);
}


function PostCardSkeleton() {
	return (
		<article>
		<div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 animate-pulse">
			<span className="h-6 bg-gray-300 rounded-md w-36">
			</span>
			<div className="space-y-5 xl:col-span-3">
				<div className="space-y-3">
					<div>
						<div className="w-48 h-6 bg-gray-300 rounded-md">
						</div>
								
						<div className="flex flex-wrap mt-2">
							<div className="h-6 mr-3 bg-gray-300 rounded-md w-28"></div>
							<div className="h-6 mr-3 bg-gray-300 rounded-md w-28"></div>
							<div className="h-6 mr-3 bg-gray-300 rounded-md w-28"></div>
						</div>
					</div>
					<div className="w-full h-6 bg-gray-300 rounded-md"></div>
					<div className="w-full h-6 bg-gray-300 rounded-md"></div>
					<div className="w-1/2 h-6 bg-gray-300 rounded-md"></div>
				</div>
				<div className="h-6 bg-gray-300 rounded-md w-36"></div>
			</div>
		</div>
	</article>
	);
}

PostCard.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	uuid: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
}