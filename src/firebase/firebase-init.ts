import {initializeApp} from "firebase/app";
import {watchForEvents} from "./event.db";

initializeApp({
    apiKey: "AIzaSyDK1aSZuHKFhLADbEuSjrLDmU7owQpngZc",
    authDomain: "test-fb010.firebaseapp.com",
    projectId: "test-fb010",
    storageBucket: "test-fb010.appspot.com",
    messagingSenderId: "691953428692",
    appId: "1:691953428692:web:be066ee059f88a94f1b341",
    measurementId: "G-908G4Y1F11"
});

// const db = getFirestore();
// connectFirestoreEmulator(db, 'localhost', 9088);

watchForEvents()

