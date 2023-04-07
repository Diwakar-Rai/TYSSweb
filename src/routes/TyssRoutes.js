import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "./../pages/ContactPage";
import SoftwareDevPage from "./../pages/SoftwareDevPage";
import SoftwareTestPage from "./../pages/SoftwareTestPage";
import SoftwareTrainPage from "./../pages/SoftwareTrainPage";
import SoftwareServicePage from "./../pages/SoftwareServicePage";
import AboutUsPage from "./../pages/AboutUsPage";
import MissionPage from "./../pages/MissionPage";
import CaseStudiesPage from "./../pages/CaseStudiesPage";
import CareerPage from "./../pages/CareerPage";
import CareerContactPage from "./../pages/CareerContactPage";

const TyssRoutes = () => {
  let OurRoutes = useRoutes([
    { path: "/", element: <HomePage /> },
    //!Software dev, testing, training
    { path: "/softwareDev", element: <SoftwareDevPage /> },
    { path: "/softwareTest", element: <SoftwareTestPage /> },
    { path: "/softwareTraining", element: <SoftwareTrainPage /> },
    { path: "/softwareService", element: <SoftwareServicePage /> },
    //! Contact Page
    { path: "/contact", element: <ContactPage /> },
    //! Case Study
    { path: "/caseStudy", element: <CaseStudiesPage /> },
    //! Career Page

    { path: "/career", element: <CareerPage /> },
    { path: "/careerContact", element: <CareerContactPage /> },
    //! About Us
    { path: "/aboutUs", element: <AboutUsPage /> },
    { path: "/mission", element: <MissionPage /> },
  ]);
  return OurRoutes;
};

export default TyssRoutes;
