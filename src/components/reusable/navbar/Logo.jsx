import React from 'react'
import logo from "./assets/tylogo.png"
import Style from './_navbar.module.css'
const Logo = () => {
  return (
    <div className={Style.logo}>
      <img src={logo} alt="" />
    </div>
  )
}

export default Logo
