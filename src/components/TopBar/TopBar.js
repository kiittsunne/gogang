import React from "react";
import styles from "./TopBar.module.css";
const TopBar = () => {
  return (
    <div className={styles.topbarContainer}>
      <div className="logo"></div>
      <div className="nav">
        <div className="collectionNav"></div>
        <div className="accountNav"></div>
      </div>
    </div>
  );
};

export default TopBar;
