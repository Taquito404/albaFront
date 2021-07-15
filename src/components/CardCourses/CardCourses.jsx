import React, { useState } from "react";
import { GetServerSideProps } from "next";
import pack from "../RoundButton/styles/RoundButton.module.scss";
import Styles from "../CardCourses/styles/card.module.scss";
import RoundButton from "../RoundButton/RoundButton";
import CourseModal from "../CourseModal/CourseModal";

export default function CardCourses({ curso, openModal, leccion }) {
  // console.log ('props', data)

  return (
    <div className={`${Styles.background}`}>
      <div className={`${Styles.band}`}>
        <div className={`${Styles.item1}`}>
          <div className={`${Styles.card}`}>
            <div>
              <img src={curso.imgUrl} className={Styles.image}></img>
            </div>
            <article>
              <h1>{curso.title}</h1>
              <ul className={Styles.listStyle}>
                <il>
                  <svg className={Styles.babyLogo} />
                  {!leccion ? "" : leccion.length}
                </il>

                <il>
                  <svg className={Styles.videoPlayer} />
                </il>
              </ul>
              <span>{curso.description}</span>
            </article>
            <button
              onClick={() => openModal(curso)}
              type="button"
              className={`${pack.buttonModal}`}
            >
              ABRIR
            </button>
            <div className={Styles.cardFooter}>
              <span>
                Por: Nombre partner
                <br />
                Asesor de---certificado
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
