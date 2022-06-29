import './App.css';
import React, { useState } from "react";
import Welcome from "./cms/pages/landing/Welcome";
import SignInPage from './auth/SignInPage';
import PostEditor from "./cms/editor/PostEditor";
import PostView from "./cms/pages/posts/PostView";
import FrontPage from './vendor/welcome/FrontPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './cms/pages/error-404';
import SiteSettings from './cms/settings/SiteSettings';

function App() {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="*" element={<Error404 />} />
				<Route path="/">
					<Route index element={<FrontPage />} />
					<Route path="blog">
						<Route index element={<Welcome />} />
						<Route path="login" element={<SignInPage/>} />
						<Route path="editor/:uuid" element={<PostEditor />}/>
						<Route path="posts/:slug" element={<PostView />}/>
					</Route>
					<Route path="dashboard">
						<Route index element={<SiteSettings />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
