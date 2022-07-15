import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const userRef = useRef();

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    setSuccess(true);
    setUsername("");
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setEmail("");
    setPassword("");
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
          <h1>SIGN UP</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />

            <label htmlFor="firstname">FIRST NAME:</label>
            <input
              type="text"
              id="firstname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />

            <label htmlFor="lastname">LAST NAME:</label>
            <input
              type="text"
              id="lastname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />

            <label htmlFor="age">AGE:</label>
            <input
              type="number"
              step="1"
              id="age"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />

            <label htmlFor="gender">GENDER:</label>
            <input
              type="text"
              id="gender"
              ref={userRef}
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
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

            <button>Sign Up</button>
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
