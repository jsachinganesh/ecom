
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAENTBZGpTamO3VgNOpLIutt_EEcud3kdk",
    authDomain: "ecom-80d5d.firebaseapp.com",
    databaseURL: "https://ecom-80d5d.firebaseio.com",
    projectId: "ecom-80d5d",
    storageBucket: "ecom-80d5d.appspot.com",
    messagingSenderId: "147199130126",
    appId: "1:147199130126:web:b7ea500d281a21ad175a5f",
    measurementId: "G-CEJVPNYN04"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;


