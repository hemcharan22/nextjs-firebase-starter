import { useAuth } from "./auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const config = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

  apiKey: 'AIzaSyBawGg0SI3tQfzDDn9qJS_vc6eCLrOkHys',
  authDomain: 'adept-amp-324009.firebaseapp.com',
  projectId: 'adept-amp-324009',
  storageBucket: 'adept-amp-324009.appspot.com',
  messagingSenderId: '594218645311',
  appId: '1:594218645311:web:9f8eb6494a1a5431bb858a',
  measurementId: 'G-6Q8L17CTNX',
  
};

const app = initializeApp(config);

export const db = getFirestore(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const gprovider = new GithubAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const profilePic = result.user.photoURL;
      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithGithub = () => {
  signInWithPopup(auth, gprovider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signIn = (event, email, password) => {
  event.preventDefault();

  auth
    .signIn(email, password)
    .then(() => {
      // do something after signing in. For example, router.push("/");
      router.push("/");
    })
    .catch((error) => {
      let { title, description } = setErrorMessage(error);
      // do something with error title and description here
      alert(title + ": " + description);
    });
};
