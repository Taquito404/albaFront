import React, { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";
import "../CourseModal/styles/coursemodal.module.scss";
import Styles from "../RoundButton/styles/RoundButton.module.scss";
import logo from "../CardCourses/styles/card.module.scss";
import pack from "../CourseModal/styles/coursemodal.module.scss";

export default function CourseModal({ selected, closeModal }) {
  const router = useRouter();
  return (
    <div>
      <Modal
        isOpen={selected}
        ariaHideApp={false}
        className={pack.modalWrapper}
      >
        <div className={pack.imgContainer}>
          <img src={selected.imgUrl}></img>
        </div>
        <div className={pack.titleContainer}>
          <h1>{selected.title}</h1>
          <ul>
            <il>
              {/* Aquí debería ir la cantidade lecciones por curso */}
              <svg className={pack.videoPlayer} />
            </il>
          </ul>
        </div>
        <button
          type="button"
          className={`${pack.buttonModal}`}
          onClick={() => closeModal(null)}
        >
          X
        </button>
        <div className={pack.descriptionContainer}>
          <p>{selected.description}</p>
        </div>
        <button
          type="button"
          className={pack.verButton}
          onClick={() => router.push(`/curso/${selected._id}`)}
        >
          VER
        </button>
      </Modal>
    </div>
  );
}
