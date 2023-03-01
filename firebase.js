
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3YJUiaJV0hqIjwXdLuBHslaN68AQWL7s",
  authDomain: "instagram-build-4cbaa.firebaseapp.com",
  projectId: "instagram-build-4cbaa",
  storageBucket: "instagram-build-4cbaa.appspot.com",
  messagingSenderId: "907497050312",
  appId: "1:907497050312:web:52456e823031d9bf8595fd"

};

// Initialize Firebase
const app =!getApps().length?initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage}