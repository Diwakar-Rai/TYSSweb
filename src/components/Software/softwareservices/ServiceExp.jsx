import React from 'react'
import Style from "./_services.module.css"

import { TbPackages } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { GiCyberEye } from "react-icons/gi";
import { SiPreact } from "react-icons/si";
import { BsFillCloudFog2Fill } from "react-icons/bs";
const ServiceExp = () => {
  return (
    <div className={Style.servicesMain}>
      <h1>The services we provide</h1>
      <article className={Style.servicesBody}>
        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <TbPackages />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Product Engineering</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>
        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <BsFillCloudFog2Fill />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Cloud Solutions</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>
        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <MdManageAccounts />
          </section>
          <section className={Style.servicesHeader}>
            <h3>IT Management</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>
        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <IoMdAnalytics />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Data analytics</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>

        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <SiPreact />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Web development</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>
        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <BsFillCloudFog2Fill />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Cloud Solutions</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>

        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <GiCyberEye />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Cyber Security</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>
        <div className={Style.servicesSec}>
          <section className={Style.servicesIcon}>
            <BsFillCloudFog2Fill />
          </section>
          <section className={Style.servicesHeader}>
            <h3>Cloud Solutions</h3>
          </section>
          <section className={Style.servicesArrow}>
            <BsArrowRightShort />
          </section>
        </div>
      </article>
    </div>
  );
}

export default ServiceExp
