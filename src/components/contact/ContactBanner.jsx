import React from 'react'
import Style from "./_contact.module.css"
import banner from "./assets/contact.jpg"
const ContactBanner = () => {
  return (
    <div className={Style.ContactBanner}>
      <img src={banner} alt="" />
    </div>
  )
}

export default ContactBanner
