import React from "react";
import { Link } from "react-router-dom";
import { BsSuitHeartFill, BsPersonCircle } from "react-icons/bs";
import styles from "./TopBar.module.css";
const TopBar = () => {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.logo}>
        <Link to="/" className={styles.homelink}>
          Go
        </Link>
      </div>
      <div className={styles.nav}>
        <div className="collectionNav">
          <BsSuitHeartFill />
        </div>
        <div className="accountNav">
          <BsPersonCircle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
