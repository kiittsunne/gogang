import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
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

  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      {window.location.pathname === "/" ? (
        <Greeting isLoggedIn={false} username={"Suzu"} />
      ) : (
        <CityName city={"Tokyo"} country={"Japan"} />
      )}
      <form className={styles.searchForm}>
        <input
          autoFocus
          type="text"
          name="searchinput"
          id="searchinput"
          className={styles.searchInput}
          placeholder="Which city are we off to?"
          value={query}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Header;
