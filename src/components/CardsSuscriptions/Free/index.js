import s from "./FreeCard.module.scss";
import Link from "next/link";

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
        <Link href="/login">
          <button>Ver</button>
        </Link>
      </div>
    </div>
  );
};

export default FreeCard;
