import React, { useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const handleQuery = useSearchContext().handleQuery;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleQuery(query.split(" ").join("%20").toLowerCase());
    navigate("/search", { replace: true });
    setQuery("");
  };
  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
      action="http://localhost:3000/search"
      method="post"
    >
      <input
        autoFocus
        type="text"
        name="searchinput"
        id="searchinput"
        className={styles.searchInput}
        placeholder="Which city are we off to?"
        value={query}
        onChange={handleChange}
      />
      <input type="submit" value="Go" />
    </form>
  );
};

export default SearchForm;
