import React from "react";
import {
	BellIcon,
	CogIcon,
	CreditCardIcon,
	KeyIcon,
	UserCircleIcon,
	ViewGridAddIcon,
  } from '@heroicons/react/outline';

const subNavigation = [
	{ name: 'Users', href: '#', icon: UserCircleIcon, current: true },
	{ name: 'Account', href: '#', icon: CogIcon, current: false },
	{ name: 'Password', href: '#', icon: KeyIcon, current: false },
	{ name: 'Notifications', href: '#', icon: BellIcon, current: false },
	{ name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: false },
	{ name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  	return (
		<div className="bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] lg:col-span-3 rounded-md h-fit">
			<aside className="px-2 py-6 bg-gray-900 rounded-md sm:px-6 lg:py-0 lg:px-0">
					<nav className="space-y-1">
						{subNavigation.map((item) => (
						<a key={item.name}
						href={item.href}
						className={
							classNames(item.current  ? 'bg-gray-800 text-transparent bg-clip-text bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080]' : 'text-gray-200 hover:text-gray-100 hover:bg-gray-800',
						'group rounded-md px-3 py-2 flex items-center text-sm font-medium')}
						aria-current={item.current ? 'page' : undefined}>
							<item.icon
							className={classNames(
								item.current ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-200',
								'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
							)}
							aria-hidden="true"
							/>
							<span className="truncate">{item.name}</span>
						</a>
						))}
					</nav>
			</aside>
		</div>
  	)
}