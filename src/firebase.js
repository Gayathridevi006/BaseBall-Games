// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA-TKo1bSNl2abjF8ZacOGXTw7vEJmZwTw",
//   authDomain: "baseball-360c5.firebaseapp.com",
//   projectId: "baseball-360c5",
//   storageBucket: "baseball-360c5.firebasestorage.app",
//   messagingSenderId: "726524626669",
//   appId: "1:726524626669:web:3e6719307b5b8068deaee4",
//   measurementId: "G-XGL98X3WSG",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA-TKo1bSNl2abjF8ZacOGXTw7vEJmZwTw",
//   authDomain: "baseball-360c5.firebaseapp.com",
//   projectId: "baseball-360c5",
//   storageBucket: "baseball-360c5.firebasestorage.app",
//   messagingSenderId: "726524626669",
//   appId: "1:726524626669:web:3e6719307b5b8068deaee4",
//   measurementId: "G-XGL98X3WSG",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-TKo1bSNl2abjF8ZacOGXTw7vEJmZwTw",
  authDomain: "baseball-360c5.firebaseapp.com",
  projectId: "baseball-360c5",
  storageBucket: "baseball-360c5.firebasestorage.app",
  messagingSenderId: "726524626669",
  appId: "1:726524626669:web:3e6719307b5b8068deaee4",
  measurementId: "G-XGL98X3WSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Google Provider
const provider = new GoogleAuthProvider();
export { provider as googleProvider }; // Export the provider explicitly
