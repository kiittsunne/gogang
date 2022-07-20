import React, { useState, useEffect, useContext } from "react";
import Context from "../contexts/context";
import { useNavigate } from "react-router-dom";

import axios from "../api/axios";
import UserProfile from "../components/UserProfile/UserProfile";
const accountURL = "/api/account";
const logOutURL = "/api/logout";

const Account = () => {
  const context = useContext(Context);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          accountURL,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${window.sessionStorage.getItem(
                "access"
              )}`,
            },
            withCredentials: true,
          }
        );
        console.log(response);
        setUsername(response.data[0].username);
        // setName(response.data[0].firstName + " " + response.data[0].lastName);
        setAge(response.data[0].age);
        setEmail(response.data[0].email);
      } catch (err) {
        console.log(err);
        if (!err?.response) {
          setError("No Server Response");
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const logout = async () => {
    const response = await axios.get(logOutURL, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${window.sessionStorage.getItem("access")}`,
      },
      withCredentials: true,
    });
    console.log(response);
    window.sessionStorage.removeItem("access");
    context.setAccessToken("");
    navigate("/");
  };

  return (
    <>
      <UserProfile
        username={username}
        age={age}
        email={email}
        logout={logout}
      />
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Account;
