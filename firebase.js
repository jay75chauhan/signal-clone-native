import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwHIMHLQqMInWf9Ib7W58FtYMfgAVWsFY",
  authDomain: "signal-clone-native-3e1a9.firebaseapp.com",
  projectId: "signal-clone-native-3e1a9",
  storageBucket: "signal-clone-native-3e1a9.appspot.com",
  messagingSenderId: "149071293572",
  appId: "1:149071293572:web:e04728820dc74bc715e6d1",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
