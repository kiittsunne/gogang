import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.sessionStorage.getItem("access") === null
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
  }, []);

  const Greeting = (props) => {
    return (
      <h1 className={styles.headerText}>
        <span className={styles.spanText}>Hello, </span>
        {props.isLoggedIn === true ? (
          <span> {props.username}</span>
        ) : (
          <span> Stranger</span>
        )}
      </h1>
    );
  };

  const CityName = (props) => {
    return (
      <h1 className={styles.headerText}>
        {props.city}, <span className={styles.spanText}>{props.country}</span>
      </h1>
    );
  };

  const headerCheck = () => {
    if (location.pathname === "/") {
      return <Greeting isLoggedIn={isLoggedIn} username={"Suzu"} />;
    }
    if (location.pathname === "/search") {
      return <CityName city={"Tokyo"} country={"Japan"} />;
    }
  };

  return <div className={styles.headerContainer}>{headerCheck()}</div>;
};

export default Header;
