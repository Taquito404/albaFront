import React, { useState } from "react";
import Modal from "react-modal";
import "../CourseModal/styles/coursemodal.module.scss";
import Styles from "../RoundButton/styles/RoundButton.module.scss";
import pack from "../CourseModal/styles/coursemodal.module.scss";

export default function CourseModal({ selected, closeModal }) {
  return (
    <div className={pack.modalWrapper}>
      <Modal isOpen={selected}>
        <h1>{selected.title}</h1>
        <p>{selected.description}</p>
        <button
          type="button"
          className={`${Styles.buttonModal}`}
          onClick={() => closeModal(null)}
        >
          CERRAR
        </button>
      </Modal>
    </div>
  );
}
