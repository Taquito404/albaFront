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
      <a>ACCESO A PROVEEDORES</a>
      <div onClick={handleLogIn} className={s[logIn]}>
        <svg />
        <h3>Login</h3>
      </div>
      <div onClick={handleLogOut} className={s[logOut]}>
        <svg />
        <h3>Cerrar sesión</h3>
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
