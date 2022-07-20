import React from "react";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchContainer from "../components/SearchContainer/SearchContainer";

const Search = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <SearchContainer />
    </div>
  );
};

export default Search;
