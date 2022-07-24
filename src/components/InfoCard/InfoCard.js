import React from "react";

const InfoCard = (props) => {
  return (
    <div className="transparency">
      <div
        style={{
          width: "600px",
          height: "300px",
          borderRadius: "10pt",
          backgroundColor: "white",
          boxSizing: "border-box",
          padding: "1.5em",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>{props.data.placeName}</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              backgroundImage: `url(${props.data.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>{props.data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
