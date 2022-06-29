import React from "react";
import PropTypes from "prop-types"

export default function ProjectCard(props) {
	return (
		<div className="w-full p-4 mt-2 bg-gray-800 rounded-lg shadow-lg md:mt-0">
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center">
					<span className="relative overflow-hidden rounded-lg"><img className="w-16 h-16" src={props.icon}/></span>
					<div className="flex flex-col">
						<span className="ml-2 font-bold text-white">{props.name}</span>
						<span className="ml-2 text-sm text-white">{props.desc}</span>
					</div>
				</div>
			</div>
			{props.children}
		</div>
	);
}

ProjectCard.propTypes = {
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}