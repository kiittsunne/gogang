import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";

import axios from "../api/axios";
const LOGIN_URL = "/api/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errorRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response));
      const accessToken = response?.access;
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      navigate("/", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage("Missing Username or Password");
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
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
