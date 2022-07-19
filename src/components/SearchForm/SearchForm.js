import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
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
  );
};

export default SearchForm;
