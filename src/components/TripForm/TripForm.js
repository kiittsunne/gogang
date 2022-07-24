import React, { useState, useEffect } from "react";
import styles from "./TripForm.module.css";

const TripForm = (props) => {
  const [input, setInput] = useState("");
  const [tripId, setTripId] = useState([]);
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${window.sessionStorage.getItem("access")}`,
      },
      body: JSON.stringify({ tripName: input }),
    };
    async function putTrip() {
      const res = await fetch(
        `http://localhost:5001/api/trips`,
        requestOptions
      );
      const json = await res.json();
      const latest = json[json.length - 1];
      setTripId(latest);
    }
    putTrip();
    props.handleShow();
  };

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.tripFormBody}>
        <div className={styles.formHeader}>
          <div className={styles.formTitle}>Create New Trip</div>
          <div
            className={styles.formClose}
            onClick={() => {
              props.handleShow();
            }}
          >
            x
          </div>
        </div>
        <form className={styles.tripForm} onSubmit={handleSubmit}>
          <input
            className={styles.nameInput}
            type="text"
            name="tripName"
            id="tripName"
            placeholder="Trip Name"
            autoFocus
            onChange={handleChange}
          />
          <input type="submit" value="Go" className={styles.submitInput} />
        </form>
      </div>
    </div>
  );
};

export default TripForm;
