import React from 'react';
import './App.css';
import "./firebase/firebase-init"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {EventsList} from "./components/events-list";
import {Event} from "./components/event";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <EventsList />
                </Route>
                <Route path="/event/:id" children={<Event/>}/>
            </Switch>
        </Router>
    );
}

export default App;
