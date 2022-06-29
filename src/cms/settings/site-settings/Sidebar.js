import React from "react";
import { People, FilePost, Palette2 } from "react-bootstrap-icons";
import Users from "./pages/users/Users";

const navigation = [
  { name: 'Users', href: '#', icon: People, current: true },
  { name: 'Posts', href: '#', icon: FilePost, current: false },
  { name: 'Theming', href: '#', icon: Palette2, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
	<div className="flex flex-col mt-6 space-x-6 sm:flex-row">
		<div className="w-full px-4 mb-4 lg:w-1/5 grow-0 sm:px-0">
			<nav className="w-full space-y-1 overflow-hidden rounded-md shadow-md" aria-label="Sidebar">
			{navigation.map((item) => (
				<a
				key={item.name}
				href={item.href}
				className={classNames(
					item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
					'group flex items-center px-3 py-3 text-sm font-medium'
				)}
				aria-current={item.current ? 'page' : undefined}
				>
				<item.icon
					className={classNames(
					item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
					'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
					)}
					aria-hidden="true"
				/>
				<span className="truncate">{item.name}</span>
				</a>
			))}
			</nav>
		</div>
		<div className="px-2 grow">
			<Users/>
		</div>
	</div>
  )
}