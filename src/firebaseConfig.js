// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnSchWUXsTo4QIx8fdXrn-Dfg7YT6tV5s",
  authDomain: "sasikcar-6d4b0.firebaseapp.com",
  projectId: "sasikcar-6d4b0",
  storageBucket: "sasikcar-6d4b0.firebasestorage.app",
  messagingSenderId: "1093305398744",
  appId: "1:1093305398744:web:3004be08c4290f154baead",
  measurementId: "G-J034K7YDMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Add Firestore instance

export { db }; // Export db