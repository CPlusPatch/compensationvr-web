import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import firebase from "../../../utils/firebase";

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
];

export default function Navbar() {
	const userLoggedIn = firebase.isUserLoggedIn();
	
	return (
		<Popover as="header" className="relative font-exo">
			<div className="pt-6 bg-gray-900">
				<nav className="relative flex items-center justify-between px-4 mx-auto sm:px-6"
					aria-label="Global">
					<div className="flex items-center flex-1">
						<div className="flex items-center justify-between w-full md:w-auto">
							<a href="/">
								<span className="sr-only">CompensationVR</span>
								<img className="w-auto h-8 sm:h-10"
									src="https://cdn.discordapp.com/icons/812825311002624060/c47013b226b3d61b65c817505b707a78.webp?size=96"
									alt="" />
							</a>
							<div className="flex items-center -mr-2 md:hidden">
								<Popover.Button
									className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									<MenuIcon className="w-6 h-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="hidden space-x-8 md:flex md:ml-10">
							{navigation.map((item) => (
							<a key={item.name} href={item.href}
								className="text-base font-medium text-white hover:text-gray-300">
								{item.name}
							</a>
							))}
						</div>
					</div>
					<div className="hidden md:flex md:items-center md:space-x-6 font-exo">
						{userLoggedIn ? <SignOutButton/> : <SignInButton/>}
						<a href="/download"
							className="inline-flex items-center px-4 py-2 text-white uppercase transition-all duration-200 bg-transparent border-2 border-indigo-700 rounded-lg hover:bg-indigo-800 hover:text-white text-md hover:scale-105">
							Download
						</a>
					</div>
				</nav>
			</div>

			<Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95">
				<Popover.Panel focus
					className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden">
					<div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
						<div className="flex items-center justify-between px-5 pt-4">
							<div>
								<img className="w-auto h-8"
									src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
									alt="" />
							</div>
							<div className="-mr-2">
								<Popover.Button
									className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
									<span className="sr-only">Close menu</span>
									<XIcon className="w-6 h-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="pt-5 pb-6">
							<div className="px-2 space-y-1">
								{navigation.map((item) => (
								<a key={item.name} href={item.href}
									className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">
									{item.name}
								</a>
								))}
							</div>
							<div className="px-5 mt-6">
								<a href="#"
									className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
									Start free trial
								</a>
							</div>
							<div className="px-5 mt-6">
								<p className="text-base font-medium text-center text-gray-500">
									Existing customer?{' '}
									<a href="#" className="text-gray-900 hover:underline">
										Login
									</a>
								</p>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

function SignOutButton() {
	const userLoggedIn = firebase.isUserLoggedIn();

	const handleSignOut = async () => {
		await firebase.signOut();
		window.location.pathname = "/blog"
	};
	return userLoggedIn && (
		<button onClick={handleSignOut} type="button" className="text-base font-medium text-white hover:text-gray-300">Sign out</button>
	)
}

function SignInButton() {
	const redirectToSignInPage = () => {
		window.location.pathname = "/blog/login";
	};
	return (
		<button onClick={redirectToSignInPage} type="button" className="text-base font-medium text-white hover:text-gray-300">Sign in</button>
	);
}