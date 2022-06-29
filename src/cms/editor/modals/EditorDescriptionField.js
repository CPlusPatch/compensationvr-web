import React from "react";
import PropType from "prop-types";

function EditorDescriptionField(props) {
	return (
		<textarea defaultValue={props.defaultDescription} onChange={props.onchange} className="w-full p-2 mt-2 transition duration-200 border-b-4 rounded-md shadow-sm outline-none focus:border-blue-600 focus:outline-0 focus-visible:outline-0" rows="4"></textarea>
	);
}

EditorDescriptionField.propTypes = {
	onchange: PropType.func.isRequired,
	defaultDescription: PropType.string.isRequired
}

export default EditorDescriptionField;