import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import TripHeader from "../components/TripHeader/TripHeader";
import TripForm from "../components/TripForm/TripForm";
import TripContainer from "../components/TripContainer/TripContainer";
import Placeholder from "../components/Placeholder/Placeholder";

const Home = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    show === false ? setShow(true) : setShow(false);
  }
  const [user, setUser] = useState({ username: "", trips: [], email: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    window.sessionStorage.getItem("access") === null
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
  }, []);
  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("http://localhost:5001/api/home", {
          method: "post",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${window.sessionStorage.getItem("access")}`,
          },
        });
        const userData = await res.json();
        setUser(userData);
        window.sessionStorage.setItem("name", userData.username);
      } catch (err) {
        console.log(`Not logged in`);
      }
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    async function fetchUserTrips() {
      try {
        const res = await fetch("http://localhost:5001/api/trips", {
          method: "post",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${window.sessionStorage.getItem("access")}`,
          },
          body: JSON.stringify({ ownerEmail: user.email }),
        });
        const userTrips = await res.json();
        setUser({ ...user, trips: userTrips });
      } catch (err) {
        console.log(`Not logged in`);
      }
    }
    fetchUserTrips();
  }, [user, show]);

  return (
    <div>
      {show === true ? <TripForm handleShow={handleShow} /> : null}
      <Header user={user} />
      <SearchForm />

      {window.sessionStorage.getItem("access") !== null ? (
        <>
          <TripHeader style={"h2TripHeader"} handleShow={handleShow} />
          <TripContainer data={user.trips} />
        </>
      ) : (
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Placeholder />
        </div>
      )}
    </div>
  );
};

export default Home;
