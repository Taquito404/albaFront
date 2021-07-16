import s from "./FreeCard.module.scss";

const FreeCard = () => {
  return (
    <div className={s.card}>
      <div className={s.frontSide}></div>
      <div className={s.backSide}>
        {" "}
        <h3>Incluye:</h3>
        <ul>
          <li>Acceso a cursos y talleres gratuitos. </li>
          <li>
            Acceso ilimitado al foro de apoyo y contención (PRÓXIMAMENTE).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FreeCard;
