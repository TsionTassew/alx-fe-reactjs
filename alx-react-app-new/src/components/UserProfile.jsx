import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "8px" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p>{props.bio}</p>
    </div>
  );
}

export default UserProfile;
