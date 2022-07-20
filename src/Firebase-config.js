// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5jN5tShLHosisnCB6hjcst2T7PTB7oJE",
  authDomain: "simple-diary-2d4bd.firebaseapp.com",
  projectId: "simple-diary-2d4bd",
  storageBucket: "simple-diary-2d4bd.appspot.com",
  messagingSenderId: "687483051109",
  appId: "1:687483051109:web:b7d5b89d539d68e8a67a8c",
  measurementId: "G-6M91NRYH3V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
