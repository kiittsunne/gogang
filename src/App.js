import React, { useState } from "react";
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
import Context from "./contexts/contexts2";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [accessToken, setAccessToken] = useState("");

  if (loggedIn === true) {
    return (
      <Context.Provider value={{ accessToken, setAccessToken }}>
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
      </Context.Provider>
    );
  }
}

export default App;
