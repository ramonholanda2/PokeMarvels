import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAdcgyhHhnOnOp7iNcjACUGrCLZJEyk6HA",
  authDomain: "poke-marvel.firebaseapp.com",
  projectId: "poke-marvel",
  storageBucket: "poke-marvel.appspot.com",
  messagingSenderId: "355676103858",
  appId: "1:355676103858:web:a9ba97eba796ffec22d5ab",
  measurementId: "G-789VCC2Q6P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };