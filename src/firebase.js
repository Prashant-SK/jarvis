import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBS0gXXkUlWgyYHkhvL97wPP5lJfYsE6B8",
  authDomain: "jarvis-28cd3.firebaseapp.com",
  databaseURL: "https://jarvis-28cd3.firebaseio.com",
  projectId: "jarvis-28cd3",
  storageBucket: "jarvis-28cd3.appspot.com",
  messagingSenderId: "315813509966",
  appId: "1:315813509966:web:fbbfa50a1e2de1570ffc1f",
  measurementId: "G-3J5JV12TN7",
});

export { firebaseConfig as firebase };
