import React from "react";
import styles from "./TripForm.module.css";

const TripForm = (props) => {
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
        <form className={styles.tripForm}>
          <input
            className={styles.nameInput}
            type="text"
            name="tripName"
            id="tripName"
            placeholder="Trip Name"
            autoFocus
          />
          <input type="submit" value="Go" className={styles.submitInput} />
        </form>
      </div>
    </div>
  );
};

export default TripForm;
