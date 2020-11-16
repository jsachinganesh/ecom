
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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(err) {
            console.log(err);
        }
    }

    return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit();

}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedcollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    
    return transformedcollection.reduce((acc, col) => {
        acc[col.title.toLowerCase()] = col;
        return acc;
    }, {});
    
}




const Provider = new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;


