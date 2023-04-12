import React, { useState, useEffect } from "react";

import Style from "./_banner.module.css";

const BannerSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  let [activeState, setActiveState] = useState(false);
  const length = slides.length;
  useEffect(() => {
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
      setActiveState(!activeState);
    }, 4000);
    
    return () => {};
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={Style.slider}>
      {/* {slides.map((sli, index) => {
        return ( */}
      <div
        className={`${Style.slide}`}
        // className={Style.slide + (index === current ? Style.active : "")}
        // key={index}
      >
        {/* {index === current && ( */}
        <>
          <img
            src={slides[current].image}
            alt="travel image"
            className={`${Style.image} ${(activeState === true ? Style.active : " dgdsfgdsfgd")}`}
          />

          {/* <div className={Style.para}>{sli.para}</div> */}
        </>
        {/* )} */}
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default BannerSlider;
