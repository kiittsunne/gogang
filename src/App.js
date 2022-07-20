import React, { useState } from "react";
import { SearchContextProvider } from "./contexts/SearchContext";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  if (loggedIn === true) {
    return (
      <div className="App">
        <TopBar />
        <SearchContextProvider>
          <div className="appContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/trips" element={<Trips />} />
              <Route path="/trips/:id" element={<TripPage />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </SearchContextProvider>
        <div className="footerSpacer"></div>
      </div>
    );
  }
}

export default App;
