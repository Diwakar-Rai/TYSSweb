import React from 'react'
import CaseStudyLeft from './CaseStudyLeft'
import CaseStudyRight from './CaseStudyRight'
import Style from "./_caseStudies.module.css"
const CaseStudies = () => {
  return (
    <div className={Style.caseStudyMain}>
      <section className={Style.caseStudyBody}>
        <CaseStudyLeft />
        <CaseStudyRight />
      </section>
    </div>
  );
}

export default CaseStudies
