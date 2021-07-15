import React from "react";
import Styles from "../../../styles/Suggested.module.scss";

// export default function Search() {
//   return (
//     <div>
//       <input type=""
//     </div>
//   )
// }

export default function Input(props) {
  return (
    <input
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      onChange={(event) => props.callback(event.target.value)}
      className={`${Styles.search}`}
    />
  );
}
