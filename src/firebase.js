import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBl4Z-Ks0i8wenRbgPz8ylPoNzcFNaIaCs",
  authDomain: "todos-ca2ad.firebaseapp.com",
  projectId: "todos-ca2ad",
  storageBucket: "todos-ca2ad.appspot.com",
  messagingSenderId: "665745962152",
  appId: "1:665745962152:web:3f82aeddb0aeaa4bc17e9d",
  databaseURL: "https://todos-ca2ad-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);