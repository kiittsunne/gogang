import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Login = () => {
  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
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
      )}
    </>
  );
};

export default Login;
