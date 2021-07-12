import react from "react";
import RoundButton from "../RoundButton/RoundButton";
import Search from "../Search/Search";
import Styles from "../../../styles/Suggested.module.scss";

const CourseBar = () => {
  return (
    <div className={`${Styles.courseBarContainer}`}>
      <div className={`${Styles.courseBarLeft}`}>
        <RoundButton />
        <Search placeholder="Buscar" />
        <RoundButton />
      </div>
      <div className={`${Styles.courseBarRight}`}>
        <RoundButton />
      </div>
    </div>
  );
};

export default CourseBar;
