import React from "react";
import Style from "./_software.module.css";
import softwareDev from "../assets/softwareDev.jpg";

import { AiFillFilePdf } from "react-icons/ai"
import { AiFillFileWord } from "react-icons/ai";
import { RiSettings2Line } from "react-icons/ri";
const SoftwareDevExp = () => {
  return (
    <div className={Style.softwareExp}>
      <section className={Style.upper}>
        <aside className={Style.softLeft}>
          <img src={softwareDev} alt="" />
        </aside>
        <aside className={Style.softRight}>
          <h3>Our Programmes</h3>
          <ul>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Front End Development
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Full Stack
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Mern Stack
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Mean Stack
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Full Stack Java
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Software Configuration
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Data Analysis
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <RiSettings2Line />
                </span>
                Data Science
              </a>
            </li>
            
          </ul>
        </aside>
      </section>
      <section className={Style.lower}>
        <aside className={Style.softLeft}>
          <h2>Best Software Development Plans</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            animi perferendis neque. Minima doloribus, quas ex dignissimos amet
            dolor ea velit praesentium facere est laudantium doloremque odio
            autem accusamus totam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dignissimos, doloribus. Iure ipsum distinctio
            maxime corporis dolorem asperiores rerum! Explicabo animi unde velit
            et doloribus dolore non cupiditate culpa, suscipit consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, sunt consequatur ad nulla iure at eum excepturi blanditiis iste similique. Officia sunt exercitationem omnis facere temporibus? Fugiat est nam in!
          </p>
        </aside>
        <aside className={Style.softRight}>
          <h3>Company Profile</h3>
          <article>
            <button className={Style.softDevButton}>
              <a href="#">
                <span>Download Pdf</span>
                <span>
                  <AiFillFilePdf />
                </span>
              </a>
            </button>
          </article>
          <article>
            <button className={Style.softDevButtonWord}>
              <a href="#">
                <span>Download Word File</span>
                <span>
                  <AiFillFileWord />
                </span>
              </a>
            </button>
          </article>
        </aside>
      </section>
    </div>
  );
};

export default SoftwareDevExp;
