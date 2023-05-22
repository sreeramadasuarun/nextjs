"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkOrp8aDgTGUp1seoDU0m6c0kJ3PR_IKI",
  authDomain: "time-sheets-8b5d3.firebaseapp.com",
  projectId: "time-sheets-8b5d3",
  storageBucket: "time-sheets-8b5d3.appspot.com",
  messagingSenderId: "609468185864",
  appId: "1:609468185864:web:8771963c5a286cabb6c0bd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
