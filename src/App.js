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
import { Routes, Route, useParams } from "react-router-dom";
import Context from "./contexts/context";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const { city } = useParams();
  return (
    <Context.Provider value={{ accessToken, setAccessToken }}>
      <SearchContextProvider>
        <div className="App">
          <TopBar />
          <div className="appContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/search" element={<Search />}>
                <Route path=":city" element={<Search />} />
              </Route>
              <Route path="/trips" element={<Trips />} />
              <Route path="/trips/:id" element={<TripPage />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
          <div className="footerSpacer"></div>
        </div>
      </SearchContextProvider>
    </Context.Provider>
  );
}

export default App;
