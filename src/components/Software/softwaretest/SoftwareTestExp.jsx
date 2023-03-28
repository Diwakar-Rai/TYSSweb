import React from "react";
import { Link } from "react-router-dom";

import Style from "./_softwareTesting.module.css";
import softTest from "../assets/softTest.jpg"
import {GiFlexibleStar} from "react-icons/gi"
import { MdManageAccounts } from "react-icons/md";
import { GiTimeTrap } from "react-icons/gi";
import { FaStopwatch } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
const SoftwareTestExp = () => {
  return (
    <div className={Style.softwareExp}>
      <article>
        <h2>Explore and Audit our Services</h2>
        <section className={Style.upper}>
          <article>
            <aside>
              <GiFlexibleStar />
            </aside>
            <aside>
              <a href="#">Top Flexibility</a>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nam similique nihil at facilis.
              </p>
            </aside>
          </article>

          <article>
            <aside>
              <MdManageAccounts />
            </aside>
            <aside>
              <a href="#">Management</a>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nam similique nihil at facilis.
              </p>
            </aside>
          </article>

          <article>
            <aside>
              <GiTimeTrap />
            </aside>
            <aside>
              <a href="#">Time Saving</a>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nam similique nihil at facilis.
              </p>
            </aside>
          </article>
          <article>
            <aside>
              <FaStopwatch />
            </aside>
            <aside>
              <a href="#">Fast Results</a>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae nam similique nihil at facilis.
              </p>
            </aside>
          </article>
        </section>
        <section className={Style.lower}>
          <aside className={Style.softLeft}>
            <img src={softTest} alt="" />
          </aside>
          <aside className={Style.softRight}>
            <h2>Best Software Development Plans</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              animi perferendis neque. Minima doloribus, quas ex dignissimos
              amet dolor ea velit praesentium facere est laudantium doloremque
              odio autem accusamus totam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Dignissimos, doloribus. Iure ipsum
              distinctio maxime corporis dolorem asperiores rerum! Explicabo
              animi unde velit et doloribus dolore non cupiditate culpa,
              suscipit consequatur. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Illo, sunt consequatur ad nulla iure at eum
              excepturi blanditiis iste similique. Officia sunt exercitationem
              omnis facere temporibus? Fugiat est nam in!
            </p>

            <button>
              <Link to="/contact">
                <span>contact us</span> <span><BsArrowRightCircle/></span>{" "}
              </Link>
            </button>
          </aside>
        </section>
      </article>
    </div>
  );
};

export default SoftwareTestExp;
