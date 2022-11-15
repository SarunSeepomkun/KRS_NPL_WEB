import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Login, Todolist } from "./Pages";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Todolist" element={<Todolist />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
