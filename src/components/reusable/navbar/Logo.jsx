import React from "react";
import logo from "./assets/tylogo.png";
import Style from "./_navbar.module.css";

import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={Style.logo} id="top">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
