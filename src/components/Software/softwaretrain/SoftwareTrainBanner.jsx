import React from "react";
import Style from "./_softwareTrain.module.css";
import training from "../assets/training.jpg";

import { BiLoaderCircle } from "react-icons/bi";
import { BiRadioCircle } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import { IoAtCircleOutline } from "react-icons/io5";
const SoftwareTrainBanner = () => {
  return (
    <div className={Style.banner}>
      <section>
        <h1>Software Training</h1>
        <p>
          Our team of professional educators and world-class remote learning
          tools, technology, and training facilities provide a competitive edge
          for you and your business.
        </p>
      </section>
      <section>
        <img src={training} alt="" />
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

export default SoftwareTrainBanner;
