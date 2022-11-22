import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Todolist } from "./Pages";
import RequireAuth from "./GlobalRedux/Features/auth/RequireAuth"
import TopDownLayout from './Layout/TopDownLayout';

function App() {

  return (
    <Routes>
      <Route path="/" element={<TopDownLayout />}>
        {/* public routes */}
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/Todolist" element={<Todolist />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
