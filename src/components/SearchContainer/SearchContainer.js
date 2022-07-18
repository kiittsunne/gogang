import React from "react";
import styles from "./SearchContainer.module.css";
import Card from "../Card/Card";

const SearchContainer = (props) => {
  return (
    <div className={styles.resultWrapper}>
      {props.data.map((place) => {
        return (
          <div className={styles.resultCard}>
            <Card data={place} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchContainer;
