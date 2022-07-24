import React from "react";
import styles from "./TripHeader.module.css";

const TripHeader = (props) => {
  return (
    <div className={styles.tripHeaderContainer}>
      <h1 className={styles[props.style]}>
        <span className={styles.tripSpan}>Your Trips</span>
      </h1>
      <button
        className={styles.tripButton}
        onClick={() => {
          props.handleShow();
        }}
      >
        Create New Trip
      </button>
    </div>
  );
};

export default TripHeader;
