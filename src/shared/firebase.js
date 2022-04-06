import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// export const apiKey = "AIzaSyDzSLDtYFqFIRE6YHC6pFG0YCvyPAmQ8PI";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzSLDtYFqFIRE6YHC6pFG0YCvyPAmQ8PI",
  authDomain: "isabel-react-magazine.firebaseapp.com",
  projectId: "isabel-react-magazine",
  storageBucket: "isabel-react-magazine.appspot.com",
  messagingSenderId: "100727463213",
  appId: "1:100727463213:web:d2141684843e2ba39bc7a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase 인증 가져와서 쓰기
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;

export {auth, apiKey};