
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7QqKLVygSFakll1vuwGCtNftI-o5z6D4",
  authDomain: "fir-58b22.firebaseapp.com",
  projectId: "fir-58b22",
  storageBucket: "fir-58b22.appspot.com",
  messagingSenderId: "1012585703024",
  appId: "1:1012585703024:web:a337a807c9dff369dcf6b5",
  measurementId: "G-1MD3Y6GGFF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };