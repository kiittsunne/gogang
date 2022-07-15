import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <Home></Home>
      ) : (
        <section>
          <p ref={errorRef} aria-live="assertive">
            {errorMessage}
          </p>
          <h1>LOG IN</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="email"
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="pwd"
            />
            <button>LOG IN</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
