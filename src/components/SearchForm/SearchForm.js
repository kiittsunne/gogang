import React, { useState, useEffect } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <div>
      <form action="" style={{ display: "flex", flexDirection: "row" }}>
        <input
          autoFocus
          type="text"
          name="searchinput"
          id="searchinput"
          placeholder="Which city are we off to?"
          value={query}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchForm;
