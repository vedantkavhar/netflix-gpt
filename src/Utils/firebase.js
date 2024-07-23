// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzMesQXL6vGYdcNtMgs4p2OUjvzd-F61s",
  authDomain: "netflixgpt-2c946.firebaseapp.com",
  projectId: "netflixgpt-2c946",
  storageBucket: "netflixgpt-2c946.appspot.com",
  messagingSenderId: "1028596655172",
  appId: "1:1028596655172:web:7d7657ae3c45b916374811",
  measurementId: "G-LKGMR6QBCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
