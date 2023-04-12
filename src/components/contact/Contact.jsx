import React from 'react'
import ContactBanner from './ContactBanner'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm';
import Newsletter from '../homePage/newsletter/Newsletter';

const Contact = () => {
  return (
    <div>
          <ContactBanner />
          <ContactInfo />
      <ContactForm />
      <Newsletter/>
    </div>
  )
}

export default Contact
