import React, { useState, useContext } from "react";
import { LogInStatus } from "../contexts/LogStatus";
import { Link } from "react-router-dom";


const Account = () => {
  const { loggedIn, setLoggedIn } = useContext(LogInStatus);

  const [userName, setUserName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const dbSite = "http://localhost:27017/api/account"

  const getAlbums = async (url) => {
    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Something went wrong.")
      }

      const data = await res.json();
      console.log(data);

      setUserName(data.username);
      setGivenName(`${data.firstName} ${data.lastName}`);
      setAge(data.age);
      setEmail(data.email);

    } catch(error) {
      console.log(error.message);
    }
  }

  getAlbums(dbSite);

  const logOutState = () => {
    setLoggedIn(false);
  }
  return (
    <div>
      <h1>Your Account</h1>
      <h2>{userName}</h2>
      <h3>Name: {givenName}</h3>
      <h3>Age: {age}</h3>
      <h3>Account email: {email}</h3>
      <Link to="/login">
        <button onClick={logOutState}>LOG OUT</button>
      </Link>
    </div>
  );
};

export default Account;
