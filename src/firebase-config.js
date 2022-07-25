
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: "my-new-blog-8819a.firebaseapp.com",
  projectId: "my-new-blog-8819a",
  storageBucket: "my-new-blog-8819a.appspot.com",
  messagingSenderId: "36657731369",
  appId: "1:36657731369:web:7af4d12b93970cdeb30938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()