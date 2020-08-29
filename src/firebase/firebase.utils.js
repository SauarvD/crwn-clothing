import firebase from 'firebase/app'; // pulling firebase utility library; this is the base import; need the keyword to access other libraries
import 'firebase/firestore'; // utility library for database
import 'firebase/auth'; // utility library for authentication

/**
 * firebase config
 */
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

/**
 * Function to take the userAuth object that we received from authentication library 
 * and then store it inside our database
 * it will be an async function since we are making an API request
 * @param {*} userAuth 
 * @param {*} additionalData 
 */
export const createUserProfileDocument = async(userAuth, additionalData) => {
    /**
     * if userAuth object doesn't exist
     */
    if(!userAuth){
        return;
    } else {
        /**
         * if userAuth object exists, we would query inside firestore for the document to see
         * if it already exist
         */

         /**
          * queryReference
          */
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        /**
         * querySnapShot
         */
        const snapShot = await userRef.get();

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

/**
 * this gives access to new google auth provider class from the authentication library
 */
const provider = new firebase.auth.GoogleAuthProvider();
/**
 * Always trigger google popup whenever we use google auth provider for authentication and signin
 */
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;