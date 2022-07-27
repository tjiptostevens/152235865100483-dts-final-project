// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrEVtfWXDz7WzIRAa5Y0U5muMRV1PCrJw",
  authDomain: "bantuan-febfa.firebaseapp.com",
  projectId: "bantuan-febfa",
  storageBucket: "bantuan-febfa.appspot.com",
  messagingSenderId: "783113454638",
  appId: "1:783113454638:web:5441b12b52b801ca46cbbf",
  measurementId: "G-EMH54QHZ79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);