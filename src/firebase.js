// import { initializeApp } from 'firebase/app';
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoUnjvlb5nHd38qoYLMyEFFnnDTPhH2vQ",
    authDomain: "netflix-build-65580.firebaseapp.com",
    projectId: "netflix-build-65580",
    storageBucket: "netflix-build-65580.appspot.com",
    messagingSenderId: "331014196548",
    appId: "1:331014196548:web:e6e26629b21840d8095b11"
  };


  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
  
  // const firebaseApp = initializeApp(firebaseConfig);
  // // const db = firebaseApp.firestore();
  // export const db = getFirestore();
  // const auth = getAuth(firebaseApp);
  // export  { auth }
  // export default db;

  
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const db = firebaseApp.firestore();
// export const auth = firebase.auth();