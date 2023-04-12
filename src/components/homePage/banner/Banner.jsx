import React from "react";
import VideoPlay from "./VideoPlay";
import BannerSlider from "./BannerSlider";
import Style from "./_banner.module.css";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import ParaSlider from "./ParaSlider";

// import BannerPic from "./BannerPic";
// import CloudA from "./CloudA";
// import CloudB from "./CloudB";
// import SocialLink from "./SocialLink";
// import Rectangle from './Rectangle';

const Banner = () => {
  let SliderData = [{ image: image1 }, { image: image2 }, { image: image3 }];
  let ParaData = [
    { image: "Quality engineering, re-defined." },
    { image: "Maximizing your business performance" },
    { image: "Enable quality through the power of AI" },
  ];
  return (
    <div className={Style.bannerBody}>
      <section className={Style.bannerContainer}>
        <aside className={Style.bannerContainerFirstChild}>
          <VideoPlay />
          {/* <SocialLink /> */}
        </aside>
        {/* <aside className={Style.bannerContainerLastChild}>
          <BannerPic />
          <CloudA />
          <CloudB />
        </aside> */}
        {/* <aside className={Style.rectangleBundle}>
          <Rectangle />
        </aside> */}
        <aside className={Style.bannerContainerSecondChild}>
          <article>
            <BannerSlider slides={SliderData} />
          </article>
        </aside>
        <aside className={Style.bannerContainerThirdChild}>
          <article>
            <ParaSlider para={ParaData} />
          </article>
        </aside>
      </section>
    </div>
  );
};

export default Banner;
