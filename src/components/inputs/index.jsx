import React from "react";

export default function Input(props) {
  return (
    <input
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      onChange={(event) => props.callback(event.target.value)}
    />
  );
}
