// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_yYvqqsLc3AEaM5bvNVxQ-0ORYMX4eVw",
  authDomain: "react-project-pedrotech-608d4.firebaseapp.com",
  projectId: "react-project-pedrotech-608d4",
  storageBucket: "react-project-pedrotech-608d4.appspot.com",
  messagingSenderId: "1022018459882",
  appId: "1:1022018459882:web:b046bc5e0ec0a194429f93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);