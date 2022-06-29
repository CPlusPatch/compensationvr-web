import React from "react";
import firebase from "../utils/firebase";

function SignInPage() {
	return (
		<section className="flex flex-col items-center h-screen md:flex-row">
			<div className="hidden w-full h-screen bg-indigo-600 lg:block md:w-1/2 xl:w-2/3">
				<img src="https://source.unsplash.com/random" alt="" className="object-cover w-full h-full"></img>
			</div>

			<div className="flex items-center justify-center w-full h-screen px-6 duration-100 bg-white shadow md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 hover:shadow-2xl">

				<div className="w-full h-100">


					<h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">Log in to your account</h1>

					<FullwidthLoginForm/>

					<hr className="w-full my-6 border-gray-300"></hr>

					<button type="button" className="block w-full px-4 py-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg opacity-50 cursor-not-allowed">
						<div className="flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
								viewBox="0 0 48 48">
								<defs>
									<path id="a"
										d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
								</defs>
								<clipPath id="b">
									<use xlinkHref="#a" overflow="visible" />
								</clipPath>
								<path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
								<path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
								<path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
								<path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
							</svg>
							<span className="ml-4">Log in with Google</span>
						</div>
					</button>

					<p className="mt-8">Need an account? <a href="/blog/register" className="font-semibold text-blue-500 hover:text-blue-700">Create an account</a></p>


				</div>
			</div>

		</section>
	)
}

function FullwidthLoginForm() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const email = e.target.email.value;
		const password = e.target.password.value;

		let user = await firebase.logIn(email, password)
		if(user) {
			window.location.pathname = "/blog";
			console.log("Logged in")
		} else {
			alert("Invalid email or password");
		}
	}
	return (
		<form className="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
			<div>
				<label className="block text-gray-700">Email Address</label>
				<input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-3 mt-2 duration-200 bg-gray-200 border rounded-md focus:border-blue-500 focus:bg-white"
					autoFocus autoComplete="true" required></input>
			</div>

			<div className="mt-4">
				<label className="block text-gray-700">Password</label>
				<input type="password" name="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 mt-2 duration-200 bg-gray-200 border rounded-md focus:border-blue-500 focus:bg-white" required></input>
			</div>

			<div className="mt-2 text-right">
				<a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
			</div>

			<button type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:bg-indigo-400">Log In</button>
		</form>
	);
}

export default SignInPage;