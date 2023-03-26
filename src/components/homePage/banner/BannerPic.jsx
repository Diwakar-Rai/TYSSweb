import React from 'react'
import girl from "./assets/girl.png"

import Style from "./_banner.module.css"
const BannerPic = () => {
  return (
    <div className={Style.bannerPic}>
      <img src={girl} alt="" />
    </div>
  )
}

export default BannerPic
