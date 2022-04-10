// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo9susFPhblGp4aZahNkBMC1pQEw78h_Q",
  authDomain: "ema-john-authentication-9a04f.firebaseapp.com",
  projectId: "ema-john-authentication-9a04f",
  storageBucket: "ema-john-authentication-9a04f.appspot.com",
  messagingSenderId: "984188747826",
  appId: "1:984188747826:web:3f73e6c7232cbce7317c2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
