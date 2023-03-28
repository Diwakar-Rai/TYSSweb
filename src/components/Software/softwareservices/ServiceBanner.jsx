import React from 'react'
import Style from "./_services.module.css"
import service from "./assets/service.jpg"

import { BiLoaderCircle } from "react-icons/bi";
import { BiRadioCircle } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import { IoAtCircleOutline } from "react-icons/io5";
const ServiceBanner = () => {
  return (
    <div className={Style.banner}>
      <section>
        <img src={service} alt="" />
      </section>
      <section className={Style.bannerPara}>
        <h1>Our Services</h1>
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
}

export default ServiceBanner
