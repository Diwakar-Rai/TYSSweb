import React from "react";
import TeamDesc from "./TeamDesc";
// import TeamPicture from "./TeamPicture";
// import UpperCard from "./UpperCard";
import Style from "./_team.module.css";
import TeamStats from "./TeamStats";
const Team = () => {
  return (
    <div className={Style.teamMain}>
      <TeamStats/>
      <div className={Style.teamContainer}>
        {/* <UpperCard /> */}
        <aside className={Style.bottomTeam}>
          {/* <article className={Style.teamPicContainer}>
            <TeamPicture />
          </article> */}
          <article className={Style.teamDescContainer}>
            <TeamDesc />
          </article>
        </aside>
      </div>
    </div>
  );
};

export default Team;
