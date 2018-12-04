import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9jbxfNRSfIFVHiUBfv-V3mQZx3XxAS_Y",
    authDomain: "bookstore-7999f.firebaseapp.com",
    databaseURL: "https://bookstore-7999f.firebaseio.com",
    projectId: "bookstore-7999f",
    storageBucket: "bookstore-7999f.appspot.com",
    messagingSenderId: "676394539031"
});

const fbase = Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};