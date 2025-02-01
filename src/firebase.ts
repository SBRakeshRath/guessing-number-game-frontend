import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc7Y3zfqWIvBw8w1OXzmVEnp_FzyYKjUo",
  authDomain: "random-toy-projects.firebaseapp.com",
  projectId: "random-toy-projects",
  storageBucket: "random-toy-projects.firebasestorage.app",
  messagingSenderId: "437863435614",
  appId: "1:437863435614:web:94b66f38ff5256b4a453cf",
  measurementId: "G-W7CTENJ6D6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
