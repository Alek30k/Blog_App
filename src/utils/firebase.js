// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4debd.firebaseapp.com",
  projectId: "blog-4debd",
  storageBucket: "blog-4debd.appspot.com",
  messagingSenderId: "561094765316",
  appId: "1:561094765316:web:7c7bffb6679343be32fe51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
