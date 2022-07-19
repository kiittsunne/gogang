import React from "react";
import { Link } from "react-router-dom";
import styles from "./TripContainer.module.css";
import Card from "../Card/Card";

const TripContainer = (props) => {
  return (
    <div className={styles.tripWrapper}>
      {props.data.map((place) => {
        return (
          <div className={styles.panel}>
            <Link to={"/trips/" + place}>
              <Card data={place} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TripContainer;
