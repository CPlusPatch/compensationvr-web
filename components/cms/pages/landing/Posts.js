import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

export default function Posts(props) {
	console.log(props);
	return (
		<div className="grid gap-16 pt-10 mt-6 lg:gap-y-12">
          {props.posts.map((post) => (
            <div key={post.id}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <div className="block mt-2">
				{props.role == "admin" ?
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

Posts.propTypes = {
	posts: PropTypes.array,
	role: PropTypes.string,
};