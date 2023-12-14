import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";

firebase.initializeApp({
  apiKey: "AIzaSyDXfTZ3psriCjUg4KJR2oPdYauc6Fg907k",
  authDomain: "aston-books-app.firebaseapp.com",
  projectId: "aston-books-app",
  storageBucket: "aston-books-app.appspot.com",
  messagingSenderId: "291102209326",
  appId: "1:291102209326:web:37291ee8a7f0a4e80af6bf",
  measurementId: "G-CPQ75CS8LV",
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
