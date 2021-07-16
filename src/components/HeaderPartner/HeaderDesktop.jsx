import React from "react";
import Styles from "./styles/headerpartner.module.scss";
import Image from "next/image";
import AlbaImg from "../../assets/img/fert.png";

const HeaderDesktop = () => {
  return (
    <div
      className={`d-flex justify-content-center  justify-content overflow-visible ${Styles.header}`}
    >
      <h3 className={`${Styles.welcome}`}>¡BIENVENIDO PARTNER!</h3>
      <Image
        className={`${Styles.image}`}
        src={AlbaImg}
        height={50}
        width={50}
      />
    </div>
  );
};

export default HeaderDesktop;
