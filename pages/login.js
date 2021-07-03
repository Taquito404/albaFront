import s from "../styles/Login.module.scss";
import Nav from "../src/components/navbarUser/index";
import Footer from "../src/components/footerUser";

const logIn = () => {
  return (
    <div className={s.background}>
      <Nav />
      <form className={s.form}>
        <label for="email">Correo electrónico</label>
        <input
          className={s.email}
          id="email"
          type="email"
          placeholder="micorreo@correo.com"
        />
        <label for="password">Contraseña</label>
        <input id="password" type="password" placeholder="**********" />
        <input className={s.entra} id="logIn" type="submit" value="ENTRA" />
        <input
          className={s.registrar}
          id="signIn"
          type="submit"
          value="REGÍSTRATE"
        />
      </form>
      <Footer />
    </div>
  );
};

export default logIn;
