import React from "react";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchContainer from "../components/SearchContainer/SearchContainer";
const data = [
  "neglect",
  "ribbon",
  "reservoir",
  "neglect",
  "ribbon",
  "reservoir",
  "program",
  "negative",
  "radio",
  "habit",
];
const Search = () => {
  return (
    <div>
      <Header />
      <SearchForm />
      <SearchContainer data={data} />
    </div>
  );
};

export default Search;
