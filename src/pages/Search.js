import React from "react";
import Header from "../components/Header/Header";
import SearchContainer from "../components/SearchContainer/SearchContainer";
const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Search = () => {
  return (
    <div>
      <Header />
      <SearchContainer data={data} />
    </div>
  );
};

export default Search;
