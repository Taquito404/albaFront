import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import s from "../Burger.module.scss";
import Link from "next/link";

const Menu = ({ open }) => {
  const router = useRouter();
  const [logIn, setLogIn] = useState("hide");
  const [logOut, setLogOut] = useState("hide");
  const handleLogIn = () => {
    router.push("/login");
  };
  const handleLogOut = () => {
    if (window.localStorage.getItem("token")) {
      window.localStorage.removeItem("token");
      router.push("/");
    } else {
      setLogIn("show");
    }
  };
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLogOut("show");
      setLogIn("hide");
    } else {
      setLogOut("hide");
      setLogIn("show");
    }
  });
  return (
    <StyledMenu open={open}>
      <a className={s.disabled}>DIRECTORIO</a>
      <Link href={"/cursos-sugeridos"}>
        <a>CURSOS Y TALLERES</a>
      </Link>
      <a className={s.disabled}>MARKETPLACE</a>
      <a className={s.disabled}>COTIZA TU EVENTO</a>
      <a className={s.disabled}>DONA ROPA Y ARTÍCULOS</a>
      <div onClick={handleLogIn} className={s[logIn]}>
        <h3>Login</h3>
      </div>
      <div onClick={handleLogOut} className={s[logOut]}>
        <h3>Cerrar sesión</h3>
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
