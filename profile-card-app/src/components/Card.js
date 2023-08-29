import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div>
      <Avatar avatarUrl={props.user.avatarUrl} />
      <Info
        name={props.user.name}
        bio={props.user.bio}
        website={props.user.website}
      />
    </div>
  );
}

export default Card;
