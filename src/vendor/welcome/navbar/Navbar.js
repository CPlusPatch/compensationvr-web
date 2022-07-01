import React, { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
const AccountButtons = React.lazy(() => import('./AccountButtons'));

const navigation = [
	{ name: 'News', href: '/blog' },
	{ name: 'About', href: '#' },
	{ name: 'Our team', href: '#' },
	{ name: 'Contact', href: '#' },
];

export default function Navbar() {
	
	
	return (
		<Popover as="header" className="relative font-exo">
			<div className="pt-6 bg-gray-900">
				<nav className="relative flex items-center justify-between px-4 mx-auto sm:px-6"
					aria-label="Global">
					<div className="flex items-center flex-1">
						<div className="flex items-center justify-between w-full md:w-auto">
							<a href="/">
								<span className="sr-only">CompensationVR</span>
								<img className="w-8 h-8 sm:h-10 sm:w-10"
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
						<AccountButtons/>
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
					<div className="overflow-hidden bg-gray-800 rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
						<div className="flex items-center justify-between px-5 pt-4">
							<div>
								<img className="w-8 w-auto h-8"
									src="https://cdn.discordapp.com/icons/812825311002624060/c47013b226b3d61b65c817505b707a78.webp?size=96"
									alt="" />
							</div>
							<div className="-mr-2">
								<Popover.Button
									className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400">
									<span className="sr-only">Close menu</span>
									<XIcon className="w-6 h-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
						<div className="pt-5 pb-6">
							<div className="px-2 space-y-1">
								{navigation.map((item) => (
								<a key={item.name} href={item.href}
									className="block px-3 py-2 text-base font-medium text-gray-200 rounded-md hover:bg-gray-50">
									{item.name}
								</a>
								))}
							</div>
							<div className="px-5 mt-6">
								<a href="/blog/login" className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
									Login
								</a>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}

