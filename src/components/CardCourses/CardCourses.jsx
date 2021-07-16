import React, { useState, useEffect, useMemo } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import pack from "../RoundButton/styles/RoundButton.module.scss";
import Styles from "../CardCourses/styles/card.module.scss";
import RoundButton from "../RoundButton/RoundButton";
import CourseModal from "../CourseModal/CourseModal";

export default function CardCourses({ curso, lecciones, handleOpenModal }) {
  // console.log ('props', data)

  const [author, setAuthor] = useState({ name: "", lastName: "" });

  const numLecciones = useMemo(() => {
    if (lecciones.length === 0) {
      return 0;
    }
    const filteredLecciones = lecciones.filter(
      (leccion) => leccion.courseId === curso._id
    );
    return filteredLecciones.length;
  }, [curso, lecciones]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          `https://dev-alba.herokuapp.com/users/mentor/${curso.authorId}`
        );
        setAuthor(data.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div className={`${Styles.card}`}>
        <div>
          <img src={curso.imgUrl} className={Styles.image}></img>
        </div>
        <article>
          <h1>{curso.title}</h1>
          <div className={Styles.listStyle}>
            <div className={Styles.listCounter}>
              <svg className={Styles.videoPlayer} />
              <span>{numLecciones}</span>
            </div>
          </div>
          <span>{curso.description}</span>
        </article>
        <button
          onClick={handleOpenModal}
          type="button"
          className={`${pack.buttonModal}`}
        >
          ABRIR
        </button>
        <div className={Styles.cardFooter}>
          <span>
            Por: {author.name} {author.lastName}
          </span>
        </div>
      </div>

    </>
  );
}
