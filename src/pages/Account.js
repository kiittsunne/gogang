import React, { useState, useEffect, useContext } from "react";
import Context from "../contexts/context";

import axios from "../api/axios";
const accountURL = "/api/account";

const Account = () => {
  const context = useContext(Context);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch("http://localhost:5001/api/account", {
        //   method: "post",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${context.accessToken}`,
        //   },
        // });

        const response = await axios.post(
          accountURL,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${context.accessToken}`,
            },
            withCredentials: true,
          }
        );
        console.log(response);
        setUsername(response.data[0].username);
        setName(response.data[0].firstName + " " + response.data[0].lastName);
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

  return (
    <>
      <h1>{username}</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{email}</h2>
      {isLoading && <p>Loading... please wait</p>}
      {!isLoading && error && <p>{error}</p>}
    </>
  );
};

export default Account;
