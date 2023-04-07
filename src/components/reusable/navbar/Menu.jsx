import React, { useState, useEffect, useRef } from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Style from "./_navbar.module.css";
import { Link } from "react-router-dom";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { BsWrenchAdjustable } from "react-icons/bs";
import { FcConferenceCall } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";

const Menu = () => {
  let [page, openPage] = useState(false);
  let [about, openAbout] = useState(false);

  let clickPageRef = useRef(null);
  let clickAboutRef = useRef(null);
  let pageRef = useRef(null);
  let aboutRef = useRef(null);

  useEffect(() => {
    let handler = e => {
      e.preventDefault();
      e.stopPropagation();
      if (!pageRef.current.contains(e.target)) {
        openPage(false);
      }
      if (!aboutRef.current.contains(e.target)) {
        openAbout(false);
      }

      // if (!clickPageRef.current) {
      //   openPage(true);
      // }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let handleShow = e => {
    e.preventDefault();
    e.stopPropagation();
    openPage(false);
    openAbout(false)
  };
  return (
    <div id={Style.menuContainer}>
      <ul className={Style.mainList}>
        <li>
          <Link to="/">
            <span></span>
            <span>Home</span>
            {/* <span>
              <BiChevronDown />
            </span> */}
          </Link>
        </li>
        <li
          ref={pageRef}
          onClick={() => {
            openPage(!page);
          }}
        >
          <a href="#">
            <span></span>
            <span>Pages</span>
            <span className={Style.arrows}>
              {page ? <BiChevronUp /> : <BiChevronDown />}
            </span>
          </a>
          {/* className=
          {(Style.dropDiv = " " + (open ? Style.active : Style.inactive))} */}
          {/* className={Style.dropDiv} */}
          <div
            ref={clickPageRef}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              openPage(true);
            }}
            className={
              Style.dropDiv + " " + (page ? Style.active : Style.inactive)
            }
          >
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <MdOutlineDeveloperMode />
                </span>
                <Link to="/softwareDev">Software Development</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <BsWrenchAdjustable />
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
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <MdOutlineDeveloperMode />
                </span>
                <Link to="/softwareDev">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <BsWrenchAdjustable />
                </span>

                <Link to="/softwareTest">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/softwareTraining">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcServices />
                </span>
                <Link to="/softwareService">Lorem Ipsum</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <MdOutlineDeveloperMode />
                </span>
                <Link to="/softwareDev">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <BsWrenchAdjustable />
                </span>

                <Link to="/softwareTest">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/softwareTraining">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcServices />
                </span>
                <Link to="/softwareService">Lorem Ipsum</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <MdOutlineDeveloperMode />
                </span>
                <Link to="/softwareDev">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <BsWrenchAdjustable />
                </span>

                <Link to="/softwareTest">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/softwareTraining">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcServices />
                </span>
                <Link to="/softwareService">Lorem Ipsum</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <MdOutlineDeveloperMode />
                </span>
                <Link to="/softwareDev">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <BsWrenchAdjustable />
                </span>

                <Link to="/softwareTest">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/softwareTraining">Lorem Ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcServices />
                </span>
                <Link to="/softwareService">Lorem Ipsum</Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          ref={aboutRef}
          onClick={() => {
            openAbout(!about);
          }}
        >
          <a href="#">
            <span></span>
            <span>About Us</span>
            <span className={Style.arrows}>
              {about ? <BiChevronUp /> : <BiChevronDown />}
            </span>
          </a>
          <div 
            onClick={e => { e.preventDefault(); e.stopPropagation(); openAbout(true)}}
            ref={clickAboutRef}
            className={
              Style.dropDiv + " " + (about ? Style.active : Style.inactive)
            }
          >
            <ul onClick={handleShow}>
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
                <Link to="/career">Careers</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <FcVoicePresentation />
                </span>
                <Link to="/aboutUs">lorem ipsum</Link>
              </li>

              <li>
                <span className={Style.dropIcon}>
                  <FcEnteringHeavenAlive />
                </span>
                <Link to="/mission">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/career">lorem ipsum</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <FcVoicePresentation />
                </span>
                <Link to="/aboutUs">lorem ipsum</Link>
              </li>

              <li>
                <span className={Style.dropIcon}>
                  <FcEnteringHeavenAlive />
                </span>
                <Link to="/mission">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/career">lorem ipsum</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <FcVoicePresentation />
                </span>
                <Link to="/aboutUs">lorem ipsum</Link>
              </li>

              <li>
                <span className={Style.dropIcon}>
                  <FcEnteringHeavenAlive />
                </span>
                <Link to="/mission">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/career">lorem ipsum</Link>
              </li>
            </ul>
            <ul onClick={handleShow}>
              <li>
                <span className={Style.dropIcon}>
                  <FcVoicePresentation />
                </span>
                <Link to="/aboutUs">lorem ipsum</Link>
              </li>

              <li>
                <span className={Style.dropIcon}>
                  <FcEnteringHeavenAlive />
                </span>
                <Link to="/mission">lorem ipsum</Link>
              </li>
              <li>
                <span className={Style.dropIcon}>
                  <FcConferenceCall />
                </span>
                <Link to="/career">lorem ipsum</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/caseStudy">
            <span></span>
            <span>Case Studies</span>
            {/* <span>
              <BiChevronDown />
            </span> */}
          </Link>
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
