import React from "react";
import Style from "./_contact.module.css";

import form from "./assets/form.jpg";
const ContactForm = () => {
  return (
    <div className={Style.contactFormMain}>
      <aside className={Style.contactFormBody}>
        <section className={Style.contactHead}>
          <h2>Have any Questions?</h2>
        </section>
        <section className={Style.contactFormLower}>
          <article>
            <img src={form} alt="" />
          </article>
          <article className={Style.contactInfoForm}>
            <form>
              <div className={Style.formDiv}>
                <label for="formName" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  className={Style.formControl}
                  id="formName"
                  placeholder="Devon Lain"
                />
              </div>
              <div className={Style.formDiv}>
                <label for="formCompany" className="form-label">
                  Company *
                </label>
                <input
                  type="text"
                  className={Style.formControl}
                  id="formCompany"
                  placeholder="Louis Vuitton"
                />
              </div>
              <div className={Style.formDiv}>
                <label for="formEmail" className="form-label">
                  Email *
                </label>
                <input
                  type="text"
                  className={Style.formControl}
                  id="formEmail"
                  placeholder="peter.Parker@email.com"
                />
              </div>
              <div className={Style.formDiv}>
                <label for="formSubject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  className={Style.formControl}
                  id="formSubject"
                  placeholder="Web..."
                />
              </div>
              <div className={Style.formDiv}>
                <label for="formMessage" className="form-label">
                  message *
                </label>
                <textarea
                  type="text"
                  className={Style.formControl}
                                  id="formMessage"
                                  placeholder="lorem ipsum doler sit"
                ></textarea>
              </div>

              <button type="submit" className={Style.formButton}>
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
