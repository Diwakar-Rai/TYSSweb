import React from "react";
import BannerPic from "./BannerPic";
import CloudA from "./CloudA";
import CloudB from "./CloudB";
import SocialLink from "./SocialLink";
import VideoPlay from "./VideoPlay";

import Style from "./_banner.module.css";
import Rectangle from './Rectangle';
const Banner = () => {
  return (
    <div className={Style.bannerBody}>
      <section className={Style.bannerContainer}>
        <aside className={Style.bannerContainerFirstChild}>
          <VideoPlay />
          <SocialLink />
        </aside>
        <aside className={Style.bannerContainerLastChild}>
          <BannerPic />
          <CloudA />
          <CloudB />
        </aside>
        <aside className={Style.rectangleBundle}>
          <Rectangle />
        </aside>
      </section>
    </div>
  );
};

export default Banner;
