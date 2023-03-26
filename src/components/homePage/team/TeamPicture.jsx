import React from "react";
import Style from "./_team.module.css";

import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";
import person5 from "./assets/person5.jpg";
const TeamPicture = () => {
  return (
    <div className={Style.teamPicture}>
      <section className={Style.lightOrangeBlob}></section>
      <section className={Style.orangeBlob}></section>
      <section className={Style.dottedBlob}></section>
      <figure className={`${Style.person} ${Style.person1}`}>
        <img src={person1} alt="person" />
      </figure>
      <figure className={`${Style.person} ${Style.person2}`}>
        <img src={person2} alt="person" />
      </figure>
      <figure className={`${Style.person} ${Style.person3}`}>
        <img src={person3} alt="person" />
      </figure>
      <figure className={`${Style.person} ${Style.person4}`}>
        <img src={person4} alt="person" />
      </figure>
      <figure className={`${Style.person} ${Style.person5}`}>
        <img src={person5} alt="person" />
      </figure>
    </div>
  );
};

export default TeamPicture;
