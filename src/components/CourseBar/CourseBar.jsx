import react from "react";
import RoundButton from "../RoundButton/RoundButton";
import PillButtonTrans from "../PillButtonTrans/PillButtonTrans"
import Search from "../Search/Search";
import DropDown from '../dropDownMenu/dropDown'
import Styles from "../../../styles/Suggested.module.scss";

const CourseBar = () => {
  return (
    <div className={`${Styles.courseBarContainer}`}>
      <div className={`${Styles.courseBarLeft}`}>
        {/* <RoundButton /> */}
        {/* <DropDown/> */}
        <Search placeholder="Buscar" />
        <RoundButton />
      </div>
      <div className={`${Styles.courseBarRight}`}>
        <PillButtonTrans />
      </div>
    </div>
  );
};

export default CourseBar;
