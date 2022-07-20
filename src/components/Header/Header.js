import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../../contexts/SearchContext";
import styles from "./Header.module.css";

const Header = (props) => {
  const location = useLocation();

  // check is logged in for <Greeting>
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    window.sessionStorage.getItem("access") === null
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
  }, []);

  // check query for <CityName>
  const city = useSearchContext().query;

  // conditional components
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
      return (
        <Greeting isLoggedIn={isLoggedIn} username={props.user.username} />
      );
    }
    if (location.pathname.includes("search") === true) {
      return <CityName city={city} country={"Japan"} />;
    }
  };

  return <div className={styles.headerContainer}>{headerCheck()}</div>;
};

export default Header;
