import React, { useState } from "react";
import { useRouter } from "next/router";
import modalStyles from "../CourseModal/styles/modalStyles.module.scss";


export default function CourseModal({ handleCloseModal }) {
  const router = useRouter();

  return (
    <div className={modalStyles.container}>
      <div className={modalStyles.modal}>
        <div className={modalStyles.modalImgWrapper}>
          <img src='https://i.vimeocdn.com/video/1175908678_240' alt="a" />
        </div>

        <div className={modalStyles.titleWrapper}>
          <h3>Titulo del video</h3>
          <div className={modalStyles.titleVideoWrapper}>
            <div className={modalStyles.videoInfoWrapper}>
              <svg className={modalStyles.videoPlayer} />
              <p>10</p>
            </div>

            <p>Por: <span>Nombre del mentor</span></p>
          </div>
        </div>


        <div className={modalStyles.descriptionWrapper}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, amet dicta delectus cumque dolor beatae. Eum animi soluta distinctio. Sapiente non nobis est voluptatem quasi officia nihil vitae incidunt rerum!</p>
          <div className={modalStyles.btnWrapper}>
            <button type="text">Ver ahora</button>
            <button type="text" onClick={handleCloseModal}>Cerrar ventana</button>
          </div>
        </div>

        <button className={modalStyles.btnClose} onClick={handleCloseModal}>x</button>
      </div>
    </div>
  );
}
