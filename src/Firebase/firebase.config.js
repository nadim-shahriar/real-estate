// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQw7iEQdWGAlnpfxPJDdzQVB0Ryg0z3m4",
  authDomain: "real-estate-auth-70908.firebaseapp.com",
  projectId: "real-estate-auth-70908",
  storageBucket: "real-estate-auth-70908.firebasestorage.app",
  messagingSenderId: "362456913337",
  appId: "1:362456913337:web:1687efb5dec2cdd8e9d268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth