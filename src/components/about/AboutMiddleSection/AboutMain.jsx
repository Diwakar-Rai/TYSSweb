import React from "react";
import { Link } from "react-router-dom";
import Styles from "./AboutMain.module.css";
import video from "./videos/video/videoplayback.mp4";
const AboutMain = () => {
  return (
    <div className={Styles.conTainer}>
      <div className={Styles.mainDiv}>
        <div className={Styles.firstDiv}>
          <div className={Styles.linkDiv}>
            <Link>
              <p>ABOUT US</p>
            </Link>
            <h1>
              We provide flexible IT <br /> services
            </h1>
          </div>
          <div className={Styles.conTent}>
            <p>
              With its humble beginnings in the early 2000’s helping customers{" "}
              <br />
              with software testing and training services, Test Yantra Global{" "}
              <br />
              has grown into a global conglomerate with subbrands under its{" "}
              <br />
              umbrella, offering a full suite of exceptional Digital <br />
              Transformation and IT services to its clients.
            </p>
          </div>
        </div>
        <div className={Styles.secondDiv}>
          <video src={video} controls></video>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
