// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxLMVec9YHqowEBgI6ws-VlGfuXQo8SdE",
  authDomain: "personal-site-6a924.firebaseapp.com",
  projectId: "personal-site-6a924",
  storageBucket: "personal-site-6a924.appspot.com",
  messagingSenderId: "1040372073845",
  appId: "1:1040372073845:web:de3e143965e9f4fe753f3c",
  measurementId: "G-4G6T8HGZV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);