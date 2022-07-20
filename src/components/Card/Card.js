import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardImage}></div>
      <div className={styles.cardData}>
        <div className={styles.cardDescription}>{props.data.placeName}</div>
        <div className={styles.cardButton}>+</div>
      </div>
    </div>
  );
};

export default Card;
