import React from "react";
import Image from "next/image";
import CoverImg from "../../assets/img/CoverImageA.png";
import Styles from "./styles/cover.module.scss";

const CoverSuggestedCourses = () => {
  return (
    <div className={`${Styles.cover}`}>
      <Image src={CoverImg} layout="fill" objectFit="cover" quality={100} />
    </div>
  );
};

export default CoverSuggestedCourses;
