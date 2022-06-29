import React from "react";
import PropType from "prop-types";

function EditorNavbarDropdownItem(props) {
	return (
		<button onClick={props.onclick} disabled={props.disabled ?? ""} className={`w-full text-left px-4 py-2 text-sm text-${props.color ?? "gray-700"} duration-200 hover:bg-gray-100 hover:disabled:cursor-not-allowed disabled:hover:bg-white disabled:text-${props.color ?? "gray-300"}`} role="menuitem" tabIndex="-1">{props.children}</button>
	);
}

EditorNavbarDropdownItem.propTypes = {
	children: PropType.node.isRequired,
	color: PropType.string,
	disabled: PropType.string,
	onclick: PropType.func,
}

export default EditorNavbarDropdownItem;