import React from "react";
import { FaFacebookF } from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import { BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

import Style from "./_banner.module.css";

const SocialLink = () => {
  return (
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
  );
};

export default SocialLink;
