import React from "react";
import Styles from "./Footer.module.css";
import { MdPhoneInTalk } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdDialpad } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import tylogo from "./images/tylogo.png";
import { IoLocationOutline } from "react-icons/io5";

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

          <div className={Styles.mycardDiv1}>
            <div className={Styles.cardDiv1}>
              <div className={Styles.card1} id={Styles.cardBorder1}>
                <img src={tylogo} alt="footer logo"/>
                <div className={Styles.Address}>
                  <Link className={Styles.location}>
                    <IoLocationOutline />
                  </Link>
                  <p>#88, 3rd Floor, Brigade Chambers,</p>
                </div>
                <div className={Styles.mail}>
                  <Link className={Styles.mailId}>
                    <AiOutlineMail />
                  </Link>
                  <Link className={Styles.mail1}>
                    hello@testyantraglobal.com
                  </Link>
                </div>
                <div className={Styles.Linkedin}>
                  <Link>
                    <ImLinkedin2 />
                  </Link>
                  <Link>
                    <GrFacebookOption />
                  </Link>
                  <Link>
                    <IoLogoInstagram />
                  </Link>
                </div>
              </div>
              <div className={Styles.card1} id={Styles.cardBorder2}>
                <div className={Styles.cardHead}>
                  <h1>Services</h1>
                </div>
                <div>
                  <ul className={Styles.list}>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Software Development</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Software Testing</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Elevate – IT training services</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>IT consulting</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Education</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className={Styles.card1} id={Styles.cardBorder}>
                <div className={Styles.cardHead}>
                  <h1>Information</h1>
                </div>
                <div>
                  <ul className={Styles.list}>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>About Us</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Work With Us</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Contact</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Case Studies</Link>
                      </li>
                    </div>
                    <div className={Styles.cardList}>
                      <RxDotFilled className={Styles.cardDot} />
                      <li>
                        <Link>Media and Entertainment</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* lastfooter */}
        <div className={Styles.lastFooter}>
          <div className={Styles.footer}>
            <p>©2022 Test Yantra Global. All rights reserved</p>
            <div className={Styles.iconLast}>
              <Link>
                <IoChevronUp className={Styles.Onup} />
              </Link>
              <p>Go On Top</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;