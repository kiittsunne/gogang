import React from "react";
import { Link } from "react-router-dom";
import { BsSuitHeartFill, BsPersonCircle } from "react-icons/bs";
import styles from "./TopBar.module.css";
const TopBar = () => {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.logo}>
        <Link to="/" className={styles.topbarButton}>
          Go
        </Link>
      </div>
      <div className={styles.nav}>
        <div className="tripNav">
          <Link to="/trips" className={styles.topbarButton}>
            <BsSuitHeartFill />
          </Link>
        </div>
        <div className="accountNav">
          <Link to="/account" className={styles.topbarButton}>
            <BsPersonCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
