import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhNFhZwrbp3xd7yw7FuaPNtdfAYeqN2Bo",
    authDomain: "chatappp-dbff7.firebaseapp.com",
    projectId: "chatappp-dbff7",
    storageBucket: "chatappp-dbff7.appspot.com",
    messagingSenderId: "283379467307",
    appId: "1:283379467307:web:8d9815d9fff97ba896566e",
    measurementId: "G-12FZ4WWSXJ"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export { getAuth, auth, createUserWithEmailAndPassword }
