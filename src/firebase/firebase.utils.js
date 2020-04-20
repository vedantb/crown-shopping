import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAQrbF8Y4j2ESJUX4YroSHhOa93ywZxQ7w',
  authDomain: 'crwn-db-48eb3.firebaseapp.com',
  databaseURL: 'https://crwn-db-48eb3.firebaseio.com',
  projectId: 'crwn-db-48eb3',
  storageBucket: 'crwn-db-48eb3.appspot.com',
  messagingSenderId: '1045024096418',
  appId: '1:1045024096418:web:d25a82ac05afad80d9d7fb',
  measurementId: 'G-KL8D60D9LE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
