import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import { useSearchContext } from "../contexts/SearchContext";
import TripHeader from "../components/TripHeader/TripHeader";
import TripForm from "../components/TripForm/TripForm";
import TripContainer from "../components/TripContainer/TripContainer";

const data = [1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    show === false ? setShow(true) : setShow(false);
  }
  const [user, setUser] = useState({ username: "Stranger" });
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

  const handleQuery = useSearchContext().handleQuery;

  return (
    <div>
      {show === true ? <TripForm handleShow={handleShow} /> : null}
      <Header user={user} />
      <SearchForm />
      <TripHeader style={"h2TripHeader"} handleShow={handleShow} />
      <TripContainer data={data} />
    </div>
  );
};

export default Home;
