import React from "react";

import apple from "./assets/apple.jpg";
import building from "./assets/building.jpg";
import coffee from "./assets/coffee.jpg";
import meeting from "./assets/meeting.jpg";

import { BsArrowUpRightCircle } from "react-icons/bs";
import Style from "./_caseStudies.module.css";
const CaseStudyRight = () => {
  return (
    <div className={Style.studyRight}>
      <section className={Style.caseStudyPic}>
        <figure className={Style.firstPicFigure}>
          <img src={meeting} alt="" className={Style.firstPic} />
        </figure>
        <article className={Style.casePicSec}>
          <aside>
            <h3>Backup Blockchain & Crypto</h3>
            <a href="#">data security</a>
          </aside>
          <aside>
            <BsArrowUpRightCircle />
          </aside>
        </article>
      </section>
      <section className={Style.caseStudyPic}>
        <figure>
          <img src={coffee} alt="" />
        </figure>
      </section>
      <section className={Style.caseStudyPic}>
        <figure>
          <img src={apple} alt="" />
        </figure>
      </section>
      <section className={Style.caseStudyPic}>
        <figure>
          <img src={building} alt="" />
        </figure>
      </section>
    </div>
  );
};

export default CaseStudyRight;
