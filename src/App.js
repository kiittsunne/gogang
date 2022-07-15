import React from "react";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TopBar from "./components/TopBar/TopBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
