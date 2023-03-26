import React from "react";
import Style from "./_banner.module.css";

import { AiFillStar } from "react-icons/ai";
const CloudB = () => {
  return (
    <div className={Style.cloudB}>
      <section className={Style.cloudPara}>
        <aside>
          <p>1,000,000 Happy Customers</p>
        </aside>
        <aside className={Style.cloudStar}>
          <span className={Style.starCloud}>
            <AiFillStar />
          </span>
          <span>4.9</span>
          <span>(15k reviews)</span>
        </aside>
      </section>
    </div>
  );
};

export default CloudB;
