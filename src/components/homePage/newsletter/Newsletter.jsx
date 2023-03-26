import React from "react";
import Style from "./_newsletter.module.css";
const Newsletter = () => {
  return (
    <div className={Style.newsletterMain}>
      <article className={Style.newsletterBody}>
        <aside className={Style.newsFakeContainer}>
          <section className={Style.newsletterPara}>
            <h4>Newsletter</h4>
            <p>Subscribe to our free newsletter to receive latest news</p>
          </section>
          <section className={Style.newsletterEmail}>
            <input type="email" placeholder="Enter Your Email Address" />
            <button>Newsletter</button>
          </section>
        </aside>
        <aside className={Style.rectangleRight}>
          <div></div>
          <div></div>
        </aside>
        <aside className={Style.rectangleLeft}>
          <div></div>
          <div></div>
        </aside>
      </article>
    </div>
  );
};

export default Newsletter;
