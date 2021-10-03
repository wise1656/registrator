import React, {useEffect} from 'react';
import './App.css';
import {initializeApp} from "firebase/app"
import {watchForEvents} from "./firebase/event.db";
import {Event} from "./components/event";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentEvent} from "./redux/events.selectors";
import {openEvent} from "./redux/events.reducer";

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
  const event = useSelector(selectCurrentEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openEvent('HlUIXyGoJp3rWs9m1k6T'));
  }, [])

  return (
    <div className="App">
      {event &&
        <Event event={event} />
      }
    </div>
  );
}

export default App;
