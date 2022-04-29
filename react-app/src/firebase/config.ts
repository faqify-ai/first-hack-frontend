// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmXPwjaUHsgQAkm5aTzBbOBw5UWTkYN6E",
  authDomain: "faqify-975d4.firebaseapp.com",
  projectId: "faqify-975d4",
  storageBucket: "faqify-975d4.appspot.com",
  messagingSenderId: "1052599896302",
  appId: "1:1052599896302:web:536a7d2c6b5d276580cbff",
  measurementId: "G-Z97JYJ5XMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);