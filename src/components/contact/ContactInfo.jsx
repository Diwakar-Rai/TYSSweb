import React from 'react'
import Style from "./_contact.module.css"

import {FiPhoneCall} from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
const ContactInfo = () => {
  return (
    <div className={Style.contactInfo}>
      <section className={Style.contactInfoBody}>
        <article>
          <aside>
            <IoLocationOutline />
          </aside>
          <aside>
            
              <a href="#">Visit Us</a>
            
            <p>lorem ipsum doler</p>
            <p>lorem ipsum doler</p>
          </aside>
        </article>

        <article>
          <aside>
            <FiPhoneCall />
          </aside>
          <aside>
            
              <a href="#">Contact Us</a>
            
            <p>123 456 789</p>
            <p>123 456 789</p>
          </aside>
        </article>

        <article>
          <aside><GrMail/></aside>
          <aside>
            
              <a href="#">Mail Us</a>
            
            <p>abc@gmail.com</p>
            <p>xyz@gmail.com</p>
          </aside>
        </article>
      </section>
    </div>
  );
}

export default ContactInfo
