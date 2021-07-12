import React from "react";
import Styles from "../PillButtonTrans/styles/PillButtonTrans.module.scss";

function PillButtonTrans() {
  return (
    <div>
      <button type="button" className={`${Styles.pill}`}>
        TEXTO
      </button>
    </div>
  );
}

export default PillButtonTrans;
