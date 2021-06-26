import s from "../styles/Login.module.scss";

const logIn = () => {
  return (
    <div className={s.background}>
      <form className={s.form}>
        <label className={s.label} for="email">
          Correo electrónico
        </label>
        <input id="email" type="email" />
        <label for="password">Contraseña</label>
        <input id="password" type="password" />
        <input className={s.entra} id="logIn" type="submit" value="ENTRA" />
        <input id="signIn" type="submit" value="Regístrate" />
      </form>
    </div>
  );
};

export default logIn;
