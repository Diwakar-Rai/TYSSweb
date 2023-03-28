import React from "react";
import Style from "./_softwareTesting.module.css";
import testing from "../assets/testing.jpg"
import { BiLoaderCircle } from "react-icons/bi";
import { BiRadioCircle } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import { IoAtCircleOutline } from "react-icons/io5";
const SoftwareTestBanner = () => {
  return (
    <div className={Style.banner}>
      <section>
        <img src={testing} alt="" />
      </section>
      <section className={Style.bannerPara}>
        <h1>Software Testing</h1>
        <p>
          Test Yantra offers a suite of software testing tools, methodology, and
          resources to improve the quality assurance of your applications. Our
          application, automation, performance, and security testing services
          provide the confidence to digitally transformation your business.
        </p>
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

export default SoftwareTestBanner;
