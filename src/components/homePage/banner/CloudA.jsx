import React from 'react'
import Style from "./_banner.module.css"

import {AiFillStar} from "react-icons/ai"
import { RiNotificationBadgeFill } from "react-icons/ri";
const CloudA = () => {
  return (
    <div className={Style.cloudA}>
      <section className={Style.cloudIcon}>
        <RiNotificationBadgeFill />
      </section>
      <section className={Style.cloudPara}>
        <aside>
          <p>100% business growth</p>
        </aside>
        <aside className={Style.cloudStar}>
          <span className={Style.starCloud}>
            <AiFillStar />
          </span>
          <span>4.9</span>
          <span>(1593reviews)</span>
        </aside>
      </section>
    </div>
  );
}

export default CloudA
