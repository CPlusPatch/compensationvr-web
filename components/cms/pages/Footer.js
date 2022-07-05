import React from "react";

const navigation = {
	products: [
		{ name: 'CompensationVR', href: '' },
		{ name: 'CVR API', href: 'https://github.com/bubby932/VigorXRAPI' },
		{ name: 'CVR website', href: 'https://github.com/CPlusPatch/compensationvr-web' },
	],
	support: [
		{ name: 'Discord', href: 'https://discord.gg/AMejDS2u6e' },
		{ name: "CVR Mail", href: 'mailto:compensationvr@gmail.com' },
		{ name: "Website admin", href: "mailto:contact@cpluspatch.com"}
	],
	company: [
		{ name: 'About', href: '/about' },
		{ name: 'Blog', href: '/blog' },
	],
	legal: [
		{ name: 'Claim', href: 'mailto:compensationvr@gmail.com' },
		{ name: 'Privacy', href: 'https://compensationvr.tk/legal/privacy-policy/' },
		{ name: 'ToS', href: 'https://compensationvr.tk/legal/terms-of-service/' },
	],
	social: [
		{
			name: 'Twitter',
			href: 'https://twitter.com/CompensationVR',
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
				</svg>
			),
		},
		{
			name: 'GitHub',
			href: 'https://github.com/CPlusPatch/',
			icon: (props) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
  }
  
export default function Footer() {
	return (
		<div className="font-exo">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Products</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.products.map((item) => (
									<li key={item.name}>
										<a href={item.href} className="text-base text-gray-300 hover:text-white">
											{item.name}
										</a>
									</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.support.map((item) => (
									<li key={item.name}>
										<a href={item.href} className="text-base text-gray-300 hover:text-white">
											{item.name}
										</a>
									</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Company</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.company.map((item) => (
									<li key={item.name}>
										<a href={item.href} className="text-base text-gray-300 hover:text-white">
											{item.name}
										</a>
									</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Legal</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.legal.map((item) => (
									<li key={item.name}>
										<a href={item.href} className="text-base text-gray-300 hover:text-white">
											{item.name}
										</a>
									</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-8 xl:mt-0">
						<h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
							Subscribe to our newsletter
						</h3>
						<p className="mt-4 text-base text-gray-300">
							This option is not available yet
						</p>
						{/* <form className="mt-4 sm:flex sm:max-w-md">
							<label className="sr-only">
								Email address
							</label>
							<input type="email" name="email" autoComplete="email" required="" className="w-full min-w-0 px-4 py-2 text-base text-gray-900 bg-gray-400 border border-transparent rounded-md shadow-md appearance-none cursor-not-allowed" disabled=""/>
							<div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button type="submit"  disabled="disabled"
									className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-md cursor-not-allowed">
									Subscribe
								</button>
							</div>
						</form> */}
					</div>
				</div>
				<div className="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
						<a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
							<span className="sr-only">{item.name}</span>
							<item.icon className="w-6 h-6" aria-hidden="true" />
						</a>
						))}
					</div>
					<p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
						Made with <span className="text-red-500">&hearts;</span> by <a href="https://cpluspatch.com" className="underline">CPlusPatch</a>
					</p>
				</div>
			</div>
		</div>
	);
};