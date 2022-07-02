import React from "react";
const Navbar = React.lazy(() => import("./navbar/Navbar"));
import itchIo from "../../static/itch-io.svg";
import sidequest from "../../static/sidequest.webp";
import banner from "../../static/banner.webp";
import bobrobot1 from "../../static/bobrobot1.webp";
import jai from "../../static/jai.webp";
import keightie from "../../static/Keightie.webp";
import leon from "../../static/leon-pfp.webp";
import rose from "../../static/Rose932.webp";
import zoey from "../../static/Zoey.webp";
import ominousRose from "../../static/ominous-rose.webp"
import friendlyRose from "../../static/friendly-rose.webp"
import ravenMusk from "../../static/raven-musk.webp"
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Footer from "../../cms/pages/Footer";

  
/*
	LeonInfinity#4012 - In-Game Development, XR Controls, Networking
	Rose932#1454 - In-Game Development, Creation Tools, API, XRUI, Web
	Bobrobot1#1408 - CVRNet Development
	Keightie#0001 - XR Development
	jai#0001 - API Assistance, Kotlin
	Zoey#1337 - API Development, Golang

	Thank you for being amazing!
*/
  
const people = [
	  {
		name: 'LeonInfinity',
		role: 'In-Game Development, XR Controls, Networking',
		imageUrl: leon,
		twitterUrl: '#',
		discordUrl: '#',
	  },
	  {
		name: 'Rose932',
		role: 'In-Game Development, Creation Tools, API, XRUI, Web',
		imageUrl: rose,
		twitterUrl: '#',
		discordUrl: '#',
	  },
	  {
		name: 'Bobrobot1',
		role: 'CVRNet Development',
		imageUrl: bobrobot1,
		twitterUrl: '#',
		discordUrl: '#',
	  },
	  {
		name: 'Keightie',
		role: 'XR Development',
		imageUrl: keightie,
		twitterUrl: '#',
		discordUrl: '#',
	  },
	  {
		name: 'jai',
		role: 'API Assistance, Kotlin',
		imageUrl: jai,
		twitterUrl: '#',
		discordUrl: '#',
	  },
	  {
		name: 'Zoey',
		role: 'API Development, Golang',
		imageUrl: zoey,
		twitterUrl: '#',
		discordUrl: '#',
	  }
]
  
const blogPosts = [
	{
		id: 1,
		title: 'Recent DDOS attack',
		href: '#',
		date: 'May 22, 2022',
		datetime: '2022-05-22',
		category: { name: 'News', href: '#' },
		imageUrl: ominousRose,
		preview: "It has come to our attention that our servers have been hit by a Distributed Denial of Service attack. This is a serious issue and we are currently working to resolve it.",
		author: {
			name: 'LeonInfinity',
			imageUrl: leon,
			href: '#',
		},
		readingLength: '2 min',
	}
]

export default function FrontPage() {
	return (
		<div className='bg-gray-900'>
			<div className="relative mx-auto overflow-hidden max-w-7xl">
				<Navbar/>
				<main>
					<MainBanner/>
					<GamePresentation/>
					<Testimonials/>
					<Articles/>
					<TeamPresentation/>
					<Support/>
				</main>
				<Footer/>
			</div>
		</div>
	);
}

function MainBanner() {
	return (
		<div className="container flex flex-col flex-wrap items-center px-6 pt-0 mx-auto md:flex-row">
			<div className="flex flex-col justify-center w-full overflow-y-hidden xl:w-2/5 lg:items-start font-exo">
				<h1 className="my-4 text-3xl font-black text-center text-transparent md:text-5xl md:text-left bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text">
					COMPENSATIONVR</h1>
				<p className="mb-8 text-base leading-normal text-center text-gray-200 md:text-2xl md:text-left">
					CompensationVR is a VR social game designed with the goal to be as fun as friendly as
					possible.</p>

				<p className="pb-8 font-bold text-center text-blue-400 lg:pb-6 md:text-left fade-in">Download our
					game:</p>
				<div className="flex justify-center w-full pb-24 md:justify-start lg:pb-0 fade-in glow">
					<a href="https://leonto-gamer.itch.io/compensation-vr">
						<img fetchpriority="high" src={itchIo} alt="" className="h-12 pr-4" width="171" h="48"/>
					</a>
					<a href="https://sidequestvr.com/app/6232/compensation-vr">
						<img fetchpriority="high" src={sidequest} alt="" className="h-12" width="162" h="48" />
					</a>
				</div>

			</div>

			<div className="w-full overflow-y-hidden xl:w-3/5">
				<img fetchpriority="high" className="hidden w-5/6 mx-auto lg:mr-0 md:block" alt="" src={banner} width="616" height="616"/>
			</div>
		</div>
	);
}

function GamePresentation() {
	return (
		<div className="relative">
			<div className="max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
				<div>
					<h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">Very cool</h2>
					<p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
						Epic gamer moments
					</p>
					<p className="mx-auto mt-5 text-xl text-gray-200 max-w-prose">
						Enjoy hours of fun in our new VR Social Game, where you can chat with your friends and
						compete against each other in a fun and competitive environment.
					</p>
				</div>
				<div className="mt-12">
					<img loading="lazy" className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
						src={friendlyRose} alt="" width="1216" height="684"/>
				</div>
			</div>
		</div>
	);
}

