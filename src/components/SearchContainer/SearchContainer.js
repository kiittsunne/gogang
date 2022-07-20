import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchContainer.module.css";
import Card from "../Card/Card";

const SearchContainer = (props) => {
  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }
  // const unique = props.data.filter(onlyUnique);

  return (
    <div>
      <div className={styles.buttonWrapper}>
        {/* {unique.map((desc) => {
          return <button className={styles.filterButton}>{desc}</button>;
        })} */}
      </div>
      <div className={styles.resultWrapper}>
        {/* {data.length === 0
          ? null
          : data.map((place) => {
              return (
                // <div className={styles.resultCard}>
                //   <Card data={place} />
                // </div>
                <pre>{place}</pre>
              );
            })} */}
      </div>
    </div>
  );
};

export default SearchContainer;
