import React, { useState } from "react";

import s from "../styles/Login.module.scss";
import Input from "../src/components/inputs";
import Nav from "../src/components/navbarUser/index";
import Footer from "../src/components/footerUser";
//this allows the navbar to be sticked at top
import Sticky from "react-sticky-el";

const logIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const makeSubmit = async (event) => {
    event.preventDefault();

    try {
      const logIn = {
        email,
        password,
      };
      await console.log(logIn);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.background}>
      <Sticky>
        <Nav />
      </Sticky>

      <form onSubmit={makeSubmit} className={s.form}>
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
        <button className={s.registrar} id="signIn" type="submit">
          REGÍSTRATE
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default logIn;
