import React, { useState } from "react";
import TripHeader from "../components/TripHeader/TripHeader";
import TripContainer from "../components/TripContainer/TripContainer";
import TripForm from "../components/TripForm/TripForm";

const data = [1, 1, 1, 1, 1, 1, 1, 1];

const Trips = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    show === false ? setShow(true) : setShow(false);
  }
  return (
    <div>
      {show === true ? <TripForm handleShow={handleShow} /> : null}
      <TripHeader style={"h1TripHeader"} handleShow={handleShow} />
      <TripContainer data={data} />
    </div>
  );
};

export default Trips;
