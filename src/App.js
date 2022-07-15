import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trips from "./pages/Trips";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
