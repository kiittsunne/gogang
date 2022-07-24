import React, { useState, useEffect } from "react";
import styles from "./SavePlaceForm.module.css";

const SavePlaceForm = (props) => {
  const [show, setShow] = useState(props.show);
  const [cardData, setCardData] = useState(props.cardData);
  const [input, setInput] = useState("");
  const [req, setReq] = useState("");
  const [tripId, setTripId] = useState([]);
  const [trips, setTrips] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // setReq(input);
    console.log(input);
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${window.sessionStorage.getItem("access")}`,
      },
      body: JSON.stringify({
        _id: "62d890a2ddf04e6d4b3eb9f1",
        place: cardData,
      }),
    };
    async function putTrip() {
      const res = await fetch(
        `http://localhost:5001/api/searchresults`,
        requestOptions
      );
      const json = await res.json();
      console.log(json);
    }
    putTrip();
    props.handleShow();
  };

  useEffect(() => {
    async function fetchUserTrips() {
      try {
        const res = await fetch("http://localhost:5001/api/trips", {
          method: "post",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${window.sessionStorage.getItem("access")}`,
          },
        });
        const userTrips = await res.json();
        setTrips(userTrips);
      } catch (err) {
        console.log(`Not logged in`);
      }
    }
    fetchUserTrips();
  }, [show]);
  return (
    <div className={styles.thismodalWrapper}>
      <div className={styles.thistripFormBody}>
        <div className={styles.thisformHeader}>
          <div className={styles.thisformTitle}>Add To Trip</div>
          <div
            className={styles.thisformClose}
            onClick={() => {
              props.handleShow();
            }}
          >
            x
          </div>
        </div>
        <form className={styles.thistripForm} onSubmit={handleSubmit}>
          <select
            className={styles.thisnameInput}
            name="tripName"
            id="tripName"
            autoFocus
            onChange={handleChange}
          >
            {trips.map((trip) => {
              return <option value={trip._id}>{trip.tripName}</option>;
            })}
          </select>
          <input type="submit" value="Go" className={styles.thissubmitInput} />
        </form>
      </div>
    </div>
  );
};

export default SavePlaceForm;
