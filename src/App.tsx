import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {initializeApp} from "firebase/app"
import {watchForEvents} from "./firebase/event.db";

initializeApp({
  apiKey: "AIzaSyDK1aSZuHKFhLADbEuSjrLDmU7owQpngZc",
  authDomain: "test-fb010.firebaseapp.com",
  projectId: "test-fb010",
  storageBucket: "test-fb010.appspot.com",
  messagingSenderId: "691953428692",
  appId: "1:691953428692:web:be066ee059f88a94f1b341",
  measurementId: "G-908G4Y1F11"
});
watchForEvents()


function App() {
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
