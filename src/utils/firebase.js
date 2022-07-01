/*
Methods defined here:

LOGIN
 - isUserLoggedIn
 - getUser
 - setUserField
 - deleteUser
 - getUserField
 - createUser

POSTS
 - getPosts
 - getPost
 - createPost
 - updatePost
 - deletePost
*/
import { initializeApp } from "firebase/app";
import { initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence, browserPopupRedirectResolver, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, query, collection, setDoc, getFirestore, orderBy, getDocs } from "@firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import persistedState from "./PersistedState";

const firebaseConfig = {
	apiKey: "AIzaSyBsJOhdSHcvk625x5d3BOcX9UnJ1Ys1Nm0",
	authDomain: "compensationvr-bb8ff.firebaseapp.com",
	projectId: "compensationvr-bb8ff",
	storageBucket: "compensationvr-bb8ff.appspot.com",
	messagingSenderId: "852277647581",
	appId: "1:852277647581:web:99c67df192cec85d1a6334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Use this weird way of initializing auth because of a bug that loads a shitass useless component if we
const auth = initializeAuth(app, {
	persistence: [
		indexedDBLocalPersistence,
		browserLocalPersistence,
		browserSessionPersistence
	],
});
const storage = getStorage(app);

export default {
	app: app,
	storage: storage,
	isUserLoggedIn: () => {
		let userLoggedIn = persistedState.getState("user", {});
		return JSON.stringify(userLoggedIn) !== "{}";
	},
	getUser: async () => {
		let userLoggedIn = persistedState.getState("user", {});
		return JSON.stringify(userLoggedIn) !== "{}" ? userLoggedIn : false;
	},
	getUserData: async (user) => {
		// Takes a user ID and returns the user's data
		return (await getDoc(doc(db, 'users', user))).data();
	},
	setUserField: async (field, value) => {
		let userLoggedIn = persistedState.getState("user", {});
		await setDoc(doc(db, 'users', userLoggedIn.uid), {[field]: value});
	},
	signOut: async () => {
		await auth.signOut();
		return persistedState.setState("user", {});
	},
	getUsers: async () => {
		return (await getDocs(query(collection(db, 'users')))).docs.map(doc => doc.data());
	},
	logIn: async (email, password) => {
		try {
			var user = await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			return false
		}
		
		persistedState.setState("user", user.user);
		return user.user;
	},
	getPosts: async (whereData = false) => {
		const q = whereData ? query(collection(db, 'posts'), whereData, orderBy("date", "desc")) : query(collection(db, 'posts'), orderBy("date", "desc"));
		let posts = [];

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts;
	},
	getPostByFields: async (...fields) => {
		let posts = [];
		const querySnapshot = await getDocs(query(collection(db, 'posts'), ...fields));
		querySnapshot.forEach((doc) => {
			posts.push({
				id: doc.id,
				data: doc.data()
			});
		});
		return posts;
	},
	setPostField: async (postId, field, value) => {
		console.log(postId, field, value);
		return await setDoc(doc(collection(db, 'posts'), postId), {
			[field]: value
		}, { merge: true });
	},
	addPost: async (postData) => {
		await setDoc(doc(collection(db, 'posts')), postData);
	},
};