import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

import leccionStyles from "./styles/leccionStyles.module.scss";
import VideoCard from "../../src/components/VideoCard";
import Modal from "../../src/components/Modal";
import Toast from "../../src/components/Toast";

const Leccion = () => {
  const router = useRouter();
  const { id } = router.query;
  const [curso, setCurso] = useState({});
  const [lecciones, setLecciones] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [user, setUser] = useState({});
  const [author, setAuthor] = useState({});
  const [hasPurchased, setHasPurchased] = useState(false);
  const [visibilityModal, setVisibilityModal] = useState(false);
  const [addedCourse, setAddedCourse] = useState(false);
  const [visibilityToast, setVisibilityToast] = useState({
    error: false,
    title: "",
    message: "",
  });

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = window.localStorage.getItem("token");
        let options = {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            auth: token,
          },
        };
        if (!token) {
          setHasPurchased(false);
          return;
        }
        // 'https://dev-alba.herokuapp.com/users/profile'
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/profile`,
          options
        );
        setUser(data.user);

        if (data.user.purchasedCourses.length <= 0) {
          setHasPurchased(false);
          return;
        }
        const coursesIds = data.user.purchasedCourses.filter(
          (course) => course.courseId === id
        );
        if (coursesIds.length > 0) {
          setHasPurchased(true);
          return;
        }
        setHasPurchased(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();

    const getCourses = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}courses`);
        const filteredCourses = data.data.courses.filter(course => course.isFree === false);
        setCursos(filteredCourses);
      } catch (error) {
        console.error(error)
      }
    }

    getCourses()
    return () => {
      setUser({});
    };
  }, [addedCourse, id, lecciones]);

  useEffect(() => {
    const getCursoById = async () => {
      try {
        if (!id) {
          setHasPurchased(false);
          return;
        }
        // `https://dev-alba.herokuapp.com/courses/${id}`
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}courses/${id}`
        );
        setCurso(data.data.courses);
      } catch (error) {
        console.error(error);
      }
    };
    getCursoById();
    return () => {
      setCurso({});
    };
  }, [id]);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        if (Object.keys(curso).length <= 0) {
          return;
        }
        // `https://dev-alba.herokuapp.com/users/mentor/${curso.authorId}`
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/mentor/${curso.authorId}`
        );
        setAuthor(data.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getAuthor();
    return () => {
      setAuthor({});
    };
  }, [curso]);

  useEffect(() => {
    const getLeccionesByCurso = async () => {
      try {
        // "https://dev-alba.herokuapp.com/videos"
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}videos`
        );
        const filteredLecciones = data.data.videos.filter(
          (leccion) => leccion.courseId == router.query.id
        );
        setLecciones(filteredLecciones);
      } catch (error) {
        console.error(error);
      }
    };
    getLeccionesByCurso();
    return () => {
      setLecciones([]);
    };
  }, [curso, addedCourse]);

  const handleSelectCourse = async () => {
    try {
      const token = window.localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
      const today = new Date();
      const decodedToken = jwt.decode(token, { complete: true });
      if (decodedToken.payload.exp * 1000 < today.getTime()) {
        window.localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      
      if (curso.isFree === true) {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}users/add-course`, { courseId: curso._id }, options);
        setAddedCourse(true);
        setAddedCourse(false);
        setVisibilityModal(false);
        return;
      }

      if (!user.subscriptionId) {
        setVisibilityToast({
          error: true,
          title: "Error",
          message:
            "No cuentas con la suscripci??n Pro y el curso es de paga. Favor de comprarla o cerrar este mensaje.",
        });
        setVisibilityModal(false);
        return;
      }

      let totalCourses = 0;

      user.purchasedCourses.forEach(ownedCourse => {
        cursos.forEach(course => {
          if (ownedCourse.courseId === course._id) {
            totalCourses += 1;
          }
        })
      })

      if (totalCourses >= 2) {
        setVisibilityToast({
          error: true,
          title: "Error",
          message:
            "Ya consumiste tus dos cursos mensuales, ??deseas comprarlo de manera individual?",
        });
        setVisibilityModal(false);
        return;
      }


      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}stripe/subscription`, options);

      const endDate = new Date();
      endDate.setTime(data.data.subscription.current_period_end * 1000);
      if (today.getTime > endDate.getTime() || data.data.subscription.status !== "active") {
        setVisibilityToast({
          error: true,
          title: "Error",
          message: "No cuentas con una suscripci??n activa, favor de validar.",
        });
        setVisibilityModal(false);
        return;
      }

      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}users/add-course`, { courseId: curso._id }, options);
      setAddedCourse(true);
      setAddedCourse(false);
      setVisibilityModal(false);

    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setVisibilityModal(false);

  const handleCloseToast = () =>
    setVisibilityToast({ error: false, title: "", message: "" });

  return (
    <>
      <Head>
        <title>Curso</title>
      </Head>
      {visibilityToast.error === true ? (
        <Toast data={visibilityToast} handleClose={handleCloseToast} />
      ) : null}
      {visibilityModal === true ? (
        <Modal
          title="??Est??s segura de que quieres empezar este curso?"
          message="Despu??s de aceptarlo no podr??s eliminarlo."
          handleClose={handleClose}
          handleConfirm={handleSelectCourse}
        />
      ) : null}
      <div className={leccionStyles.container}>
        <div className={leccionStyles.headerWrapper}>
          <div>
            <h3>{!curso.title ? "" : curso.title}</h3>
            <p>{!curso.description ? "" : curso.description}</p>
            <p>
              Por:{" "}
              <span>
                {!author.name ? "" : author.name + " " + author.lastName}
              </span>
            </p>
            {hasPurchased === true ? null : (
              <button type="text" onClick={() => setVisibilityModal(true)}>
                Obtener curso
              </button>
            )}
          </div>
        </div>

        <div className={leccionStyles.contentWrapper}>
          <div className={leccionStyles.filterWrapper}>
            <h3>Capitulos del curso {!lecciones ? "" : lecciones.length}</h3>
          </div>

          <div className={leccionStyles.videosWrapper}>
            {!lecciones
              ? null
              : lecciones.map((leccion, idx) => (
                <VideoCard
                  leccionStyles={leccionStyles}
                  leccion={leccion}
                  curso={curso}
                  hasPurchased={hasPurchased}
                  key={idx}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leccion;
