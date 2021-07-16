import s from "./ProCard.module.scss";
import Link from "next/link";

const ProCard = () => {
  return (
    <div className={s.card}>
      <div className={s.frontSide}></div>
      <div className={s.backSide}>
        <h3>Incluye:</h3>
        <ul>
          <li>Acceso a cursos y talleres gratuitos. </li>
          <li>Dos cursos o talleres mensuales a elegir.</li>
          <li>20% de descuento sobre los cursos adicionales (PRÓXIMAMENTE).</li>
          <li>Descuento de 50 pesos al mes en envíos (PRÓXIMAMENTE). </li>
          <li>
            Acceso ilimitado al foro de apoyo y contención (PRÓXIMAMENTE).
          </li>
        </ul>
        <h3>$349.00</h3>
        <Link href="/login">
          <button>Ver</button>
        </Link>
      </div>
    </div>
  );
};

export default ProCard;
