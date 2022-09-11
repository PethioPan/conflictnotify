// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxQ-koo4CtjJOR5bUj8BmoLHwLZhJAUp8",
  authDomain: "conflictnotify-44fec.firebaseapp.com",
  projectId: "conflictnotify-44fec",
  storageBucket: "conflictnotify-44fec.appspot.com",
  messagingSenderId: "260714927200",
  appId: "1:260714927200:web:b076ceb12efe644f161f05",
  measurementId: "G-1S7BZEPBCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
