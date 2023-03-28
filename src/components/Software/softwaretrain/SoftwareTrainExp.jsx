import React from "react";
import {Link} from "react-router-dom"
import Style from './_softwareTrain.module.css'
import {BsFillBookmarkCheckFill} from "react-icons/bs"
const SoftwareTrainExp = () => {
  return (
    <div className={Style.trainingMain}>
      
      <article className={Style.trainingBody}>
        <h1>Our Training Plans</h1>
        <section className={Style.trainingContent}>
          <aside className={Style.trainLeft}>
            <h3>Basic</h3>
          </aside>
          <aside className={Style.trainMiddle}>
            <div className={Style.middleLeft}>
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>SEO & Branding</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Digital Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Data Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Data Science</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={Style.middleRight}>
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Testing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Development</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Deployment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Analytics & Reseach</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className={Style.trainRight}>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </aside>
        </section>
        <section className={Style.trainingContent}>
          <aside className={Style.trainLeft}>
            <h3>Intermediate</h3>
          </aside>
          <aside className={Style.trainMiddle}>
            <div className={Style.middleLeft}>
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>SEO & Branding</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Digital Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Data Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Data Science</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={Style.middleRight}>
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Testing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Development</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Deployment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Analytics & Reseach</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className={Style.trainRight}>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </aside>
        </section>
        <section className={Style.trainingContent}>
          <aside className={Style.trainLeft}>
            <h3>Advanced</h3>
          </aside>
          <aside className={Style.trainMiddle}>
            <div className={Style.middleLeft}>
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>SEO & Branding</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Digital Marketing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Data Analytics</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Data Science</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={Style.middleRight}>
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Testing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Development</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Software Deployment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <BsFillBookmarkCheckFill />
                    </span>
                    <span>Analytics & Reseach</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <aside className={Style.trainRight}>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </aside>
        </section>
      </article>
    </div>
  );
};

export default SoftwareTrainExp;
