import React, { useState, useEffect } from "react";
import TripHeader from "../components/TripHeader/TripHeader";
import Card from "../components/Card/Card";
import styles from "./TripPage.module.css";

const TripPage = () => {
  const [tripData, setTripData] = useState([]);
  useEffect(() => {
    async function getTrip() {
      const res = await fetch(
        `http://localhost:5001/api/trip/62d890a2ddf04e6d4b3eb9f1`
      );
      const data = await res.json();
      setTripData(data);
    }
    getTrip();
  }, []);

  const PlaceContainer = () => {
    return (
      <div>
        <div className={styles.tpresultWrapper}>
          {tripData.length === 0
            ? null
            : tripData.map((place) => {
                return (
                  <div className={styles.tpresultCard}>
                    <Card data={place} />
                  </div>
                );
              })}
        </div>
      </div>
    );
  };
  return (
    <div>
      <h3>{tripData.tripName}</h3>
      <PlaceContainer />
    </div>
  );
};

export default TripPage;
