// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1nsKxqbDEfrEazSHdQLvPgpiPIhIaR2Y",
  authDomain: "expolibros-148e2.firebaseapp.com",
  databaseURL: "https://expolibros-148e2-default-rtdb.firebaseio.com",
  projectId: "expolibros-148e2",
  storageBucket: "expolibros-148e2.appspot.com",
  messagingSenderId: "1042780740541",
  appId: "1:1042780740541:web:4a6291f55b2fda767250d4",
  measurementId: "G-D885032WHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebase_auth = getAuth(app)