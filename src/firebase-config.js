// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArbxQEl6U_14Bxw2Pakx_n8zwatKTExxk",
  authDomain: "chatapp-428cf.firebaseapp.com",
  projectId: "chatapp-428cf",
  storageBucket: "chatapp-428cf.appspot.com",
  messagingSenderId: "499995476849",
  appId: "1:499995476849:web:f35c223199af96f06aecd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);