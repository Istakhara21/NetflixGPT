// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkc6RPGd0RHRtnPIqpbeBvVPoTK8H3WyA",
  authDomain: "netflixgpt-d31ea.firebaseapp.com",
  projectId: "netflixgpt-d31ea",
  storageBucket: "netflixgpt-d31ea.firebasestorage.app",
  messagingSenderId: "167991879252",
  appId: "1:167991879252:web:250b172bdb2117c9edafc1",
  measurementId: "G-8XBH8T5K8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
