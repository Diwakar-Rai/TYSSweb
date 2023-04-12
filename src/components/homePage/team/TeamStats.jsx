import React from "react";
import Style from "./_team.module.css";
import { Link } from "react-router-dom";

const TeamStats = () => {
  return (
    <div className={Style.statsMain}>
      <div className={Style.statsOverlay}></div>
      <section className={Style.statsContainer}>
        <aside className={Style.statUpper}>
          <article className={Style.statNumber}>
            <p>10000</p>
            <p>Total employee count</p>
          </article>
          <article className={Style.statNumber}>
            <p>10000</p>
            <p>Total clients count</p>
          </article>
          <article className={Style.statNumber}>
            <p>10000</p>
            <p>Total projects</p>
          </article>
        </aside>
        <aside className={Style.statMiddle}>
          <span></span>
          <span>
            <p>Driving Excellence</p>
          </span>
          <span></span>
        </aside>
        <aside className={Style.statLower}>
          <article className={Style.statNumber}>
            <p>10000</p>
            <p>Total application tested</p>
          </article>
          <article className={Style.statNumber}>
            <p>10000</p>
            <p>Total automation scripts developed</p>
          </article>
        </aside>
        <aside className={Style.statButton}>
          <button>
            <Link to="/">Find Out More</Link>
          </button>
        </aside>
      </section>
    </div>
  );
};

export default TeamStats;
