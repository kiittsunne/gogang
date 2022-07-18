import React from "react";
import Header from "../components/Header/Header";
import TripContainer from "../components/TripContainer/TripContainer";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Home = () => {
  return (
    <div>
      <Header />
      <TripContainer data={data} />
    </div>
  );
};

export default Home;
