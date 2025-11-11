// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARgLa_k4VQ-jiN6ZmwFxWFu5-ChFperzs",
  authDomain: "auth-integration-39cf7.firebaseapp.com",
  projectId: "auth-integration-39cf7",
  storageBucket: "auth-integration-39cf7.firebasestorage.app",
  messagingSenderId: "208041168221",
  appId: "1:208041168221:web:1424085448d7e58e772cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);