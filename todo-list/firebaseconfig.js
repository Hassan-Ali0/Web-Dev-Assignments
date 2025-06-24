// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { getFirestore ,onSnapshot,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc,} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBF4nt7oe9ErwF_OKE3GCXS8jhoc9HtgH0",
    authDomain: "todos-list-243f6.firebaseapp.com",
    projectId: "todos-list-243f6",
    storageBucket: "todos-list-243f6.firebasestorage.app",
    messagingSenderId: "386559986914",
    appId: "1:386559986914:web:0e876aedb5d07a9051e2bb",
    measurementId: "G-NNWX3RC5SG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export {db ,onSnapshot,collection, getDocs, addDoc ,doc, deleteDoc, updateDoc} ;