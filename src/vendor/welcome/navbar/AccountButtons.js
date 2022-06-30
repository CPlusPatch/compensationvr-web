import React from "react";
import firebase from "../../../utils/firebase";

export default function AccountButtons() {
	const userLoggedIn = firebase.isUserLoggedIn();

	return (
		<>{userLoggedIn ? <SignOutButton/> : <SignInButton/>}</>
	);
}

function SignInButton() {
	const redirectToSignInPage = () => {
		window.location.pathname = "/blog/login";
	};
	return (
		<button onClick={redirectToSignInPage} type="button" className="text-base font-medium text-white hover:text-gray-300">Sign in</button>
	);
}

function SignOutButton() {
	const userLoggedIn = firebase.isUserLoggedIn();

	const handleSignOut = async () => {
		await firebase.signOut();
		window.location.pathname = "/blog";
	};
	return userLoggedIn && (
		<button onClick={handleSignOut} type="button" className="text-base font-medium text-white hover:text-gray-300">Sign out</button>
	);
}