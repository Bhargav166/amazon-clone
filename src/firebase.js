import firebase from "firebase";

// eslint-disable-next-line
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYcCnpg_TzbU0YWsOggqibwrdpaHQ47dA",
    authDomain: "clone-e4197.firebaseapp.com",
    projectId: "clone-e4197",
    storageBucket: "clone-e4197.appspot.com",
    messagingSenderId: "504278627311",
    appId: "1:504278627311:web:1253b4eea50d39e2d0bc1a",
    measurementId: "G-DDXVVMY8QS"
});

const auth = firebase.auth();

export { auth };
