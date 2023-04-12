import React from "react";
import Style from "./_newFooter.module.css"
import { newFooterData } from "./newFooterData";
import ReusableUnoderedList from './../newNavbar/ReusableUnoderedList';
const NewFooterTop = () => {
  return (
    <div className={Style.footerTopMain}>
      <section className={`${Style.footerTopContainer} d-flex`}>
        {newFooterData &&
          newFooterData.map((ele, index) => {
            return (
              <React.Fragment key={index}>
                <ul className={Style.footerList}>
                  <h3>{ele.footHead}</h3>
                  {ele.links.map((item, index) => {
                    return <ReusableUnoderedList menuItem={item} />;
                  })}
                </ul>
              </React.Fragment>
            );
          })}
      </section>
    </div>
  );
};

export default NewFooterTop;
