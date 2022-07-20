import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Card.module.css";

const PlaceCard = (props) => {
  return (
    <div className={styles.cardBody}>
      <div
        className={styles.cardImage}
        style={{
          backgroundImage: `url(${props.data.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.cardData}>
        <div className={styles.cardDescription}>{props.data.placeName}</div>
        <div className={styles.cardButton}>+</div>
      </div>
    </div>
  );
};

const TripCard = (props) => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardData}>
        <div className={styles.cardDescription}></div>
        <div className={styles.cardButton}>+</div>
      </div>
    </div>
  );
};

const Card = (props) => {
  const location = useLocation();
  function checkLocation() {
    if (location.pathname.includes("search") === true) {
      return <PlaceCard data={props.data} />;
    }
    if (location.pathname === "/" || location.pathname.includes("trips")) {
      return <TripCard data={props.data} />;
    }
  }
  return <>{checkLocation()}</>;
};

export default Card;
