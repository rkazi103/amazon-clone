import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEL_gMgxaIESznk2oW5mGyffLr-a7CoJY",
  authDomain: "clone-f3dc3.firebaseapp.com",
  projectId: "clone-f3dc3",
  storageBucket: "clone-f3dc3.appspot.com",
  messagingSenderId: "1021505735779",
  appId: "1:1021505735779:web:bb42ced7686203c7eebc56",
  measurementId: "G-TBGWC7G6KS",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
