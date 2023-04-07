import React from 'react'
import Style from "./_contact.module.css"
import contact from "./assets/contact.jpg"

import { BiLoaderCircle } from "react-icons/bi";
import { BiRadioCircle } from "react-icons/bi";
import { FaCircleNotch } from "react-icons/fa";
import { IoAtCircleOutline } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { Link } from 'react-router-dom';

const ContactBanner = () => {
  return (
    <div className={Style.banner}>
      <section className={Style.contactPara}>
        <h1>Discover what we are proud of</h1>
        <p>
          Our team of Software Design and Development Engineers provide a
          variety of solutions that elevate your business to the next level.
        </p>
        <button><Link to="/">Get started</Link></button>
      </section>
      <section>
        <img src={contact} alt="" />
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

      <div className={Style.social}>
        <section className={Style.socialChild}>
          <a href="#">
            <span className={Style.facebook}>
              <FaFacebookF />
            </span>
            <span>facebook</span>
          </a>
        </section>
        <section className={Style.socialChild}>
          <a href="#">
            <span className={Style.youtube}>
              <AiFillYoutube />
            </span>
            <span>youtube</span>
          </a>
        </section>
        <section className={Style.socialChild}>
          <a href="#">
            <span className={Style.twitter}>
              <BsTwitter />
            </span>
            <span>twitter</span>
          </a>
        </section>
        <section className={Style.socialChild}>
          <a href="#">
            <span className={Style.linkedin}>
              <GrLinkedin />
            </span>
            <span>linkedin</span>
          </a>
        </section>
      </div>
    </div>
  );
}

export default ContactBanner
