import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

// import InputNav from "./inputNav";
import s from "./Navbar.module.scss";
// import Drop from "./dropdownMenuNav/drop";
import Burger from "./burgerMenu/burger/Burger";
import Menu from "./burgerMenu/menu/Menu";
import { useOnClickOutside } from "./burgerMenu/hooks";

const Nav = () => {
  const router = useRouter();
  // const [search, setSearch] = useState("");
  const [logIn, setLogIn] = useState("hide");
  const [logOut, setLogOut] = useState("hide");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const handleLogIn = () => {
    router.push("/login");
  };
  const handleLogOut = () => {
    if (window.localStorage.getItem("token")) {
      window.localStorage.removeItem("token");
      router.push("/");
      location.reload();
    } else {
      setLogIn("show");
    }
  };
  //se hacen cambios para hacer las peticiones del endpoint si se tiene token, para tener el nombre del usuario
  //se hacen cambios para hacer log in o cerrar sesión en el apartado
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setLogOut("show");
      setLogIn("hide");
    } else {
      setLogOut("hide");
      setLogIn("show");
    }
  });

  useEffect(() => {
    const getName = async () => {
      if (window.localStorage.getItem("token")) {
        try {
          const token = window.localStorage.getItem("token");
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
          setUser(data.user);
        } catch (error) {
          console.error(error);
        }
      } else {
        setUser(null);
      }
    };
    getName();
  }, [logIn, logOut]);

  const toUserPage = () => {
    if (window.localStorage.getItem("token")) {
      router.push("/detalles-usuario");
    } else {
      router.push("/login");
    }
  };

  // const makeSearch = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await console.log(search);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div>
      <div className={s.navTop}>
        <div ref={node} className={s.burger}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Link href="/">
          <button className={s.btnLogo}></button>
        </Link>
        {/*
          <h3 className={s.location}>
          Tu ubicación:
          <br />
          ---
        </h3>
        <form onSubmit={makeSearch} className={s.searchBar}>
          <Drop className={s.drop} />
          <InputNav
            value={search}
            callback={setSearch}
            placeholder="Buscar..."
            id="search-input"
            type="toSearch"
          />
          <button className={s.search} id="search" type="submit" />
        </form>
          */}
        <div className={s.settings}>
          <div onClick={toUserPage} className={s.user}>
            <svg />
            <h3>Hola{user ? `, ${user.userName}` : ""}</h3>
          </div>
          <div className={s.exit}>
            <div onClick={handleLogIn} className={s[logIn]}>
              <svg />
              <h3>Login</h3>
            </div>
            <div onClick={handleLogOut} className={s[logOut]}>
              <svg />
              <h3>Cerrar sesión</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={s.navBot}>
        <ul>
          <li className={s.disabled}>
            <a>DIRECTORIO</a>
          </li>
          <Link href={"/cursos-sugeridos"}>
            <li>
              <a>CURSOS Y TALLERES</a>
            </li>
          </Link>
          <li className={s.disabled}>
            <a>MARKETPLACE</a>
          </li>
          <li className={s.disabled}>
            <a>COTIZA TU EVENTO</a>
          </li>
          <li className={s.disabled}>
            <a>DONA ROPA Y ARTÍCULOS</a>
          </li>
        </ul>
        {/* <a>ACCESO A PROVEEDORES</a> */}
      </div>
    </div>
  );
};

export default Nav;
