import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const usernameRegEx = /^[A-z][A-z0-9-_]{3,23}$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const signupURL = "/api/signup";

const SignUp = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [age, setAge] = useState("");
  const [ageFocus, setAgeFocus] = useState(false);

  const [gender, setGender] = useState("");
  const [genderFocus, setGenderFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(usernameRegEx.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(passwordRegEx.test(password));
  }, [password]);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const usernameVerification = usernameRegEx.test(username);
    const passwordVerification = passwordRegEx.test(password);
    if (!usernameVerification || !passwordVerification) {
      setErrorMessage("Invalid Entry");
      return;
    }
    try {
      const response = await axios.put(
        signupURL,
        JSON.stringify({
          username,
          firstName,
          lastName,
          age,
          gender,
          email,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // const response = await fetch("http://localhost:5001/api/signup", {
      //   method: "put",
      //   body: JSON.stringify({
      //     username,
      //     firstName,
      //     lastName,
      //     age,
      //     gender,
      //     email,
      //     password,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      console.log(JSON.stringify(response));
      setSuccess(true);
      setUsername("");
      setFirstName("");
      setLastName("");
      setAge("");
      setGender("");
      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 409) {
        setErrorMessage("Username Taken");
      } else {
        setErrorMessage("Sign Up Failed");
      }
      errorRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <span className="line">
              <Link to="/login">LOG IN</Link>
            </span>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errorRef}
            className={errorMessage ? "error-message" : "offscreen"}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          <h1>SIGN UP</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              USERNAME:
              <FontAwesomeIcon
                icon={faCheck}
                className={validUsername ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validUsername || !username ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              required
              aria-invalid={validUsername ? "false" : "true"}
              aria-describedby="username-note"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <p
              id="username-note"
              className={
                usernameFocus && username && !validUsername
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="firstname">FIRST NAME:</label>
            <input
              type="text"
              id="firstname"
              ref={userRef}
              autoComplete="off"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              required
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(false)}
            />

            <label htmlFor="lastname">LAST NAME:</label>
            <input
              type="text"
              id="lastname"
              ref={userRef}
              autoComplete="off"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
            />

            <label htmlFor="age">AGE:</label>
            <input
              type="number"
              step="1"
              min="16"
              id="age"
              ref={userRef}
              autoComplete="off"
              onChange={(event) => setAge(event.target.value)}
              value={age}
              required
              onFocus={() => setAgeFocus(true)}
              onBlur={() => setAgeFocus(false)}
            />

            <label htmlFor="gender">GENDER:</label>
            <input
              type="text"
              id="gender"
              ref={userRef}
              onChange={(event) => setGender(event.target.value)}
              value={gender}
              onFocus={() => setGenderFocus(true)}
              onBlur={() => setGenderFocus(false)}
              list="genders"
            />
            <datalist id="genders">
              <option value="Male" />
              <option value="Female" />
              <option value="Prefer not to say" />
            </datalist>

            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="password-note"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="password-note"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <button disabled={!validUsername || !validPassword ? true : false}>
              Sign Up
            </button>
          </form>
          <p>
            Already signed up?
            <br />
            <span className="line">
              <Link to="/login">LOG IN</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default SignUp;
