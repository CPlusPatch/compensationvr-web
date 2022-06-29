import React from "react";
import firebase from "../../../utils/firebase.js";
		
function AppNavbar() {
	const userLoggedIn = firebase.isUserLoggedIn();

	return (
		<header className="flex items-center justify-between py-10">
			<div><a aria-label="TailwindBlog" href="/">
					<div className="flex items-center justify-between">
						<div className="mr-3">
							<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512" overflow="hidden">
								<defs id="_ahicTeclJLXvrGDvXlvWD"
									transform="matrix(0.9207033031013849, 0, 0, 0.9207033031013849, -13.247024509484397, 125.25114480431304)">
								</defs>
								<g id="_ttsiO5aWgfgI9dScdb90H"
									transform="matrix(3.4377660751342773, 0, 0, 3.4377660751342773, 70.50003879390005, -586.0355089013633)">
									<path id="_iK8zcPzmv90arHuJ8dHp_" fill="#1761a0"
										transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.820785522460938, 177.78671264648438)"
										data-type="polygon"
										d="M36.703 11.011L9.638 26.636L9.638 38.757L36.703 23.131L63.767 38.757L63.767 26.636Z"></path>
									<path id="_EvdYjmwpEee_oLcoDMbJs" fill="#4c96d7"
										transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.28351879119873, 178.66650390625)"
										data-type="polygon"
										d="M63.298 89.092L36.233 73.467L36.233 61.348L63.298 76.973L90.362 61.348L90.362 73.467Z"></path>
									<path id="_ENK-PmC0r9u6aLgbi6Pg1" fill="#4c96d7"
										transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.15572738647461, 177.95213317871094)"
										data-type="polygon"
										d="M9.638 42.012L36.703 26.386L47.198 32.446L20.134 48.072L20.134 79.324L9.638 73.264Z"></path>
									<path id="_L_yBvBmPCbNMW5_dWLtFZ" fill="#4c96d7"
										transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.002666473388672, 178.13897705078125)"
										data-type="polygon"
										d="M77.083 18.872L50.018 3.247L39.522 9.307L66.586 24.932L66.586 56.184L77.083 50.124Z"></path>
									<path id="_mUjvX9AtBAUEBoPN452LJ" fill="#1761a0"
										transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.651481628417969, 178.71014404296875)"
										data-type="polygon"
										d="M23.01 81.127L23.011 49.876L33.507 43.816L33.507 75.068L60.571 90.693L50.075 96.754Z"></path>
									<path id="_EQDmN8FyYEsJVmeMaMdzQ" fill="#1761a0"
										transform="matrix(1.33023202419281, 0, 0, 1.33023202419281, -12.375923156738281, 178.7588348388672)"
										data-type="polygon"
										d="M90.362 58.092L90.362 26.84L79.866 20.78L79.866 52.031L52.802 67.658L63.298 73.719Z"></path>
								</g>
							</svg>
						</div>
						<div className="hidden h-6 text-2xl font-semibold sm:block">CPlusPatch <span className="text-blue-500">CMS</span></div>
					</div>
				</a></div>
			<div className="flex items-center text-base leading-5">
				<div className="block">
					<a className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4" href="/">Blog</a>
					{userLoggedIn ? <SignOutButton/> : <SignInButton/>}
				</div>
			</div>
		</header>
	);
}

function SignOutButton() {
	const userLoggedIn = firebase.isUserLoggedIn();

	const handleSignOut = async () => {
		await firebase.signOut();
		window.location.pathname = "/blog"
	};
	return userLoggedIn && (
		<button onClick={handleSignOut} type="button" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">Sign out</button>
	)
}

function SignInButton() {
	const redirectToSignInPage = () => {
		window.location.pathname = "/blog/login";
	};
	return (
		<button onClick={redirectToSignInPage} type="button" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">Sign in</button>
	);
}

export default AppNavbar;