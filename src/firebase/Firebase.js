// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGIUvKxjIPU38ulgR1wWLN44dUq4r34UQ",
  authDomain: "netflixgpt-38d24.firebaseapp.com",
  projectId: "netflixgpt-38d24",
  storageBucket: "netflixgpt-38d24.appspot.com",
  messagingSenderId: "993363895477",
  appId: "1:993363895477:web:833297776fdf430a634afc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
