import React, { useState } from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { Alert } from "reactstrap";

import s from "./signIn.module.scss";
import Input from "../../src/components/inputs";

const SignIn = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isError, setIsError] = useState("errorDiv");
  const [isErrorText, setIsErrorText] = useState("errorText");
  const [isErrorInputs, setIsErrorInputs] = useState("errorDiv");
  const [isErrorTextInputs, setIsErrorTextInputs] = useState("errorText");
  const [dangerAlert, setDangerAlert] = useState(false);
  const router = useRouter();

  const makeSubmit = async (event) => {
    event.preventDefault();
    if (name && lastName && userName && email && password === passwordConfirm) {
      try {
        const signUp = {
          name,
          lastName,
          userName,
          email,
          password,
        };
        await setIsError("errorDiv"),
          setIsErrorText("errorText"),
          setIsErrorInputs("errorDiv"),
          setIsErrorTextInputs("errorText");
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}users/signup`,
          signUp
        );
        const token = data.data.token;
        const setToken = window.localStorage.setItem("token", token);
        setToken;
        if (token) {
          router.push("/detalles-usuario");
        }
      } catch (error) {
        if ((error = 400)) {
          console.log(error.message);
          setDangerAlert(true);
        }
      }
    } else {
      if (password != passwordConfirm) {
        await setIsError("errorDivDisplay"), setIsErrorText("errorTextDisplay");
      } else {
        await setIsErrorInputs("errorDivDisplay"),
          setIsErrorTextInputs("errorTextDisplay");
      }
    }
  };
  return (
    <>
      <Head>
        <title>Registrate</title>
      </Head>
      <div className={s.background}>
        <Alert className={s.danger} isOpen={dangerAlert}>
          <span className="alert-text">
            <strong>Error!</strong> Por favor, int??ntelo m??s tarde.
          </span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setDangerAlert(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Alert>
        <form onSubmit={makeSubmit} className={s.form}>
          <div className={s.imgBackground}></div>
          <div className={s[isError]}>
            <h3 className={s[isErrorText]}>Las contrase??as deben coincidir.</h3>
          </div>
          <div className={s[isErrorInputs]}>
            <h3 className={s[isErrorTextInputs]}>
              Todos los campos son obligatorios.
            </h3>
          </div>
          <label htmlFor="text">Nombre</label>
          <Input
            className={s.email}
            type="text"
            value={name}
            callback={setName}
            placeholder="Ana Luisa"
            required
          />
          <label htmlFor="text">Apellido</label>
          <Input
            className={s.email}
            type="text"
            value={lastName}
            callback={setLastName}
            placeholder="P??rez"
          />
          <label htmlFor="text">Nombre de Usuario</label>
          <Input
            className={s.email}
            type="text"
            value={userName}
            callback={setUserName}
            placeholder="AnaLu"
          />
          <label htmlFor="email">Correo electr??nico</label>
          <Input
            className={s.email}
            type="email"
            value={email}
            callback={setEmail}
            placeholder="micorreo@correo.com"
          />
          {/* <label for="text">Bio</label>
        <Input
          className={s.email}
          type="text"
          value={bio}
          callback={setBio}
          placeholder="Hola! Esta es mi bio"
        /> */}
          {/* <label for="text">Tel??fono Celular</label>
        <Input
          className={s.email}
          type="tel"
          value={celphone}
          callback={setCelphone}
          placeholder="P??rez"
        /> */}
          <label htmlFor="password">Contrase??a</label>
          <Input
            type="password"
            value={password}
            callback={setPassword}
            placeholder="**********"
          />
          <label htmlFor="password">Confirmar contrase??a</label>
          <Input
            type="password"
            value={passwordConfirm}
            callback={setPasswordConfirm}
            placeholder="**********"
          />
          <button className={s.entra} id="logIn" type="submit">
            CREAR CUENTA
          </button>
          <Link href="/login">
            <button className={s.registrar} id="signIn" type="button">
              REGRESAR
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
