import './App.css';
import React from "react";
const Welcome = React.lazy(() => import("./cms/pages/landing/Welcome"));
const SignInPage = React.lazy(() => import("./auth/SignInPage"));
const PostEditor = React.lazy(() => import("./cms/editor/PostEditor"));
const PostView = React.lazy(() => import("./cms/pages/posts/PostView"));
const FrontPage = React.lazy(() => import('./vendor/welcome/FrontPage'));
const ShitpostFrontPage = React.lazy(() => import('./vendor/welcome/ShitpostFrontPage'));
const Error404 = React.lazy(() => import('./cms/pages/error-404'));
const SiteSettings = React.lazy(() => import('./cms/settings/SiteSettings'));
const Social = React.lazy(() => import('./vendor/social/Social'));
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="*" element={<Error404 />} />
				<Route path="/">
					<Route index element={<FrontPage />} />
					<Route path="cpluspatch" element={<ShitpostFrontPage/>}/>
					<Route path="social" element={<Social/>}/>
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
