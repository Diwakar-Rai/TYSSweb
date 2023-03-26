import React from "react";
import Style from "./_caseStudies.module.css";
const CaseStudyLeft = () => {
  return (
    <div className={Style.studyLeft}>
      <section className={Style.studyLink}>
        <a href="#">Recent projects</a>
      </section>
      <section className={Style.studyHeader}>
        <h2>Our latest case studies</h2>
      </section>
      <section className={Style.studyPara}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          tenetur accusamus ipsum tempora facere quas voluptate.
        </p>
      </section>
      <section className={Style.buttonSection}>
        <button>
          <a href="#">Management</a>
        </button>
        <button>
          <a href="#">Design</a>
        </button>
        <button>
          <a href="#">UI/Ux Design</a>
        </button>
        <button>
          <a href="#">Business Consulting</a>
        </button>
        <button>
          <a href="#">Medical Industries</a>
        </button>
      </section>

      <section className={Style.mainButton}>
        {" "}
        <button>More projects</button>
      </section>
    </div>
  );
};

export default CaseStudyLeft;
