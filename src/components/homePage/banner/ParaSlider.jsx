import React, { useState, useEffect } from "react";

import Style from "./_banner.module.css";

const ParaSlider = ({ para }) => {
  const [current, setCurrent] = useState(0);
  const length = para.length;
  useEffect(() => {
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 4000);

    return () => {};
  }, [current]);

  if (!Array.isArray(para) || para.length <= 0) {
    return null;
  }

  return (
    <div className={Style.slider}>
      {para.map((sli, index) => {
        return (
          <div
            className={Style.slide + (index === current ? Style.active : "")}
            key={index}
          >
            {index === current && (
              <>
                <p className={Style.paragraph}>{sli.image}</p>
                {/* <div className={Style.para}>{sli.para}</div> */}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ParaSlider;
