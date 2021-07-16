import Head from "next/head";
import Vimeo from "@u-wave/react-vimeo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import s from "../styles/Landing.module.scss";
import Link from "next/link";
// import CarouselComplete from "../src/components/Carousel/Carousel";
import FreeCard from "../src/components/CardsSuscriptions/Free";
import ProCard from "../src/components/CardsSuscriptions/Pro";

import axios from "axios";

export default function Home() {
  const [isValidated, setIsValidated] = useState(false);
  const [cursos, setCursos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const redirectByRole = async () => {
      const token = window.localStorage.getItem("token");
      const today = new Date();
      const decodedToken = jwt.decode(token, { complete: true });
      if (!token) {
        setIsValidated(true);
        router.push("/");
        return;
      }

      if (decodedToken.payload.exp * 1000 < today.getTime()) {
        window.localStorage.removeItem("token");
        setIsValidated(true);
        router.push("/");
        return;
      }
      let options = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          auth: token,
        },
      };
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}users/profile`,

        options
      );
      data.user.role.map((userRole) => {
        console.log(userRole);
        if (userRole === "admin") {
          router.push("/admin");
          setIsValidated(true);
          return;
        } else if (userRole === "partner") {
          //ruta de los partners
          //setIsValidated(true);
          setIsValidated(true);
          return;
        } else if (!userRole || userRole === "user") {
          router.push("/");
          setIsValidated(true);
          return;
        }
      });
      setIsValidated(true);
    };
    redirectByRole();
    return () => {
      setIsValidated(false);
    };
  }, []);

  useEffect(() => {
    const getCursos = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}courses`
        );
        setCursos(data.data.courses);
      } catch (error) {
        console.error(error);
      }
    };
    getCursos();
    return () => {
      setCursos([]);
    };
  }, []);

  return (
    <>
      {!isValidated ? (
        <div className="container container-fluid ">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <Head>
            <title>Alba</title>
            <meta name="Alba maternidad" content="Alba maternidad" />
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>

          <div className={s.body}>
            <div className={s.video}>
              <Vimeo
                video="https://vimeo.com/568598656"
                responsive
                loop
                autoplay
                controls={true}
                showTitle={false}
                volume={0.2}
              />
            </div>
            {
              //<CarouselComplete className={s.carousel} />
            }
            <div className={s.cursos}>
              <div className={s.card}>
                <h3>{cursos.length === 0 ? "" : cursos[0].title}</h3>
                <p>
                  {cursos.length === 0
                    ? ""
                    : cursos[0].description.substr(0, 140) + "..."}
                </p>
                <button
                  type="text"
                  onClick={() => router.push("/curso/" + cursos[0]._id)}
                >
                  Ver mas
                </button>
              </div>
            </div>
            <div className={s.suscriptions}>
              <h1>SUSCRIPCIONES</h1>
            </div>
            <div className={s.cards}>
              <FreeCard />
              <ProCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
