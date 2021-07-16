import React, { useEffect, useState } from "react";
import axios from "axios";
import misCursosStyles from "./styles/misCursos.module.scss";
import { useRouter } from "next/router";

const MisCursos = () => {
  const router = useRouter();
  const [cursos, setCursos] = useState([]);
  const [user, setUser] = useState({});

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
          router.push("/");
          return;
        }
        // 'https://dev-alba.herokuapp.com/users/profile'
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/profile`,
          options
        );
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getProfile();
    return () => {
      setUser({});
    };
  }, []);

  useEffect(() => {
    const getCursos = async () => {
      try {
        if (Object.keys(user).length === 0) {
          return;
        }
        // "https://dev-alba.herokuapp.com/courses"
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}courses`
        );
        let filteredCourses = [];
        data.data.courses.forEach((curso) => {
          user.purchasedCourses.forEach((purchasedCourse) => {
            if (curso._id === purchasedCourse.courseId) {
              filteredCourses.push(curso);
            }
          });
        });
        setCursos(filteredCourses);
      } catch (error) {
        console.error(error);
      }
    };
    getCursos();
    return () => {
      setCursos([]);
    };
  }, [user]);

  return (
    <>
      <Head>
        <title>Mis cursos</title>
      </Head>
      <div className={misCursosStyles.container}>
        <div className={misCursosStyles.headerWrapper}>
          <div>
            <h3>Tus cursos</h3>
            <p>
              Aqui podras encontrar todos los cursos que has seleccionado o
              comprado.
            </p>
          </div>
        </div>

        <div className={misCursosStyles.contentWrapper}>
          <div className={misCursosStyles.filterWrapper}>
            <h3>Total de cursos {cursos.length === 0 ? "0" : cursos.length}</h3>
          </div>

          <div className={misCursosStyles.videosWrapper}>
            {cursos.length === 0 ? (
              <p>No cuentas con cursos registrados...</p>
            ) : (
              cursos.map((curso) => (
                <div
                  className={misCursosStyles.videoCard}
                  key={curso._id}
                  onClick={() => router.push(`/curso/${curso._id}`)}
                >
                  <img src={curso.imgUrl} alt={curso.title} />
                  <div className={misCursosStyles.wrapperCardText}>
                    <h3>{curso.title ? curso.title : ""}</h3>
                    <p>
                      {curso.description
                        ? curso.description.substr(0, 250) + "..."
                        : ""}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MisCursos;
