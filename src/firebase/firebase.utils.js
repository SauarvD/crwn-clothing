import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmBKFPmW6iqkyHa-3MyfoJaBBgSfesknQ",
    authDomain: "crwn-db-16d1c.firebaseapp.com",
    databaseURL: "https://crwn-db-16d1c.firebaseio.com",
    projectId: "crwn-db-16d1c",
    storageBucket: "crwn-db-16d1c.appspot.com",
    messagingSenderId: "738047268065",
    appId: "1:738047268065:web:c24316d1795ae4bad6d3a0",
    measurementId: "G-L71B7H1M2M"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;