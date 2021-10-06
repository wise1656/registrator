import React, {useEffect} from 'react';
import './App.css';
import {Event} from "./components/event";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentEvent} from "./redux/events.selectors";
import {openEvent} from "./redux/events.reducer";
import {Login} from "./components/login";
import "./firebase/firebase-init"


function App() {
  const event = useSelector(selectCurrentEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openEvent('HlUIXyGoJp3rWs9m1k6T'));
  }, [])

  return (
    <div className="App">
      <Login/>
      {event &&
        <Event event={event} />
      }
    </div>
  );
}

export default App;
