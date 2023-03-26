import React from "react";
import ServicesCarousel from "./ServicesCarousel";
import Style from "./_services.module.css";
const Services = () => {
  return (
    <div className={Style.servicesMain}>
      <article className={Style.servicesBody}>
        <section className={Style.servicesLink}>
          <a href="#">our services</a>
        </section>
        <section className={Style.servicesheader}>
          <h2>IT solution to your business</h2>
        </section>
        <section className={Style.servicesCarousel}>
          <ServicesCarousel/>
        </section>
        <section className={Style.servicesButton}>
          <button>view all services</button>
        </section>
      </article>
    </div>
  );
};

export default Services;
