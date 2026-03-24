// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSUw15Jvb_GEPrA6CqN1Ks3YrKIkuMeXI",
  authDomain: "cprg306-assignments-9cb4a.firebaseapp.com",
  projectId: "cprg306-assignments-9cb4a",
  storageBucket: "cprg306-assignments-9cb4a.firebasestorage.app",
  messagingSenderId: "4167198523",
  appId: "1:4167198523:web:7a73528ab97c10098fb91e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);