import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const userRef = useRef();

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setSuccess(true);
    setUser({
      username: "",
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      password: "",
    });
    console.log(user);
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
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
              required
            />

            <label htmlFor="firstname">FIRST NAME:</label>
            <input
              type="text"
              id="firstname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              value={user.firstName}
              required
            />

            <label htmlFor="lastname">LAST NAME:</label>
            <input
              type="text"
              id="lastname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              value={user.lastName}
            />

            <label htmlFor="age">AGE:</label>
            <input
              type="number"
              step="1"
              id="age"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              value={user.age}
            />

            <label htmlFor="gender">GENDER:</label>
            <input
              type="text"
              id="gender"
              ref={userRef}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
              value={user.gender}
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
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
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
