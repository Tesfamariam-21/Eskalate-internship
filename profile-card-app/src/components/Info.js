import React from "react";

function Info(props) {
  return (
    <div style={{ fontSize: "18px", textAlign: "center" }}>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      {props.website && (
        <a href={props.website} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      )}
    </div>
  );
}

export default Info;
