import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Context from "../contexts/context";

import axios from "../api/axios";
const loginURL = "/api/login";

const Login = () => {
  const context = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        loginURL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      // const response = await fetch("http://localhost:5001/api/login", {
      //   method: "post",
      //   body: JSON.stringify({ email, password }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.access;
      console.log(accessToken);
      context.setAccessToken(accessToken);
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Login Failed");
      }
      errorRef.current.focus();
    }
  };

  return (
    <>
      <section>
        <p
          ref={errorRef}
          className={errorMessage ? "error-message" : "offscreen"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>
        <h1>LOG IN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
          <button>LOG IN</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to="/signup">SIGN UP</Link>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
