import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdYrChtQmpavJ_Erau2cvzbv2NkUMOLnc",
    authDomain: "crwn-db-ba2fa.firebaseapp.com",
    databaseURL: "https://crwn-db-ba2fa.firebaseio.com",
    projectId: "crwn-db-ba2fa",
    storageBucket: "crwn-db-ba2fa.appspot.com",
    messagingSenderId: "861196903559",
    appId: "1:861196903559:web:e586912be5491c8c4a8422",
    measurementId: "G-2LHX5JEKQ6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;