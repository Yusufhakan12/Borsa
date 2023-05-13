// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0tGJt0EQK2wO97ax3-tEWTBKa6jsj4rk",
  authDomain: "dogrulama-a8f59.firebaseapp.com",
  projectId: "dogrulama-a8f59",
  storageBucket: "dogrulama-a8f59.appspot.com",
  messagingSenderId: "518262812211",
  appId: "1:518262812211:web:75434eb11699927e5dbd46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);