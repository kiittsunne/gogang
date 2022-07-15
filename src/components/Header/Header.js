import React from "react";
import SearchForm from "../SearchForm/SearchForm";

const Header = (props) => {
  const Greeting = (props) => {
    return (
      <h1>
        Hello,
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
      <h1>
        {props.city}, {props.country}
      </h1>
    );
  };

  return (
    <div>
      {window.location.pathname === "/" ? (
        <Greeting isLoggedIn={false} username={"Suzu"} />
      ) : (
        <CityName city={"Tokyo"} country={"Japan"} />
      )}
      <SearchForm />
    </div>
  );
};

export default Header;
