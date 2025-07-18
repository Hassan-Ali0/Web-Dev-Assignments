  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
  import { getFirestore ,onSnapshot,query, orderBy,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDtHfl2GchKfTOlqC7BXJ6i5PP-4_XzLt4",
    authDomain: "friendify-73efe.firebaseapp.com",
    projectId: "friendify-73efe",
    storageBucket: "friendify-73efe.firebasestorage.app",
    messagingSenderId: "584032053070",
    appId: "1:584032053070:web:32be8b1b29096d9c2ea01f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();

  export {auth,googleProvider,GoogleAuthProvider ,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, signOut}   
  export {db ,onSnapshot,query,signInWithPopup, orderBy,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc} 



