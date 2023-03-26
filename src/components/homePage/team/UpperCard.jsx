import React from 'react'
import Style from "./_team.module.css"

import {GiRadarCrossSection} from "react-icons/gi"
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
const UpperCard = () => {
  return (
    <div className={Style.upperCard}>
      <section className={Style.cardContent}>
        <aside className={Style.cardIcon}>
          <GiRadarCrossSection />
        </aside>
        <aside className={Style.cardTitle}>
          <h3>Cross-Industry Expertise</h3>
        </aside>

        <article className={`${Style.dotContainer} ${Style.dot1}`}>
          <span></span>
          <span></span>
          <span></span>
        </article>
      </section>
      <section className={Style.cardContent}>
        <aside className={Style.cardIcon}>
          <BsMicrosoftTeams />
        </aside>
        <aside className={Style.cardTitle}>
          <h3>Expertise & Leadership</h3>
        </aside>

        <article className={`${Style.dotContainer} ${Style.dot2}`}>
          <span></span>
          <span></span>
          <span></span>
        </article>
      </section>
      <section className={Style.cardContent}>
        <aside className={Style.cardIcon}>
          <MdOutlineScreenSearchDesktop />
        </aside>
        <aside className={Style.cardTitle}>
          <h3>Dedicate IT Solution</h3>
        </aside>

        <article className={`${Style.dotContainer} ${Style.dot3}`}>
          <span></span>
          <span></span>
          <span></span>
        </article>
      </section>
    </div>
  );
}

export default UpperCard
