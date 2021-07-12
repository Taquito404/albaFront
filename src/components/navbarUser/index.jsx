import React, { useState } from "react";
import InputNav from "./inputNav";
import s from "./Navbar.module.scss";
import Drop from "./dropdownMenuNav/drop";

const Nav = () => {
  const [search, setSearch] = useState("");

  const makeSearch = async (event) => {
    event.preventDefault();
    try {
      await console.log(search);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className={s.navTop}>
        <svg className={s.dropMobile} />
        <button className={s.btnLogo}></button>
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
        <div className={s.settings}>
          <div className={s.user}>
            <svg />
            <h3>Hola, MariaLuisa</h3>
          </div>
          <div className={s.exit}>
            <svg />
            <h3>Cerrar sesión</h3>
          </div>
        </div>
      </div>
      <div className={s.navBot}>
        <ul>
          <li>
            <a href="www.facebook.com">DIRECTORIO</a>
          </li>
          <li>
            <a>CURSOS Y TALLERES</a>
          </li>
          <li>
            <a>MARKETPLACE</a>
          </li>
          <li>
            <a>COTIZA TU EVENTO</a>
          </li>
          <li>
            <a>DONA ROPA Y ARTÍCULOS</a>
          </li>
        </ul>
        <a>ACCESO A PROVEEDORES</a>
      </div>
    </div>
  );
};

export default Nav;
