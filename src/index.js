import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { products } from "./components/ItemListContainer/Item/Items";
import { initializeApp } from "firebase/app";
//import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYQeRJJ9s6u5W1qnOqlQ3GlzuBAxP1F40",
  authDomain: "app-react-13281.firebaseapp.com",
  projectId: "app-react-13281",
  storageBucket: "app-react-13281.appspot.com",
  messagingSenderId: "111476144200",
  appId: "1:111476144200:web:7a7affb3234b578ade807d",
  measurementId: "G-ZKYSXQMH7G",
};

initializeApp(firebaseConfig);

//Codigo anterior a pasar logica a itemListContainer():
/* const db = getFirestore();
const ref = collection(db, "products");
products.map(product => addDoc(ref, product)); */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
