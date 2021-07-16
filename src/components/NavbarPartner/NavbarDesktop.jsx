import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarStyles from "./styles/navbarpartner.module.scss";

export default function NavbarDesktop({ profile }) {
  return (
    <div className="w-100 d-flex my-2">
      <div className="w-25 mr-3 ">
        {/* <img
          // src={curso.imgUrl}
          alt="image-1"
          className={`${NavbarStyles.profilePicture}`}
        /> */}
      </div>

      <div className="w-75">
        <div className="d-flex column justify-content-around">
          <p className="font-weight-bold font-italic d-flex flex-column justify-content-center">
            {profile.name} {profile.lastName}
          </p>
          <p className="mt-2"></p>
        </div>
      </div>
    </div>
  );
}