function Testimonials() {
	return (
		<div className="pb-16 my-32 rounded-md bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 lg:pb-0 lg:z-10 lg:relative">
			<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
				<div className="relative lg:-my-8">
					<div aria-hidden="true" className="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden" />
					<div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
						<div className="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
							<img loading="lazy" className="object-cover lg:h-full lg:w-full"
								src={ravenMusk} alt="" />
						</div>
					</div>
				</div>
				<div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8 font-exo">
					<div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
						<blockquote>
							<div>
								<svg className="w-12 h-12 text-white opacity-25" fill="currentColor"
									viewBox="0 0 32 32" aria-hidden="true">
									<path
										d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
								</svg>
								<p className="mt-6 text-2xl font-medium text-white">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet, mauris ut mollis malesuada, ex orci laoreet leo, in placerat odio lorem nec magna. Donec auctor luctus mauris non consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin interdum eu libero ut dignissim.
								</p>
							</div>
							<footer className="mt-6">
								<p className="text-base font-medium text-white">Raven Musk</p>
								<p className="text-base font-medium text-cyan-100">CEO at SpaceX</p>
							</footer>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}

function Articles() {
	return (
		<div className="relative py-16 sm:py-24 font-exo">
			<div className="relative">
				<div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
					<h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">News</h2>
					<p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
						Latest news
					</p>
					<p className="mx-auto mt-5 text-xl text-gray-200 max-w-prose">
						New things are always being added as time goes by. Here are some of our latest posts!
					</p>
				</div>
				<div
					className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
					{blogPosts.map((post) => (
					<div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
						<div className="flex-shrink-0">
							<img loading="lazy" className="object-cover w-full h-48" src={post.imageUrl} alt="" />
						</div>
						<div className="flex flex-col justify-between flex-1 p-6 bg-gray-800">
							<div className="flex-1">
								<p className="text-sm font-medium text-rose-600">
									<a href={post.category.href} className="hover:underline">
										{post.category.name}
									</a>
								</p>
								<a href={post.href} className="block mt-2">
									<p className="text-xl font-semibold text-gray-100">{post.title}</p>
									<p className="mt-3 text-base text-gray-200">{post.preview}</p>
								</a>
							</div>
							<div className="flex items-center mt-6">
								<div className="flex-shrink-0">
									<a href={post.author.href}>
										<img loading="lazy" className="w-10 h-10 rounded-full" src={post.author.imageUrl}
											alt={post.author.name} />
									</a>
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-100">
										<a href={post.author.href} className="hover:underline">
											{post.author.name}
										</a>
									</p>
									<div className="flex space-x-1 text-sm text-gray-200">
										<time dateTime={post.datetime}>{post.date}</time>
										<span aria-hidden="true">&middot;</span>
										<span>{post.readingLength} read</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	);
}

function TeamPresentation() {
	return (
		<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24 font-exo">
			<div className="space-y-12">
				<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">Our Team</h2>
					<p className="text-xl text-gray-200">
						Subsurface Studios is a small team of dedicated developers who are passionate about building a better VR experience for everyone.
					</p>
				</div>
				<ul
					className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
					{people.map((person) => (
					<li key={person.name}>
						<div className="space-y-4">
							<div className="overflow-hidden bg-gray-800 rounded-lg aspect-w-3 aspect-h-2">
								<img loading="lazy" className="object-cover shadow-lg" src={person.imageUrl}
									alt="" />
							</div>

							<div className="space-y-2">
								<div className="space-y-1 text-lg font-medium leading-6">
									<h3 className="text-xl text-gray-200">{person.name}</h3>
									<p className="text-indigo-600">{person.role}</p>
								</div>
								<ul className="flex space-x-5">
									<li>
										<a href={person.twitterUrl}
											className="text-gray-400 hover:text-gray-500">
											<span className="sr-only">Twitter</span>
											<svg className="w-5 h-5" aria-hidden="true" fill="currentColor"
												viewBox="0 0 20 20">
												<path
													d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</a>
									</li>
									<li>
										<a href={person.discordUrl}
											className="text-gray-400 hover:text-gray-500">
											<span className="sr-only">LinkedIn</span>
											<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
												<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					))}
				</ul>
			</div>
		</div>
	);
}

function Support() {
	return (
		<div className="relative bg-gray-900 font-exo">
			<div className="relative h-56 bg-indigo-600 rounded-md sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
				<img loading="lazy" className="object-cover w-full h-full"
					src="https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-23-5a3bbbdb48827__700.jpg"
					alt="" />
			</div>
			<div
				className="relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
				<div className="md:ml-auto md:w-1/2 md:pl-10">
					<h2 className="text-base font-semibold tracking-wider text-gray-300 uppercase">Need support?</h2>
					<p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">We&apos;re here
						to help!</p>
					<p className="mt-3 text-lg text-gray-300">
						Click here to join our Discord server and ask any questions you have! Whether you are lost and need help or you are just curious, we&apos;re here for you!
					</p>
					<div className="mt-8">
						<div className="inline-flex rounded-md shadow">
							<a href="https://discord.gg/AMejDS2u6e"
								className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50">
								Visit the Discord
								<ExternalLinkIcon className="w-5 h-5 ml-3 -mr-1 text-gray-400"
									aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}