import React, { useState, useEffect } from "react";
import axios from "axios";

import s from "../styles/Login.module.scss";
import Input from "../src/components/inputs";
import Nav from "../src/components/navbarUser/index";
import Footer from "../src/components/footerUser";

const logIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("errorDiv");
  const [isErrorText, setIsErrorText] = useState("errorText");
  const [isRegister, setIsRegister] = useState("registrar");
  const makeSubmit = async (event) => {
    event.preventDefault();
    const taco = '{"email":"taco123@gmail.com","password":"taco123"}';
    try {
      const logIn = {
        email,
        password,
      };
      await console.log(logIn);
      await setIsError("errorDiv");
      await setIsErrorText("errorText");

      const token = window.localStorage.getItem("token");
      let headers = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        auth: token,
      };
      // console.log(headers);
      const { data } = await axios.post(
        "https://dev-alba.herokuapp.com/users",
        taco,
        {
          headers,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
      if ((error = 400)) {
        await setIsError("errorDivDisplay"), setIsErrorText("errorTextDisplay");
      }
    }
  };
  const registerForm = async (event) => {
    try {
      await console.log("aaa");
    } catch (error) {
      await console.log(error);
    }
  };
  return (
    <div className={s.background}>
      <Nav />

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
        <button
          className={s[isRegister]}
          id="signIn"
          type="button"
          onClick={() => {
            registerForm();
          }}
        >
          REGÍSTRATE
        </button>
        {/* <button>atrás</button> */}
      </form>
      <Footer />
    </div>
  );
};

export default logIn;
