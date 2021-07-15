import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import s from "../styles/Login.module.scss";
import Input from "../src/components/inputs";

const logIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("errorDiv");
  const [isErrorText, setIsErrorText] = useState("errorText");
  const router = useRouter();

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
        // `${process.env.REACT_APP_DB_HOST}/users/signIn`,
        "https://alba-app.us-south.cf.appdomain.cloud/users/signIn",
        logIn
      );
      const token = data.data.token;
      const setToken = window.localStorage.setItem("token", token);
      setToken;
      if (token) {
        router.push("/");
      }
    } catch (error) {
      console.log(error.message);
      if ((error = 400)) {
        await setIsError("errorDivDisplay"), setIsErrorText("errorTextDisplay");
      }
    }
  };
  return (
    <div className={s.background}>
      <form onSubmit={makeSubmit} className={s.form}>
        <div className={s[isError]}>
          <h3 className={s[isErrorText]}>
            Correo electrónico o contraseña no válidos.
          </h3>
        </div>
        <label for="email">Correo electrónico</label>
        <Input
          className={s.email}
          type="email"
          value={email}
          callback={setEmail}
          placeholder="micorreo@correo.com"
        />
        <label for="password">Contraseña</label>
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
      </form>
    </div>
  );
};

export default logIn;
