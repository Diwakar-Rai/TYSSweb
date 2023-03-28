import React from "react";
import Styles from "./Footer.module.css";
import { MdPhoneInTalk } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdDialpad } from "react-icons/md";
import { CgPhone } from "react-icons/cg";


import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={Styles.mySection}>
      <article className={Styles.myArticle}>
        <div className={Styles.myFooterDiv}>
          <div className={Styles.mycardDiv}>
            <div className={Styles.cardDiv}>
              <div className={Styles.card}>
                <Link>
                  <MdPhoneInTalk className={Styles.phone} />
                </Link>
                <Link>
                  <h6 className={Styles.freeConsultation}>FREE CONSULTATION</h6>
                </Link>
                <p>
                  Schedule a free <br /> Consultation With Our <br /> Specialist
                </p>
                <div className={Styles.scheduleBtn}>
                  <Link>SCHEDULE NOW</Link>
                </div>
              </div>
              <div className={Styles.card}>
                <Link>
                  <FaTelegramPlane className={Styles.telegraphPlane} />
                </Link>
                <Link>
                  <h6 className={Styles.request}>REQUEST</h6>
                </Link>
                <p>
                  Bengin Your Adventure
                  <br />
                  With Experienced
                  <br /> Professionals
                </p>
                <div className={Styles.requestBtn}>
                  <Link>SEND REQUEST</Link>
                </div>
              </div>
              <div className={Styles.card}>
                <Link>
                  <MdDialpad className={Styles.Dialpad} />
                </Link>
                <Link>
                  <h6 className={Styles.HelpDesk}>HELP DESK</h6>
                </Link>
                <p>
                  Do You Have Question or <br /> Want More Information <br />
                  Call Now
                </p>
                <div className={Styles.lastDivBtn}>
                  <div className={Styles.callBtn}>
                    <Link className={Styles.cgPhone}>
                      <CgPhone />
                    </Link>
                  </div>
                  <p>865-588-4687</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
