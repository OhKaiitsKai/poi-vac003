
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAfnuv_bigvTugs2FJkT7vtHrmDZcpMLvA",
  authDomain: "poi-pia-final.firebaseapp.com",
  projectId: "poi-pia-final",
  storageBucket: "poi-pia-final.appspot.com",
  messagingSenderId: "687790632574",
  appId: "1:687790632574:web:60c508805761f46ab0722f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const storage = getStorage();
export const db= getFirestore()