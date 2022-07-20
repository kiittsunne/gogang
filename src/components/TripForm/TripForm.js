import React, { useState, useContext } from "react";
import Context from "../../contexts/context";
import styles from "./TripForm.module.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";


const tripsURL = "/api/trips";

const TripForm = (props) => {
const [tripName, setTripName] = useState("")
const context = useContext(Context);
const navigate = useNavigate();

const handleSubmit = async (event) => {
  event.preventDefault();
  
  try {
  const response = await axios.put(
    tripsURL,
    JSON.stringify({ tripName }),
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${context.accessToken}`,
      },
      withCredentials: true,
  });
  console.log(response);
  setTripName("");
  } catch(error) {
    console.log(error.message)
  };
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
            value={tripName}
            onChange={(event) => setTripName(event.target.value)}
            autoFocus 
            />
          <input type="submit" value="Go" className={styles.submitInput} />
        </form>
      </div>
    </div>
  );
};

export default TripForm;
