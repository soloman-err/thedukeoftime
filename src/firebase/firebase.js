// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA96M66KawUdmSTCsCs7pAk9IG-ovwx2aE",
  authDomain: "thedukeoftime-news.firebaseapp.com",
  projectId: "thedukeoftime-news",
  storageBucket: "thedukeoftime-news.appspot.com",
  messagingSenderId: "122844927839",
  appId: "1:122844927839:web:11c2d78e4ad6deb5bd08ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;