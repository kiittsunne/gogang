import React from "react";
import { useLocation } from "react-router-dom";
import NotLoggedIn from "../../assets/undraw_delivery_re_f50b.svg";
import LoggedInEmptyTrips from "../../assets/undraw_lost_re_xqjt.svg";

const Placeholder = () => {
  const HomeLoggedOut = () => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: "2em",
          marginTop: "5em",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={NotLoggedIn}
          alt="Not Logged In"
          style={{ maxWidth: "50vw", maxHeight: "40vh" }}
        />
        <div
          style={{
            fontFamily: "Damion",
            color: "darkgray",
            textAlign: "right",
            fontSize: "1.2em",
          }}
        >
          Not All Who Wander Are Lost
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "60%",
            justifyContent: "space-around",
          }}
        >
          <button>Sign Up</button>
          <button>Login</button>
        </div> */}
      </div>
    );
  };
  const HomeLoggedInEmptyTrips = () => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: "2em",
          marginTop: "4em",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={LoggedInEmptyTrips}
          alt="Not Logged In"
          style={{ maxWidth: "50vw", maxHeight: "40vh" }}
        />
        <div
          style={{
            fontFamily: "Damion",
            color: "darkgray",
            textAlign: "right",
            fontSize: "1.2em",
          }}
        >
          Hmm... No Adventures Lined Up
        </div>
      </div>
    );
  };

  const location = useLocation();
  function checkLocation() {
    if (
      (location.pathname === "/" &&
        window.localStorage.getItem("access") === null) ||
      (location.pathname.includes("trips") === true &&
        window.localStorage.getItem("access") === null)
    ) {
      return <HomeLoggedOut />;
    }
    if (
      (location.pathname === "/" &&
        window.localStorage.getItem("access") !== null) ||
      location.pathname.includes("trips") === true
    ) {
      return <HomeLoggedInEmptyTrips />;
    }
  }

  return <>{checkLocation()}</>;
};

export default Placeholder;
