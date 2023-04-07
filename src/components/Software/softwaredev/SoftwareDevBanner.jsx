import React from "react";
import Style from "./_software.module.css";
import Software from "../assets/development.jpg";

import { BiLoaderCircle, BiRadioCircle } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import { IoAtCircleOutline } from "react-icons/io5";
const SoftwareDevBanner = () => {
  return (
    <div className={Style.banner}>
      <section>
        <h1>Software Development</h1>
        <p>
          Our team of Software Design and Development Engineers provide a
          variety of solutions that elevate your business to the next level.
        </p>
      </section>
      <section>
        <img src={Software} alt="" />
      </section>
      <aside className={Style.firstIcon}>
        <BiLoaderCircle />
      </aside>
      <aside className={Style.secondIcon}>
        <BiRadioCircle />
      </aside>
      <aside className={Style.thirdIcon}>
        <FaCircleNotch />
      </aside>
      <aside className={Style.fourthIcon}>
        <IoAtCircleOutline />
      </aside>
    </div>
  );
};

export default SoftwareDevBanner;
