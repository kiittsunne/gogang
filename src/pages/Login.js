import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import { LogInStatus } from "../contexts/LogStatus";
const loginURL = "/api/login";

const Login = () => {
  const { setAuth } = useAuth();
  const { loggedIn, setLoggedIn } = useContext(LogInStatus);
  console.log(loggedIn);
  
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

  const setThis = () => setLoggedIn(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setThis();

    try {
      const response = await axios.post(
        loginURL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));
      const accessToken = response?.access;
      setAuth({ email, password, accessToken });
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
