// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGUl79issF1GVQ3ql18sPq--cdJmhiiUI",
  authDomain: "expenses-app-ba496.firebaseapp.com",
  projectId: "expenses-app-ba496",
  storageBucket: "expenses-app-ba496.appspot.com",
  messagingSenderId: "402978735958",
  appId: "1:402978735958:web:68a91f4ba7e9dbc9bfb8f7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
