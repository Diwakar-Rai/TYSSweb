import React from "react";
import Style from "./_workflow.module.css";
import { Link } from "react-router-dom";
import { HiLightBulb } from "react-icons/hi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { MdDiversity2 } from "react-icons/md";
const Workflow = () => {
  return (
    <article className={Style.workflowMain}>
      <div className={Style.workflowBody}>
        <section className={Style.workflowLink}>
          <a href="#">our workflow</a>
        </section>
        <section className={Style.workflowHeader}>
          <h2 className={Style.animateCharacter}>Your product + our testing approach = Impactful business</h2>
        </section>
        <section className={Style.workflowProducts}>
          <Link to="/">
            <article className={Style.productContainer}>
              <section className={Style.workflowDots}>
                <span></span>
                <span></span>
                <span></span>
              </section>
              <aside className={Style.productIcon}>
                <div className={Style.lightBulb}>
                  <HiLightBulb />
                </div>
                <div>01</div>
              </aside>
              <aside className={Style.productHeader}>
                <h3>Managed testing</h3>
              </aside>
              <aside className={Style.productPara}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, molestiae expedita eum, quo alias a dolorem non.
                </p>
              </aside>
            </article>
          </Link>
          <Link to="/">
            <article className={Style.productContainer}>
              <section className={Style.workflowDots}>
                <span></span>
                <span></span>
                <span></span>
              </section>
              <aside className={Style.productIcon}>
                <div className={Style.magnify}>
                  <GiMagnifyingGlass />
                </div>
                <div>02</div>
              </aside>
              <aside className={Style.productHeader}>
                <h3>Work package</h3>
              </aside>
              <aside className={Style.productPara}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, molestiae expedita eum, quo alias a dolorem non.
                </p>
              </aside>
            </article>
          </Link>
          <Link to="/">
            <article className={Style.productContainer}>
              <section className={Style.workflowDots}>
                <span></span>
                <span></span>
                <span></span>
              </section>
              <aside className={Style.productIcon}>
                <div className={Style.graph}>
                  <GoGraph />
                </div>
                <div>03</div>
              </aside>
              <aside className={Style.productHeader}>
                <h3>Consulting</h3>
              </aside>
              <aside className={Style.productPara}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, molestiae expedita eum, quo alias a dolorem non.
                </p>
              </aside>
            </article>
          </Link>
          <Link to="/">
            <article className={Style.productContainer}>
              <aside className={Style.productIcon}>
                <div className={Style.diverse}>
                  <MdDiversity2 />
                </div>
                <div>04</div>
              </aside>
              <aside className={Style.productHeader}>
                <h3>Global delivery</h3>
              </aside>
              <aside className={Style.productPara}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, molestiae expedita eum, quo alias a dolorem non.
                </p>
              </aside>
            </article>
          </Link>
        </section>
      </div>
    </article>
  );
};

export default Workflow;
