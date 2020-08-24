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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth){
        return;
    } else {
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = userRef.get();

        if(!snapShot.exists){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch(error){
                console.log('error creating the user ', error.message);
            }
        }

        return userRef;
    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;