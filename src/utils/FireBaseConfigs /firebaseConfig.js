// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpWMxpHBjdIgKHbeeGQIDVCRQhA9MaJWc",
  authDomain: "netflix-gpt-4aac4.firebaseapp.com",
  projectId: "netflix-gpt-4aac4",
  storageBucket: "netflix-gpt-4aac4.appspot.com",
  messagingSenderId: "904730889943",
  appId: "1:904730889943:web:d914291304212a523e6a92",
  measurementId: "G-2DC0Z9TSTP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
