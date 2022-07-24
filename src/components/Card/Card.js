import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Card.module.css";

const PlaceCard = (props) => {
  const handleClick = () => {
    props.handleShow();
    props.handleCardData(props.data);
  };
  return (
    <div className={styles.cardBody} onClick={handleClick}>
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
    <>
      {props.data.places.length === 0 ? (
        <Link to={`/trips/${props.data._id}`}>
          <div className={styles.cardBody}>
            <div className={styles.tripCardImage}>{props.data.tripName}</div>
          </div>
        </Link>
      ) : (
        <Link to={`/trips/${props.data._id}`}>
          <div className={styles.cardBody}>
            <div
              className={styles.tripCardImagePic}
              style={{
                backgroundImage: `url(${props.data.places[0].image})`,
                backgroundSize: "contain",
              }}
            >
              {props.data.tripName}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

const Card = (props) => {
  const location = useLocation();
  function checkLocation() {
    if (location.pathname.includes("search") === true) {
      return (
        <PlaceCard
          data={props.data}
          handleShow={props.handleShow}
          handleCardData={props.handleCardData}
        />
      );
    }
    if (location.pathname === "/" || location.pathname.includes("trips")) {
      return <TripCard data={props.data} />;
    }
  }
  return <>{checkLocation()}</>;
};

export default Card;
