import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import "./styles/auth.css"
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} /> {/* Default to login */}
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;
