import React from "react";
import Style from "./_newFooter.module.css";
import tylogo from "./images/tylogo.png";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
const NewFooterBottom = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={Style.bottomFooterMain}>
      <section className={`${Style.bottomFooterContainer} d-flex`}>
        <article className={Style.bfLogo}>
          <img src={tylogo} alt="" />
        </article>
        <article className={`${Style.bfSocial} d-flex`}>
          <section className={Style.socialChild}>
            <Link href="#">
              <span className={Style.facebook}>
                <FaFacebookF />
              </span>
            </Link>
          </section>
          <section className={Style.socialChild}>
            <Link href="#">
              <span className={Style.youtube}>
                <AiFillYoutube />
              </span>
            </Link>
          </section>
          <section className={Style.socialChild}>
            <Link href="#">
              <span className={Style.twitter}>
                <BsTwitter />
              </span>
            </Link>
          </section>
          <section className={Style.socialChild}>
            <Link href="#">
              <span className={Style.linkedin}>
                <GrLinkedin />
              </span>
            </Link>
          </section>
        </article>
        <article className={Style.bfPara}>
          <p>2023 ©️TestYantra Software Solutions</p>
        </article>
        <article className={Style.goto}>
          <p onClick={handleScrollToTop}>Go To Top</p>
        </article>
      </section>
    </div>
  );
};

export default NewFooterBottom;
