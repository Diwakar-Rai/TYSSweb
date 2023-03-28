import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Style from "./_navbar.module.css";
import { Link } from "react-router-dom";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { MdEventAvailable } from "react-icons/md";
const Menu = () => {
  return (
    <div id={Style.menuContainer}>
      <ul>
        <li>
          <Link to="/">
            <span></span>
            <span>Home</span>
            <span>
              <BiChevronDown />
            </span>
          </Link>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Pages</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
          <div className={Style.dropDiv}>
            <ul>
              <li>
                <span className={Style.dropIcon}>
                  <MdOutlineDeveloperMode />
                </span>
                <Link to="/softwareDev">Software Development</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcSupport />
                </span>

                <Link to="/softwareTest">Software Testing</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/softwareTraining">Elevate-IT Training</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcServices />
                </span>
                <Link to="/softwareService">IT Services</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>About Us</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
          <div className={Style.dropDiv}>
            <ul>
              <li>
                <span className={Style.dropIcon}>
                  <FcVoicePresentation />
                </span>
                <Link to="/aboutUs">About Us</Link>
              </li>
              {/* <li>
                <span className={Style.dropIcon}>
                  <FcIdea />
                </span>
                <a href="#">Our Purpose </a>
              </li> */}
              <li>
                <span className={Style.dropIcon}>
                  <FcEnteringHeavenAlive />
                </span>
                <Link to="/mission">Our Mission</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Case Studies</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
          <div className={Style.dropDiv}>
            <ul>
              <li>
                <span className={Style.dropIcon}>
                  <MdEventAvailable />
                </span>
                <a href="#">Case Study 1</a>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <MdEventAvailable />
                </span>
                <a href="#">Case Study 2</a>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <MdEventAvailable />
                </span>
                <a href="#">Case Study 3</a>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <MdEventAvailable />
                </span>
                <a href="#">Case Study 4</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/contact">
            <span></span>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <aside>
        <button>Free Quote</button>
      </aside>
    </div>
  );
};

export default Menu;
