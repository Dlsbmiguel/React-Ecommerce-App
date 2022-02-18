import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCKVaceseR2tPK0E5vP6AoBaC3rJK8mYsA',
  authDomain: 'crwn-db-d8878.firebaseapp.com',
  projectId: 'crwn-db-d8878',
  storageBucket: 'crwn-db-d8878.appspot.com',
  messagingSenderId: '210122646986',
  appId: '1:210122646986:web:1e57dc635156c9a5991b33',
  measurementId: 'G-0DPBZ840YN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
