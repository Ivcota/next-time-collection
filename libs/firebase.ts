// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "time-collection-app.firebaseapp.com",
  projectId: "time-collection-app",
  storageBucket: process.env.NEXT_PUBLIC_BUCKET,
  messagingSenderId: "484136309667",
  appId: "1:484136309667:web:a372abfbeacbaa8fa40016",
  measurementId: "G-51FXCCH62J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const analytics = getAnalytics(app);
