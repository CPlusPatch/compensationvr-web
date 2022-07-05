import React from "react";
import { withAuthUser, useAuthUser } from 'next-firebase-auth'

function AccountButtons() {
	const AuthUser = useAuthUser();
	return (
		<>{AuthUser.id === null ? <SignOutButton/> : <SignInButton/>}</>
	);
}

function SignInButton() {
	const redirectToSignInPage = () => {
		window.location.pathname = "/auth/login";
	};
	return (
		<button onClick={redirectToSignInPage} type="button" className="text-base font-medium text-white hover:text-gray-300">Sign in</button>
	);
}

function SignOutButton() {
	return (
		<button onClick={() => signOut()} type="button" className="text-base font-medium text-white hover:text-gray-300">Sign out</button>
	);
}

export default withAuthUser()(AccountButtons);