// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFaZRfCYIVzGvvoH7grsVCVT8q9s4q1g",
  authDomain: "netflixgpt-a.firebaseapp.com",
  projectId: "netflixgpt-a",
  storageBucket: "netflixgpt-a.appspot.com",
  messagingSenderId: "640888025433",
  appId: "1:640888025433:web:dedfd86d980f8cbab29c48",
  measurementId: "G-X202EJVCTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();