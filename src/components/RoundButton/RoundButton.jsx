import React from "react";
import Image from "next/image";
import Styles from "../RoundButton/styles/RoundButton.module.scss";

// const RoundButton = () => {
//   return (
//     <div>
//       <button type="button" className={`${Styles.button}`}>
//         COMPRAR
//       </button>
//     </div>
//   );
// };

function RoundButton() {
  
  return (
    <div>
      <button type="button" className={`${Styles.button}`}>
        TEXTO
      </button>
    </div>
  );
}

export default RoundButton;
