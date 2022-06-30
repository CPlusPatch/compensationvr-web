import React from "react";

function Footer() {
	return (
		<footer>
		<div className="flex flex-col items-center mt-16">
			<div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
				<div>Made with love by <a href="https://cpluspatch.com">CPlusPatch</a></div>
				<div> • </div>
				<div>2022</div>
				<div> • </div>
				<a href="/">CompensationVR is the best</a>
			</div>
		</div>
	</footer>
	);
}

export default Footer;