// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPux8Oj7aMQ0c-QM7UUY6p7xt6iS1Rco",
  authDomain: "pantry-tracker-e212b.firebaseapp.com",
  projectId: "pantry-tracker-e212b",
  storageBucket: "pantry-tracker-e212b.appspot.com",
  messagingSenderId: "1094708845920",
  appId: "1:1094708845920:web:2142b6ccf8f454cc4fd205",
  measurementId: "G-5RDXJS5GCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);