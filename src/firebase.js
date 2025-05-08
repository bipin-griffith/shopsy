import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHeY4Jz_TD6k-BsC8ztFlStftvtj5CbSI",
  authDomain: "forest-veda.firebaseapp.com",
  projectId: "forest-veda",
  storageBucket: "forest-veda.firebasestorage.app",
  messagingSenderId: "588769408457",
  appId: "1:588769408457:web:d82bb7aa2150d8b6872418",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
