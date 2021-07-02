import React from "react";

export default function InputNav(props) {
  return (
    <input
      id={props.id}
      value={props.value}
      type={props.type}
      onChange={(event) => props.callback(event.target.value)}
    />
  );
}
