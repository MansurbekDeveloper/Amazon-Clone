import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtRBZntvyajxeLUikAo0JQhnK9yJxrQ-Q",
  authDomain: "clone-b70d1.firebaseapp.com",
  projectId: "clone-b70d1",
  storageBucket: "clone-b70d1.appspot.com",
  messagingSenderId: "730356330611",
  appId: "1:730356330611:web:35a121b2580ce85e127a06",
  measurementId: "G-9WCZBSBTBD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
