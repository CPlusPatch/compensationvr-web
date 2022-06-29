import React, { useState } from "react";
import PropType from "prop-types";
import { Transition } from "@tailwindui/react";

function EditorNavbarDropdown(props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="relative inline-block text-left">
			<div>
				<button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
				{props.text}
				<svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
				</svg>
				</button>
			</div>

			<Transition
				show={isOpen}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95">
				<div className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
					{props.children}
				</div>
			</Transition>
		</div>
	)
}

EditorNavbarDropdown.propTypes = {
	text: PropType.string.isRequired,
	children: PropType.node.isRequired,
};

export default EditorNavbarDropdown;