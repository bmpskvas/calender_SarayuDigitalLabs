import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Firebase configuration object from your Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCjJsfqzWTPSMPOdKwLGvigaWMQH1r53yA",
  authDomain: "calender-cc53b.firebaseapp.com",
  projectId: "calender-cc53b",
  storageBucket: "calender-cc53b.appspot.com",
  messagingSenderId: "851050364342",
  appId: "1:851050364342:web:70d0cf758ffc032006d517",
  measurementId: "G-QV5YKH29KY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Google Authentication Provider
const provider = new GoogleAuthProvider();

// Export signIn and signOut functions
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const signOutUser = () => {
  return signOut(auth);
};

export { auth, signInWithGoogle, signOutUser };
