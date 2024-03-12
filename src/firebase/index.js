// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANVcWte9T-8nMMABKgY8IRM_ho8YdGVGM",
  authDomain: "adopet-3efdc.firebaseapp.com",
  projectId: "adopet-3efdc",
  storageBucket: "adopet-3efdc.appspot.com",
  messagingSenderId: "694814252832",
  appId: "1:694814252832:web:deddbb721c5e64a7ac8145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app)