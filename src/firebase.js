
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZqIdbXzCsdKBEydu2Jjd6sZuAozJrJsA",
  authDomain: "poi-pia-19b17.firebaseapp.com",
  projectId: "poi-pia-19b17",
  storageBucket: "poi-pia-19b17.appspot.com",
  messagingSenderId: "726006062196",
  appId: "1:726006062196:web:4e816006cf06108aa3c521",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db= getFirestore()