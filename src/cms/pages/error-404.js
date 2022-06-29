import React from "react";
import { ChevronRightIcon } from '@heroicons/react/solid'
import { MailOpenIcon, BookOpenIcon, RssIcon, ViewListIcon } from '@heroicons/react/outline'

export default function Error404() {
	const links = [
		{ title: 'Main Page', description: 'Check out CPlusPatch and his stuff there', icon: BookOpenIcon, href: '/' },
		{ title: 'Blog', description: 'My experimental CMS system is here', icon: RssIcon, href: '/blog' },
		{ title: 'Contact', description: 'How to contact me', icon: MailOpenIcon, href: "/contact" },
	]
	return (
		<div className="bg-gray-900">
			<main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex-shrink-0 pt-16">
				<img
					className="w-auto h-20 mx-auto"
					src="/assets/logo.svg"
					alt="CPlusPatch Logo"
				/>
				</div>
				<div className="max-w-xl py-16 mx-auto sm:py-24">
				<div className="text-center">
					<p className="text-sm font-semibold tracking-wide text-transparent uppercase bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">404 error</p>
					<h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
					You&apos;re lost :/
					</h1>
					<p className="mt-2 text-lg text-gray-300">I can&apos;t find that page here, are you logged in?</p>
				</div>
				<div className="mt-12">
					<h2 className="text-sm font-semibold tracking-wide text-transparent uppercase bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">Popular pages</h2>
					<ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
					{links.map((link, linkIdx) => (
						<li key={linkIdx} className="relative flex items-start py-6 space-x-4">
						<div className="flex-shrink-0">
							<span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
							<link.icon className="w-6 h-6 text-indigo-700" aria-hidden="true" />
							</span>
						</div>
						<div className="flex-1 min-w-0">
							<h3 className="text-base font-medium text-gray-900">
							<span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
								<a href={link.href} className="text-white focus:outline-none">
								<span className="absolute inset-0" aria-hidden="true" />
								{link.title}
								</a>
							</span>
							</h3>
							<p className="text-base text-gray-300">{link.description}</p>
						</div>
						<div className="self-center flex-shrink-0">
							<ChevronRightIcon className="w-5 h-5 text-gray-100" aria-hidden="true" />
						</div>
						</li>
					))}
					</ul>
					<div className="mt-8">
					<a href="/" className="text-base font-medium text-transparent bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">
						Or go back home<span aria-hidden="true"> &rarr;</span>
					</a>
					</div>
				</div>
				</div>
			</main>
		</div>
	);
}