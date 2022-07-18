import React from "react";
import styles from "./TripContainer.module.css";
import Card from "../Card/Card";

const TripContainer = (props) => {
  return (
    <div className={styles.tripWrapper}>
      {props.data.map((place) => {
        return (
          <div className={styles.panel}>
            <Card data={place} />
          </div>
        );
      })}
    </div>
  );
};

export default TripContainer;
