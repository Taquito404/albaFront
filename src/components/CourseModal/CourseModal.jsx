import React, { useState } from "react";
import { useRouter } from "next/router";
import modalStyles from "../CourseModal/styles/modalStyles.module.scss";


export default function CourseModal({ handleCloseModal, curso, lecciones, mentor, setSelectedCourse }) {
  const router = useRouter();
  
  const handleClickRouter = () => {
    router.push('/curso/'+curso._id);
    setSelectedCourse(false);

  }
  return (
    <div className={modalStyles.container}>
      <div className={modalStyles.modal}>
        <div className={modalStyles.modalImgWrapper}>
          <img src={curso.imgUrl} alt={curso.imgUrl} />
        </div>

        <div className={modalStyles.titleWrapper}>
          <h3>{curso.title}</h3>
          <div className={modalStyles.titleVideoWrapper}>
            <div className={modalStyles.videoInfoWrapper}>
              <svg className={modalStyles.videoPlayer} />
              <p>{lecciones.length === 0 || !lecciones ? '0': lecciones.filter(leccion => leccion.courseId === curso._id).length}</p>
            </div>

            <p>Por: <span>{mentor.name+' '+ mentor.lastName}</span></p>
          </div>
        </div>


        <div className={modalStyles.descriptionWrapper}>
          <p>{curso.description}</p>
          <div className={modalStyles.btnWrapper}>
            <button type="text" onClick={handleClickRouter}>Ver ahora</button>
            <button type="text" onClick={handleCloseModal}>Cerrar ventana</button>
          </div>
        </div>

        <button className={modalStyles.btnClose} onClick={handleCloseModal}>x</button>
      </div>
    </div>
  );
}
