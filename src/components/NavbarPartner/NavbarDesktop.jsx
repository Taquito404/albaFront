import React from "react";
import NavbarStyles from "./styles/navbarpartner.module.scss";

const NavbarDesktop = () => {
  return (
    <div className="w-100 d-flex my-2">
      <div className="w-25 mr-3 ">
        <img
          src="https://picsum.photos/200/300?grayscale"
          alt="image-1"
          className={`${NavbarStyles.profilePicture}`}
        />
      </div>

      <div className="w-75">
        <div className="d-flex column justify-content-around">
          <p className="font-weight-bold font-italic d-flex flex-column justify-content-center">
            @User
          </p>
          <p className="mt-2"></p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
