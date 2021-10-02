import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {initializeApp} from "firebase/app"
import {doc, getDoc, getFirestore, onSnapshot} from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDK1aSZuHKFhLADbEuSjrLDmU7owQpngZc",
  authDomain: "test-fb010.firebaseapp.com",
  projectId: "test-fb010",
  storageBucket: "test-fb010.appspot.com",
  messagingSenderId: "691953428692",
  appId: "1:691953428692:web:be066ee059f88a94f1b341",
  measurementId: "G-908G4Y1F11"
});


function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const db = getFirestore();
    const firstRef = doc(db, "test", "first");
    getDoc(firstRef).then(document => console.log(document.data()));

    onSnapshot(firstRef, (doc) => setTitle(doc.data().title))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
