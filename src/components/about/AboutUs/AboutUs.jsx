import React from "react";
import Styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";
import { SiCircle } from "react-icons/si";
import { CgShapeHalfCircle } from "react-icons/cg";
import { VscCircleSmall } from "react-icons/vsc";
import image1 from "./images1/dev4.avif";
const AboutUs = () => {
  return (
    <section>
      <div className={Styles.mainDiv}>
        <div className={Styles.aboutSection}>
          <div className={Styles.Head}>
            <FaCircleNotch className={Styles.icon1} />
            <FaCircleNotch className={Styles.icon2} />
            <SiCircle className={Styles.icon3} />
            <SiCircle className={Styles.icon4} />
            <CgShapeHalfCircle className={Styles.icon5} />
            <h1>About TestYantra</h1>
          </div>

          <div className={Styles.aboutLink}>
            <div className={Styles.tyLink}>
              <p>TESTYANTRA</p>
            </div>
            <div className={Styles.tyLink}>
              <BsArrowRightShort className={Styles.RightArrow} />
            </div>
            <div className={Styles.tyLink}>
              <Link>ABOUT US</Link>
            </div>
          </div>
        </div>

        <div className={Styles.imgHead}>
          <img src={image1} alt="about Image1" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
