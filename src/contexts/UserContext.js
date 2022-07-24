// import React, { useState, useEffect, useContext } from "react";
// import axios from "../api/axios";
// const loginURL = "/api/login";
// const accountURL = "/api/account";
// const logOutURL = "/api/logout";

// const UserContext = React.createContext();
// export function useUserContext() {
//   return useContext(UserContext);
// }

// export function UserContextProvider({ children }) {
//   const initAuth = {
//     email: "",
//     password: "",
//     errorMessage: "",
//   };
//   const [auth, setAuth] = useState(initAuth);
//   const handleAuth = (email, password, errorMessage) => {
//     setAuth({
//       ...auth,
//       email: email,
//       password: password,
//       errorMessage: errorMessage,
//     });
//   };

//   const initUserData = {
//     error: "",
//     email: "",
//     username: "",
//     firstName: "",
//     age: "",
//     trips: [],
//   };
//   const [userData, setUserData] = useState(initUserData);
//   const handleUserData = (error, email, username, firstName, age, trips) => {
//     setUserData({
//       ...userData,
//       error: error,
//       email: email,
//       username: username,
//       firstName: firstName,
//       age: age,
//       trips: trips,
//     });
//   };

//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function loginUser() {
//       try {
//         const email = auth.email;
//         const password = auth.password;
//         const response = await axios.post(
//           loginURL,
//           JSON.stringify({ email, password }),
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },

//             withCredentials: true,
//           }
//         );
//         const accessToken = response?.data?.access;
//         localStorage.setItem("access", accessToken);
//         setAuth(initAuth);
//       } catch (err) {
//         console.log(err.message);
//         // if (!err?.response) {
//         //   handleAuth({ errorMessage: "No Server Response" });
//         // } else if (err.response?.status === 400) {
//         //   handleAuth({ errorMessage: "Missing Email or Password" });
//         // } else if (err.response?.status === 401) {
//         //   handleAuth({ errorMessage: "Unauthorized" });
//         // } else {
//         //   handleAuth({ errorMessage: "Login Failed" });
//         // }
//       }
//     }
//     loginUser();
//   }, [auth.password.length !== 0]);

//   useEffect(() => {
//     async function fetchUserData() {
//       setIsLoading(true);
//       try {
//         const response = await axios.post(
//           accountURL,
//           {},
//           {
//             headers: {
//               "Content-Type": "application/json",
//               authorization: `Bearer ${window.localStorage.getItem("access")}`,
//             },
//             withCredentials: true,
//           }
//         );
//         const { username, firstName, age, email, trips } = response.data;
//         handleUserData({
//           username: username,
//           firstName: firstName,
//           age: age,
//           email: email,
//           trips: trips,
//         });
//       } catch (err) {
//         console.log(err);
//         if (!err?.response) {
//           handleUserData({ ...userData, error: "No Server Response" });
//         }
//       }
//       setIsLoading(false);
//     }
//     fetchUserData();
//   }, [window.localStorage.getItem("access") !== null]);

//   return (
//     <UserContext.Provider value={{ auth, handleAuth, userData, isLoading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
