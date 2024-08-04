// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-181ae.firebaseapp.com",
  projectId: "mern-estate-181ae",
  storageBucket: "mern-estate-181ae.appspot.com",
  messagingSenderId: "41750205248",
  appId: "1:41750205248:web:26e58dfca52e2d22dca0a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);