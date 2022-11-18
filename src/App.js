import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Login, Todolist } from "./Pages";
import NavBar from "./Components/NavBar";

function App() {
  const [isLogin,setIsLogin] = useState(false);

  return (
      <Router>
       {/* {isLogin === true ? <NavBar /> : ""}  */}
       <NavBar /> 
        <Switch>
          <Route path="/" exact element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Todolist" element={<Todolist />} />
        </Switch>
      </Router>
  );
}

export default App;
