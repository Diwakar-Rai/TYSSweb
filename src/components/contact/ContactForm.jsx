import React, {useState} from "react";
import conStyle from "./_contact.module.css";

import form from "./assets/form.jpg";
const ContactForm = () => {

  let [formState, setFormState] = useState({
    firstName: "",
    company: "",
    email: "",
    subject: "",
    message: ""
  })

  let { firstName, company, email, subject, message } = formState;

  let handleChange = e => {
    let { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      console.log({ formState });
    } catch (error) {
      console.log(error);
    }
    setFormState({
      firstName: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    });
  } 
  return (
    <div className={conStyle.contactFormMain}>
      <aside className={conStyle.contactFormBody}>
        <section className={conStyle.contactHead}>
          <h2>Have any Questions?</h2>
        </section>
        <section className={conStyle.contactFormLower}>
          <article className={conStyle.contactImage}>
            <img src={form} alt="" />
          </article>
          <article className={conStyle.contactInfoForm}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className={conStyle.formDivision}>
                <label htmlFor="formName" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className={conStyle.formControlCon}
                  id="formName"
                  placeholder="Devon Lain"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className={conStyle.formDivision}>
                <label htmlFor="formCompany" className="form-label">
                  Company *
                </label>
                <input
                  type="text"
                  className={conStyle.formControlCon}
                  id="formCompany"
                  placeholder="Louis Vuitton"
                  name="company"
                  value={company}
                  onChange={handleChange}
                />
              </div>
              <div className={conStyle.formDivision}>
                <label htmlFor="formEmail" className="form-label">
                  Email *
                </label>
                <input
                  type="text"
                  className={conStyle.formControlCon}
                  id="formEmail"
                  placeholder="peter.Parker@email.com"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className={conStyle.formDivision}>
                <label htmlFor="formSubject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  className={conStyle.formControlCon}
                  id="formSubject"
                  placeholder="Web..."
                  name="subject"
                  value={subject}
                  onChange={handleChange}
                />
              </div>
              <div className={conStyle.formDivision}>
                <label htmlFor="formMessage" className="form-label">
                  message *
                </label>
                <textarea
                  type="text"
                  className={conStyle.formControlCon}
                  id="formMessage"
                  placeholder="lorem ipsum doler sit"
                  name="message"
                  value={message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={conStyle.formButton}>
                Submit
              </button>
            </form>
          </article>
        </section>
      </aside>
    </div>
  );
};

export default ContactForm;
