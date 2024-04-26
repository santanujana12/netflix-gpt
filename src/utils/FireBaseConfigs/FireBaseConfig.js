// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKIhoOkTf4AIxRUBRhbXG-0Kva40YlWP0",
  authDomain: "netflix-gpt-clone-5a70a.firebaseapp.com",
  projectId: "netflix-gpt-clone-5a70a",
  storageBucket: "netflix-gpt-clone-5a70a.appspot.com",
  messagingSenderId: "798748466360",
  appId: "1:798748466360:web:1d0da7e24515386c73284d",
  measurementId: "G-46TKP4ZQV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();