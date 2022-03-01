import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore'
import { getAuth } from "firebase/auth"
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvao2EldLrAgTVC1VHRe2wHF_LXMGm5YU",
    authDomain: "throttlerz-278e0.firebaseapp.com",
    projectId: "throttlerz-278e0",
    storageBucket: "throttlerz-278e0.appspot.com",
    messagingSenderId: "381555884526",
    appId: "1:381555884526:web:be5c1760cc532e8ac20eff",
    measurementId: "G-VQJP8VDHTT"
};

// Initialize Firebase
const firebaseApp =  !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();
const authentication = getAuth(firebaseApp);
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
export {authentication, db};