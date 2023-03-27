import React from "react";
import { Link } from "react-router-dom";
import { HiComputerDesktop } from "react-icons/hi2";
import Styles from "./Service.module.css";
import image1 from "./Images/bulb-152381_960_720.png";
import image2 from "./Images/dropBox.png";
import image3 from "./Images/slackk.png";
import image4 from "./Images/flat-design-4731671_960_720.png";
import image5 from "./Images/glassdoor.png";
import image6 from "./Images/drive.png";
import image7 from "./Images/paypal-3384015__340.webp";
import image8 from "./Images/airtable33.png";
import image9 from "./Images/testyantra.jpg";
import { FcOnlineSupport } from "react-icons/fc";
import { FcPrivacy } from "react-icons/fc";
const Service = () => {
  return (
    <section className={Styles.mySection}>
      <article className={Styles.myArticle}>
        <div className={Styles.mainDiv}>
          <div className={Styles.leftSide}>
            <div className={Styles.div1}>
              <Link>
                <div className={Styles.buLb}>
                  <img src={image1} alt={image1} />
                </div>
              </Link>
            </div>
            <div className={Styles.div2}>
              <Link>
                <div className={Styles.dropBox}>
                  <img src={image2} alt={image2} />
                </div>
              </Link>
            </div>
            <div className={Styles.div3}>
              <Link>
                <div className={Styles.slaCk}>
                  <img src={image3} alt={image3} />
                </div>
              </Link>
            </div>
            <div className={Styles.div4}>
              <Link>
                <div className={Styles.bAg}>
                  <img src={image4} alt={image4} />
                </div>
              </Link>
            </div>
            <div className={Styles.div5}>
              <Link>
                <div className={Styles.glassDor}>
                  <img src={image5} alt={image5} />
                </div>
              </Link>
            </div>
            <div className={Styles.div6}>
              <Link>
                <div className={Styles.drIve}>
                  <img src={image6} alt={image6} />
                </div>
              </Link>
            </div>
            <div className={Styles.div7}>
              <Link>
                <div className={Styles.payPal}>
                  <img src={image7} alt={image7} />
                </div>
              </Link>
            </div>
            <div className={Styles.div8}>
              <Link>
                <div className={Styles.airTable}>
                  <img src={image8} alt={image8} />
                </div>
              </Link>
            </div>
            <div className={Styles.div9}>
              <Link>
                <div className={Styles.testYantra}>
                  <img src={image9} alt={image9} />
                </div>
              </Link>
            </div>
          </div>
          <div className={Styles.rightSide}>
            <div className={Styles.linkHead}>
              <Link>WHY CHOOSE US</Link>
            </div>
            <div className={Styles.Head}>
              <h1>
                Why choose our own <br /> IT service
              </h1>
            </div>
            <div className={Styles.conTentp}>
              <div className={Styles.paraIcon}>
                <div className={Styles.imgDiv}>
                  <FcOnlineSupport className={Styles.supPort} />
                </div>
                <div className={Styles.heading2}>
                  <Link>
                    <h2>Full Time Support</h2>
                  </Link>
                </div>
                <div className={Styles.para}>
                  <p>
                    The Full Time Support Officer Program Consists of Reserve
                    officers on active duty responsible
                  </p>
                </div>
              </div>
              <div className={Styles.paraIcon}>
                <div className={Styles.imgDiv}>
                  <FcPrivacy className={Styles.supPort} />
                </div>
                <div className={Styles.heading2}>
                  <Link>
                    <h2>Faster, Quality & Trusted</h2>
                  </Link>
                </div>
                <div className={Styles.para}>
                  <p>
                    The Full Time Support Officer Program Consists of Reserve
                    officers on active duty responsible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Service;
