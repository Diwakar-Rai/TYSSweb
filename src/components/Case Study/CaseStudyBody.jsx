import React from 'react'
import Style from "./_caseStudy.module.css"
import { Link } from 'react-router-dom';

import app from "./assets/app.jpg"
import branding from "./assets/branding.jpg"
import cases from "./assets/case.jpg"
import crypto from "./assets/crypto.jpg"
import discussion from "./assets/discussion.jpg"
import licence from "./assets/licence.jpg"
import { BsArrowUpRightCircle } from "react-icons/bs"
const CaseStudyBody = () => {
  return (
      <div className={Style.caseStudyMain}>
          <section className={Style.caseStudyBody}>
              <h2>Our Recent Case Studies</h2>
              <article className={Style.caseStudyRow}>
                  <aside className={Style.caseCard}>
                      <div className={Style.caseCardHead}>
                          <section className={Style.caseHeading}>
                              <h3>App development</h3>
                          </section>
                          <section className={Style.caseLink}>
                              <Link to="/"><BsArrowUpRightCircle/></Link>
                          </section>
                      </div>
                      <div className={Style.caseCardPic}>
                          <img src={app} alt="" />
                      </div>
                  </aside>
                  <aside className={Style.caseCard}>
                      <div className={Style.caseCardHead}>
                          <section className={Style.caseHeading}>
                              <h3>Branding & Legacy</h3>
                          </section>
                          <section className={Style.caseLink}>
                              <Link to="/"><BsArrowUpRightCircle/></Link>
                          </section>
                      </div>
                      <div className={Style.caseCardPic}>
                          <img src={branding} alt="" />
                      </div>
                  </aside>
                  <aside className={Style.caseCard}>
                      <div className={Style.caseCardHead}>
                          <section className={Style.caseHeading}>
                              <h3>Recent developments</h3>
                          </section>
                          <section className={Style.caseLink}>
                              <Link to="/"><BsArrowUpRightCircle/></Link>
                          </section>
                      </div>
                      <div className={Style.caseCardPic}>
                          <img src={cases} alt="" />
                      </div>
                  </aside>
                  <aside className={Style.caseCard}>
                      <div className={Style.caseCardHead}>
                          <section className={Style.caseHeading}>
                              <h3>crypto currencies</h3>
                          </section>
                          <section className={Style.caseLink}>
                              <Link to="/"><BsArrowUpRightCircle/></Link>
                          </section>
                      </div>
                      <div className={Style.caseCardPic}>
                          <img src={crypto} alt="" />
                      </div>
                  </aside>
                  <aside className={Style.caseCard}>
                      <div className={Style.caseCardHead}>
                          <section className={Style.caseHeading}>
                              <h3>Effective Team Building</h3>
                          </section>
                          <section className={Style.caseLink}>
                              <Link to="/"><BsArrowUpRightCircle/></Link>
                          </section>
                      </div>
                      <div className={Style.caseCardPic}>
                          <img src={discussion} alt="" />
                      </div>
                  </aside>
                  <aside className={Style.caseCard}>
                      <div className={Style.caseCardHead}>
                          <section className={Style.caseHeading}>
                              <h3>Software Licence</h3>
                          </section>
                          <section className={Style.caseLink}>
                              <Link to="/"><BsArrowUpRightCircle/></Link>
                          </section>
                      </div>
                      <div className={Style.caseCardPic}>
                          <img src={licence} alt="" />
                      </div>
                  </aside>
              </article>
          </section>
      
    </div>
  )
}

export default CaseStudyBody
