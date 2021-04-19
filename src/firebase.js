import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDs17BYjCxtdXtHs8zEVPghjlaqaPF4t0",
  authDomain: "snapchat-clone-2234b.firebaseapp.com",
  projectId: "snapchat-clone-2234b",
  storageBucket: "snapchat-clone-2234b.appspot.com",
  messagingSenderId: "991624122956",
  appId: "1:991624122956:web:a49129abeefefc43889ae9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
