import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import TripHeader from "../components/TripHeader/TripHeader";
import TripForm from "../components/TripForm/TripForm";
import TripContainer from "../components/TripContainer/TripContainer";
import { LogInStatus } from "../contexts/LogStatus";

const data = [1, 1, 1, 1, 1, 1, 1, 1];

const Home = () => {
  const [show, setShow] = useState(false);

  const userStateNow = useContext(LogInStatus);

  console.log(userStateNow);

  function handleShow() {
    show === false ? setShow(true) : setShow(false);
  }
  return (
    <div>
      {show === true ? <TripForm handleShow={handleShow} /> : null}
      <Header />
      <SearchForm />
      <TripHeader style={"h2TripHeader"} handleShow={handleShow} />
      <TripContainer data={data} />
    </div>
  );
};

export default Home;
