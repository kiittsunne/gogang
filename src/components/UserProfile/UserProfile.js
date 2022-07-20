import React from "react";

const UserProfile = ({ username, age, email, logout }) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
      <div className="flexGrow">
        <button onClick={logout}>LOG OUT</button>
      </div>
    </div>
  );
};

export default UserProfile;
