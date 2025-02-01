import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAxTLoGhTGpSSUa3ByRQ2CWgZxTWs_UCtA",
    authDomain: "guessing-number-game.firebaseapp.com",
    projectId: "guessing-number-game",
    storageBucket: "guessing-number-game.firebasestorage.app",
    messagingSenderId: "13062997874",
    appId: "1:13062997874:web:fcfd0830f83d297a13ffeb",
    measurementId: "G-Z2PEEZSW7L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export { auth }