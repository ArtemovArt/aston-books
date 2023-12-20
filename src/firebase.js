import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXfTZ3psriCjUg4KJR2oPdYauc6Fg907k",
  authDomain: "aston-books-app.firebaseapp.com",
  projectId: "aston-books-app",
  storageBucket: "aston-books-app.appspot.com",
  messagingSenderId: "291102209326",
  appId: "1:291102209326:web:37291ee8a7f0a4e80af6bf",
  measurementId: "G-CPQ75CS8LV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
