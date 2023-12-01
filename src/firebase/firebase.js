import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, setDoc, doc, getDoc, query, where, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


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
const db = getFirestore(app);
const storage = getStorage(app);




export { serverTimestamp, updateDoc, getDocs, query, where, onAuthStateChanged, signInWithEmailAndPassword, getAuth, updateProfile, doc, auth, createUserWithEmailAndPassword, collection, setDoc, db, storage, ref, uploadBytesResumable, getDownloadURL, getDoc }
