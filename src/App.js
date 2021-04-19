import React from "react";
import "./App.css";
import Chats from './Component/Chats/Chats'
import WebcamCapture from "./WebcamCapture";
import Preview from "./Component/Preview/Preview"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
          <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
