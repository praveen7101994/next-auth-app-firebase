// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsxbFCbexstUyqyZTwxi5M9dU930tYZDw",
  authDomain: "nextjs-auth-app-a88a1.firebaseapp.com",
  projectId: "nextjs-auth-app-a88a1",
  storageBucket: "nextjs-auth-app-a88a1.appspot.com",
  messagingSenderId: "979070272244",
  appId: "1:979070272244:web:eab0b235268563742b14a1",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const Auth = getAuth();
export const db = getFirestore(firebaseApp);
