// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATwZDZAHDlOsUxVNP6HGa10LYIXCo-eGw",
  authDomain: "independent-service-prov-9bebb.firebaseapp.com",
  projectId: "independent-service-prov-9bebb",
  storageBucket: "independent-service-prov-9bebb.appspot.com",
  messagingSenderId: "485042096728",
  appId: "1:485042096728:web:5d2c5ef9aa8d189214d82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;