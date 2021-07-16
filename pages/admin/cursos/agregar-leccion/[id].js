import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Leccion from "../../../../src/components/Leccion";

import adminStyles from "../../styles/adminStyles.module.scss";
import headerImg from "../../../../src/assets/img/elemento-ilustrativo-alba-maternidad-1.png";
import { useRouter } from "next/router";

const AgregarLeccion = () => {
  const router = useRouter();
  const [lecciones, setLecciones] = useState([]);
  const [leccion, setLeccion] = useState({
    title: "",
    description: "",
    courseId: router.query.id || "",
    createdDate: new Date(),
    url: "",
  });

  const [visibilityPopUp, setVisibilityPopUp] = useState(false);
  const [newLeccion, setNewLeccion] = useState(false);
  const [hasRemoved, setHasRemoved] = useState(false);
  const [messagePopUp, setMessagePopUp] = useState({
    titlePopUp: "",
    bodyPopUp: "",
  });
  // "https://dev-alba.herokuapp.com/videos"
  useEffect(() => {
    const getLecciones = async () => {
      try {
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
    getLecciones();
    return () => {
      setLecciones([]);
    };
  }, [newLeccion, hasRemoved]);

  const handleChangeValues = (ev) =>
    setLeccion({ ...leccion, [ev.target.name]: ev.target.value });

  const handleDeleteLeccion = async (id) => {
    try {
      const token = window.localStorage.getItem("token");
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      // `https://dev-alba.herokuapp.com/videos/${id}`
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}videos/${id}`,
        options
      );
      setHasRemoved(true);
      setHasRemoved(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { title, description, courseId, createdDate, url } = leccion;

      const token = window.localStorage.getItem("token");
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };

      if (!title || !description || !courseId || !createdDate || !url) {
        setVisibilityPopUp(true);
        setMessagePopUp({
          titlePopUp: "Campos vacios",
          bodyPopUp: "Favor de llenar todos los campos.",
        });
        return;
      }
      // "https://dev-alba.herokuapp.com/videos"
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}videos`,
        leccion,
        options
      );
      setVisibilityPopUp(false);
      setNewLeccion(true);
      setNewLeccion(false);
      setLeccion({
        ...leccion,
        title: "",
        description: "",
        url: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Agregar Leccion</title>
      </Head>
      {visibilityPopUp === true ? (
        <div className="mt-3 animate__animated animate__backInDown alert alert-dismissible alert-danger position-fixed fixed-top w-50 mx-auto">
          <span
            className={`${adminStyles.cursor} fas fa-times mr-2`}
            onClick={() => setVisibilityPopUp(false)}
          ></span>
          <strong className="mr-2">{messagePopUp.titlePopUp}!</strong>
          {messagePopUp.bodyPopUp}
        </div>
      ) : null}
      <div className="w-100 d-flex flex-column flex-lg-row">
        <div className="container container-fluid">
          <div
            className={`w-100 text-center mt-3 shadow-sm border bg-light position-relative rounded p-4`}
          >
            <h4 className="font-weight-bold">Agregar leccion</h4>
            <div className={adminStyles.imgHeader}>
              <Image src={headerImg} alt="header" height={70} width={50} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="font-weight-bold">Titulo</label>
                  <input
                    type="text"
                    className="form-control border rounded shadow-sm p-1"
                    placeholder="E.g. Maternidad IV"
                    name="title"
                    value={leccion.title ? leccion.title : ""}
                    onChange={handleChangeValues}
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Descripcion</label>
                  <input
                    type="text"
                    className="form-control border rounded shadow-sm p-1"
                    placeholder="E.g. En este video se podra visualizar..."
                    name="description"
                    value={leccion.description ? leccion.description : ""}
                    onChange={handleChangeValues}
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Url del video</label>
                  <input
                    type="text"
                    className="form-control border rounded shadow-sm p-1"
                    placeholder="E.g. https://vimeo.com/121212/1212"
                    name="url"
                    value={leccion.url ? leccion.url : ""}
                    onChange={handleChangeValues}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Agrega leccion
                </button>
              </form>
            </div>
            <div className="col-12 mt-5">
              <h4 className="font-weight-bold">Tus lecciones</h4>
              {!lecciones
                ? null
                : lecciones.map((video) => (
                  <Leccion
                    key={video._id}
                    video={video}
                    handleDeleteLeccion={handleDeleteLeccion}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarLeccion;
