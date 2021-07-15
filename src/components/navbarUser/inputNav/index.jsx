import React from "react";

export default function InputNav(props) {
  return (
    <input
      id={props.id}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={(event) => props.callback(event.target.value)}
    />
  );
}
