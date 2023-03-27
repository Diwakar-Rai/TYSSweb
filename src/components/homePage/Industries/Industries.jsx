import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import Styles1 from "./Industries.module.css";
import { Link } from "react-router-dom";
const Industries = () => {
  return (
    <section className={Styles1.mySection}>
      <article className={Styles1.myArticle}>
        <div className={Styles1.mainDiv}>
          <div className={Styles1.head}>
            <Link>WE SERVE ALL INDUSTRIES</Link>
          </div>
          <div className={Styles1.secondDiv}>
            <h1>Top Industries</h1>
          </div>

          <div className={Styles1.icOn}>
            <div className={Styles1.iconList}>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.airPlane}>
                    <GiCommercialAirplane className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Travel & Tourism</div>
                </Link>
              </div>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.bankIng}>
                    <BsBank2 className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Banking & Finance</div>
                </Link>
              </div>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.meDia}>
                    <MdSlowMotionVideo className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Media & Entertainment</div>
                </Link>
              </div>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.hoTel}>
                    <FaHotel className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Hotels & Restaurant</div>
                </Link>
              </div>
            </div>
          </div>

          <div className={Styles1.icOn1}>
            <div className={Styles1.iconList}>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.healTHcare}>
                    <MdHealthAndSafety className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Healthcare Solution</div>
                </Link>
              </div>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.learNing}>
                    <FaBookReader className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Elearning & Education</div>
                </Link>
              </div>
              <div className={Styles1.travelDiv}>
                <Link>
                  <div className={Styles1.ecommErce}>
                    <HiComputerDesktop className={Styles1.models} />
                  </div>
                  <div className={Styles1.conTent}>Ecommerce & Development</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Industries;
