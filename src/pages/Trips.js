import React, { useState, useEffect } from "react";
import TripHeader from "../components/TripHeader/TripHeader";
import TripContainer from "../components/TripContainer/TripContainer";
import TripForm from "../components/TripForm/TripForm";
import { useSearchContext } from "../contexts/SearchContext";
import Placeholder from "../components/Placeholder/Placeholder";

const Trips = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    window.localStorage.getItem("access") === null
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
  }, []);

  const [user, setUser] = useState({ username: "Stranger", trips: [] });
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
      } catch (err) {
        console.log(`Not logged in`);
      }
    }
    fetchUserData();
  }, []);

  const [show, setShow] = useState(false);
  function handleShow() {
    show === false ? setShow(true) : setShow(false);
  }

  const data = useSearchContext().data;

  return (
    <div>
      {isLoggedIn === true ? (
        <>
          {show === true ? <TripForm handleShow={handleShow} /> : null}
          <TripHeader style={"h1TripHeader"} handleShow={handleShow} />
          <TripContainer data={data} />
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

export default Trips;
