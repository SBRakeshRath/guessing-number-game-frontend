import "./nav.scss";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./../firebase";
import { useContext } from "react";
import authContext from "../context/authContext";

export default function Nav() {
  const callGoogleSignIn = async () => {
    try {
      setPersistence(auth, browserLocalPersistence);
      const popup = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(popup);
    } catch {
      alert("Something went wrong while signing in");
    }
  };
  const { updateUserData } = useContext(authContext);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateUserData(user);
      return;
    } else {
      updateUserData(null);
    }
  });

  return (
    <header>
      <nav>
        <h3>Guessing Game</h3>
        {auth.currentUser ? (
          <button onClick={() => auth.signOut()}>
            <img
              width="100"
              height="100"
              src="https://img.icons8.com/bubbles/100/user.png"
              alt="user"
            />
            Logout
          </button>
        ) : (
          <button onClick={callGoogleSignIn}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/50/google-logo.png"
              alt="google-logo"
            />
            Login
          </button>
        )}
      </nav>
    </header>
  )
}
