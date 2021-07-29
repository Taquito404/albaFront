import React, { useEffect, useState } from "react";
import Head from "next/head";

import axios from "axios";
import jwt from "jsonwebtoken";

import Image from "next/image";
import MenuCards from "../../src/components/MenuCards";

import UserImg from "../../src/assets/img/UserImg.png";
import Membresia from "../../src/assets/img/iconos/DISEÑO-DE-INTERIORES.png";
import Marketplace from "../../src/assets/img/iconos/marketplace-alba-maternidad.png";
import Manos from "../../src/assets/img/iconos/NON-PROFIT.png";
import Servicios from "../../src/assets/img/iconos/servicios-medicos-alba-maternidad.png";
import Cursos from "../../src/assets/img/iconos/cursos-y-talleres-alba-maternidad.png";
import perfil from "../../src/assets/img/perfil-de-usuario-movil.png";
import perfilDesktop from "../../src/assets/img/perfil-usuario-alba-maternidad.png";

import userDetailsStyles from "./styles/detallesUsuario.module.scss";
import { useRouter } from "next/router";

const DetallesUsuario = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (!token) {
          router.push("/");
          return;
        }
        const today = new Date();
        const decodedToken = jwt.decode(token, { complete: true });

        if (decodedToken.payload.exp * 1000 < today.getTime()) {
          window.localStorage.removeItem("token");
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
    getUser();
    return () => {
      setUser({});
    };
  }, []);

  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Detalle de usuario</title>
      </Head>
      <div className={userDetailsStyles.container}>
        <div className={userDetailsStyles.userWrapper}>
          <div className={userDetailsStyles.cardUser}>
            <div className={userDetailsStyles.headerCard}>
              <Image src={UserImg} alt="no-user-image" />
              <div className={userDetailsStyles.userInfo}>
                <h3>{user ? user.userName : ""}</h3>
                <p>{user ? user.email : ""}</p>
              </div>
            </div>
            <ul>
              <li>Escritorio</li>
              <li>Pedidos</li>
              <li>Consultas</li>
              <li>Descargas</li>
              <li onClick={() => router.push("/detalles-usuario/mi-membresia")}>
                Información de la cuenta
              </li>
            </ul>
          </div>

          <div className={userDetailsStyles.userDetails}>
            <p>
              Hola {user.userName} (¿no eres tú?{" "}
              <span onClick={handleLogOut}>Cerrar sessión</span>)
            </p>
            
            <MenuCards
              userDetailsStyles={userDetailsStyles}
              Membresia={Membresia}
              Cursos={Cursos}
              Marketplace={Marketplace}
              Manos={Manos}
              Servicios={Servicios}
            />
          </div>
        </div>

        <MenuCards
          userDetailsStyles={userDetailsStyles}
          Membresia={Membresia}
          Cursos={Cursos}
          Marketplace={Marketplace}
          Manos={Manos}
          Servicios={Servicios}
        />

        <div className={userDetailsStyles.positionFixed}>
          <Image src={perfil} />
        </div>
        <div className={userDetailsStyles.positionFixedDesktop}>
          <Image src={perfilDesktop} />
        </div>
      </div>
    </>
  );
};

export default DetallesUsuario;
