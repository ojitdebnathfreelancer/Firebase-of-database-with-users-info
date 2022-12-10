// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxIZAzxhI7C-hEmLzI5oV2sj2EdXAkfGo",
  authDomain: "firestore-abca8.firebaseapp.com",
  projectId: "firestore-abca8",
  storageBucket: "firestore-abca8.appspot.com",
  messagingSenderId: "227878437727",
  appId: "1:227878437727:web:c2e43eaefa81179709acea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;