import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBuYKRYePYqtc5di3GH6GG_dCS9ILozGPs",
  authDomain: "glam-nation-f7f58.firebaseapp.com",
  projectId: "glam-nation-f7f58",
  storageBucket: "glam-nation-f7f58.appspot.com",
  messagingSenderId: "337244414810",
  appId: "1:337244414810:web:483018998221b05acc8963",
  measurementId: "G-60ZK6JGD4X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };