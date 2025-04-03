import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Replace with your actual Firebase config values from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBaSZ-NWDExFnlMBy-aUsuJafA3LSVFrms",
  authDomain: "mtf-blog-d669f.firebaseapp.com",
  projectId: "mtf-blog-d669f",
  storageBucket: "mtf-blog-d669f.firebasestorage.app",
  messagingSenderId: "599347539940",
  appId: "1:599347539940:web:1cf444eadc3eae270aa1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 