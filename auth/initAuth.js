// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
	firebaseAdminInitConfig: {
		credential: {
			projectId: 'compensationvr-bb8ff',
			clientEmail: 'firebase-adminsdk-td5tb@compensationvr-bb8ff.iam.gserviceaccount.com',
			// The private key must not be accessible on the client side.
			privateKey: process.env.FIREBASE_PRIVATE_KEY,
		},
		databaseURL: 'https://compensationvr-bb8ff-default-rtdb.europe-west1.firebasedatabase.app',
	},
    firebaseClientInitConfig: {
		apiKey: "AIzaSyBsJOhdSHcvk625x5d3BOcX9UnJ1Ys1Nm0",
		authDomain: "compensationvr-bb8ff.firebaseapp.com",
		projectId: "compensationvr-bb8ff",
		databaseURL: 'https://compensationvr-bb8ff-default-rtdb.europe-west1.firebasedatabase.app',
	},
    cookies: {
		name: 'auth', // required
		// Keys are required unless you set `signed` to `false`.
		// The keys cannot be accessible on the client side.
		keys: [
			process.env.COOKIE_SECRET_CURRENT,
			process.env.COOKIE_SECRET_PREVIOUS,
		],
		httpOnly: true,
		maxAge: 14 * 60 * 60 * 24 * 1000, // Two weeks
		overwrite: true,
		path: '/',
		sameSite: 'strict',
		secure: true, // set this to false in local (non-HTTPS) development
		signed: true,
    },
    onVerifyTokenError: (err) => {
		console.error(err)
    },
    onTokenRefreshError: (err) => {
		console.error(err)
    },
  })
}

export default initAuth