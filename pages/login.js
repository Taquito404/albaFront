import React, { useEffect, useState } from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import s from "../styles/Login.module.scss";
import Input from "../src/components/inputs";
import { route } from "next/dist/next-server/server/router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("errorDiv");
  const [isErrorText, setIsErrorText] = useState("errorText");
  const router = useRouter();


  useEffect(() => {
    const validateLogin = () => {
      const token = window.localStorage.getItem('token');
      if(token){
        router.push('/')
        return;
      }

    }

    validateLogin()
  }, [])

  const makeSubmit = async (event) => {
    event.preventDefault();
    try {
      const logIn = {
        email,
        password,
      };
      await setIsError("errorDiv");
      await setIsErrorText("errorText");
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}users/signIn`,
        logIn
      );
      const token = data.data.token;
      const setToken = window.localStorage.setItem("token", token);
      setToken;
      if (token) {
        router.push("/");
      }
      router.push("/");
      location.reload();
    } catch (error) {
      console.log(error.message);
      if ((error = 400)) {
        await setIsError("errorDivDisplay"), setIsErrorText("errorTextDisplay");
      }
    }
  };
  return (
    <>
      <Head>
        <title>Inicia sesión</title>
      </Head>
      <div className={s.background}>
        <form onSubmit={makeSubmit} className={s.form}>
          <div className={s[isError]}>
            <h3 className={s[isErrorText]}>
              Correo electrónico o contraseña no válidos.
            </h3>
          </div>
          <label htmlFor="email">Correo electrónico</label>
          <Input
            className={s.email}
            type="email"
            value={email}
            callback={setEmail}
            placeholder="micorreo@correo.com"
          />
          <label htmlFor="password">Contraseña</label>
          <Input
            type="password"
            value={password}
            callback={setPassword}
            placeholder="**********"
          />
          <button className={s.entra} id="logIn" type="submit">
            ENTRA
          </button>
          <Link href="/registrarse">
            <button className={s.registrar} id="signIn" type="button">
              REGÍSTRATE
            </button>
          </Link>
          <div className={s.imgBackground}></div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
