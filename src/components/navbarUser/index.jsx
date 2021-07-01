import Image from "next/image";
import Usuario from "./img/USUARIO.png";
import s from "./Navbar.module.scss";
import Drop from "./dropdownMenuNav/drop";

const Nav = () => {
  return (
    <div>
      <div className={s.navTop}>
        <button className={s.btnLogo}></button>
        <h3 className={s.location}>Tu ubicación: ---</h3>
        <Drop className={s.drop} />
        <input id="search-input" type="search" />
        <button id="search" type="submit" />
        <div className={s.user}>
          <Image alt="" width={50} src={Usuario} />
          <h3>Hola, aaaaaa</h3>
        </div>
        <div className={s.exit}>
          <Image alt="" width={50} src={Usuario} />
          <h3>Cerrar sesión</h3>
        </div>
      </div>
      <div className={s.navBot}>
        <ul>
          <li>
            <a>DIRECTORIO</a>
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
