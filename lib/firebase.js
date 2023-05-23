// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDQBVvdPsVLWfXopMfVspPSNByNKZx0f8",
  authDomain: "movie-app-af893.firebaseapp.com",
  projectId: "movie-app-af893",
  storageBucket: "movie-app-af893.appspot.com",
  messagingSenderId: "225687832028",
  appId: "1:225687832028:web:0de4006b30a77967af7b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth } ;