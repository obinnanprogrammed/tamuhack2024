// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDijVllqWp2Nqn8rknIow2PVbjcE97fFIU",
  authDomain: "tamuhack2024-412608.firebaseapp.com",
  projectId: "tamuhack2024-412608",
  storageBucket: "tamuhack2024-412608.appspot.com",
  messagingSenderId: "314441344281",
  appId: "1:314441344281:web:fc3c0f0f636d1a8d449188",
  measurementId: "G-XQYLHNH3JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);