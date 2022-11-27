// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXsxUcH3AVZ8GBf1PWybiUdh0DFXUx_KY",
  authDomain: "todo-app-a5fc7.firebaseapp.com",
  projectId: "todo-app-a5fc7",
  storageBucket: "todo-app-a5fc7.appspot.com",
  messagingSenderId: "885938850691",
  appId: "1:885938850691:web:971e8c884a389db82104b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);