import React from 'react'
import Banner from './../components/homePage/banner/Banner';
import Team from './../components/homePage/team/Team';
import Services from './../components/homePage/ourservices/Services';
import Workflow from './../components/homePage/workflow/Workflow';
import CaseStudies from './../components/homePage/caseStudy/CaseStudies';
import Newsletter from './../components/homePage/newsletter/Newsletter';
import Service from './../components/homePage/ServiceFolder/Service';
import Industries from './../components/homePage/Industries/Industries';
import Testimonials from './../components/homePage/Testimonials/Testimonials';
import Articles from './../components/homePage/Articles/Articles';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Team />
      <Services />
      <Workflow />
      <CaseStudies />
      <Newsletter />
      <Service />
      <Industries />
      <Testimonials />
      <Articles />
    </div>
  );
}

export default HomePage
