import React, { useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import styles from "./SearchContainer.module.css";
import Card from "../Card/Card";
import SavePlaceForm from "../SavePlaceForm/SavePlaceForm";

const SearchContainer = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    show === false ? setShow(true) : setShow(false);
  }
  const data = useSearchContext().data;
  const imgData = useSearchContext().imgData;
  console.log(imgData);

  const [cardData, setCardData] = useState();
  const handleCardData = (data) => {
    setCardData(data);
  };
  return (
    <div>
      <div className={styles.buttonWrapper}>
        {/* {unique.map((desc) => {
          return <button className={styles.filterButton}>{desc}</button>;
        })} */}
      </div>
      <div className={styles.resultWrapper}>
        {data.length === 0
          ? null
          : data.map((place) => {
              return (
                <>
                  {show === true ? (
                    <SavePlaceForm
                      data={place}
                      show={show}
                      handleShow={handleShow}
                      cardData={cardData}
                    />
                  ) : null}
                  <div className={styles.resultCard}>
                    <Card
                      data={place}
                      handleShow={handleShow}
                      handleCardData={handleCardData}
                    />
                  </div>
                </>
              );
            })}
      </div>
    </div>
  );
};

export default SearchContainer;
