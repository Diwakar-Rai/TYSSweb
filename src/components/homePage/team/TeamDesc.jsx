import React from "react";
import { AiFillStar } from "react-icons/ai";
import Style from "./_team.module.css";
const TeamDesc = () => {
  return (
    <div className={Style.teamDesc}>
      <section className={Style.descLink}>
        <a href="#">Who we are</a>
      </section>
      <section className={Style.descHeader}>
        <h2>We're a dynamic team of creative people</h2>
      </section>
      <section className={Style.descPara}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          sequi similique ipsa delectus? Ea suscipit ratione sit nisi tempore.
        </p>
      </section>
      <section className={Style.desList}>
        <ul>
          <li>
            <span>
              <AiFillStar />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </li>
          <li>
            <span>
              <AiFillStar />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </li>
          <li>
            <span>
              <AiFillStar />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </li>
          <li>
            <span>
              <AiFillStar />
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </li>
        </ul>
      </section>
      <section className={Style.descButton}>
        <button>More about us</button>
      </section>
    </div>
  );
};

export default TeamDesc;
