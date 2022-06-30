import React from "react";
const Footer = React.lazy(() => import('../Footer'));
const Posts = React.lazy(() => import("./Posts.js"));
const BlogHeader = React.lazy(() => import('./headers/BlogHeader'));
const Navbar = React.lazy(() => import('../../../vendor/welcome/navbar/Navbar'));

function Welcome() {
	return (
		<div className='w-full h-full bg-gray-900'>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<main className="mt-14">
					<div className="divide-y divide-gray-700">
						<BlogHeader/>
						<Posts />
					</div>
				<Footer/>
				</main>
			</div>
		</div>
	);
}

export default Welcome;
