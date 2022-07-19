import React, { useState, useContext } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trips from "./pages/Trips";
import TripPage from "./pages/TripPage";
import { Routes, Route } from "react-router-dom";
import { LogInStatus } from "./contexts/LogStatus";

function App() {
const [ loggedIn, setLoggedIn ] = useState(false);

  return (
  <LogInStatus.Provider value={{ loggedIn, setLoggedIn }}>
    <div className="App">
      <TopBar />
      <div className="appContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trips/:id" element={<TripPage />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <div className="footerSpacer"></div>
    </div>
  </LogInStatus.Provider>
  );
  }

export default App;
