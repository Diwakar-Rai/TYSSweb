import React from "react";
import { Link } from "react-router-dom";
import { GiStumpRegrowth } from "react-icons/gi";
import AboutMain from "../AboutMiddleSection/AboutMain";
import AboutUs from "../AboutUs/AboutUs";
import Styles from "./Mission.module.css";
import image1 from "./images1/dev5.avif";

const Mission = () => {
  return (
    <div>
      <AboutUs />
      <AboutMain />
      <div className={Styles.cardPurpose}>
        <div className={Styles.misDiv}>
          <div>
            <GiStumpRegrowth className={Styles.historyIcon} />
            <h1>Our Mission</h1>
          </div>
          <div>
            <p className={Styles.paraWidth}>
              Our mission is to be an IT firm par excellence that helps your
              company succeed in this fast-moving world. We help you to achieve
              business excellence by digitally transforming your business to
              stay ahead in the competition.
            </p>
          </div>
          <div className={Styles.about}>
            <h1>Our Purpose</h1>
            <p className={Styles.paraWidth}>
              Test Yantra Global’s purpose is to help organizations realize
              their business goals with efficient, cost effective and reliable
              software development, software testing and training services.
            </p>
          </div>
        </div>
        <div className={Styles.testYantra}>
          <h1>TESTYANTRA</h1>
        </div>
      </div>

      <div className={Styles.conTainer}>
        <div className={Styles.mainDiv}>
          <div className={Styles.firstDiv}>
            <div className={Styles.linkDiv}>
              <Link>
                <p>WHY CHOOSE US</p>
              </Link>
              <h1>
                Custom IT solutions
                <br />
                for your business
              </h1>
            </div>
            <div className={Styles.conTent}>
              <p>
                With its humble beginnings in the early 2000’s helping customers
                with software testing and training services, Test Yantra Global
                has grown into a global conglomerate with subbrands under its
                umbrella, offering a full suite of exceptional Digital
                Transformation and IT services to its clients.
              </p>
            </div>
          </div>
          <div className={Styles.secondDiv}>
            <img src={image1} alt={image1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
