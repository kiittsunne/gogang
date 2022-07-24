import React from "react";
import { Link } from "react-router-dom";
import styles from "./TripContainer.module.css";
import Card from "../Card/Card";
import Placeholder from "../Placeholder/Placeholder";

const TripContainer = (props) => {
  return (
    <>
      {props.data.length === 0 ? (
        <Placeholder />
      ) : (
        <div className={styles.tripWrapper}>
          {props.data.map((data) => {
            return (
              <div className={styles.panel}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TripContainer;
