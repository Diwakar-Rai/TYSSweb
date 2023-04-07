import React from "react";
import Styles from "./ConTact.module.css";
import image1 from "./images/test.png";
import { CgRadioChecked } from "react-icons/cg";
const ConTact = () => {
  return (
    <section>
      <div className={Styles.imgDiv}>
        <img src={image1} alt={image1} />
        <div className={Styles.mainDiv}>
          <div>
            <h1>CONTACT US</h1>
          </div>
          <div className={Styles.para}>
            <p>Speak with our quality</p>
            <p>engineering experts.</p>
          </div>
          <div className={Styles.conTent}>
            <p className={Styles.para1}>
              Our friendly experts are here to help you. These are just some of
              the things you can ask of them:
            </p>
            <ul>
              {/* we can give multile classanme like that using interpolation */}
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Inquire about a personalized Proof of Concept (POC).
                </span>
              </li>
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Receive a free consultation about your technology and business
                  assurance needs.
                </span>
              </li>
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Learn about our unique and customizable pricing for
                  engagements.
                </span>
              </li>
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Get insights from Qualitest clients with similar needs.
                </span>
              </li>
            </ul>
          </div>
          <form>
            <div className={Styles.formDiv}>
              <label for="formName" className="form-label">
                {/* Name * */}
              </label>
              <input
                type="text"
                className={Styles.formControl}
                id="formName"
                placeholder="enter you name*"
              />
            </div>
            <div className={Styles.formDiv}>
              <label for="formCompany" className="form-label">
                {/* Company * */}
              </label>
              <input
                type="text"
                className={Styles.formControl}
                id="formCompany"
                placeholder="enter your company name*"
              />
            </div>

            <div className={Styles.formDiv}>
              <label for="cars" className="form-label">
                {/* What would you like to talk about?* */}
              </label>
              <select id="cars" name="cars" className={Styles.formControl}>
                <option value="volvo">
                  What would you like to talk about?
                </option>
                <option value="volvo">TestYantra Services</option>
                <option value="saab">Career Opportunities</option>
                <option value="fiat">Partnership Inquiries</option>
                <option value="audi">Media</option>
              </select>
            </div>
            <div className={Styles.formDiv}>
              <label for="formEmail" className="form-label">
                {/* Email * */}
              </label>
              <input
                type="text"
                className={Styles.formControl}
                id="formEmail"
                placeholder="enter you mail*"
              />
            </div>
            <div className={Styles.formDiv}>
              <label for="formSubject" className="form-label">
                {/* Number * */}
              </label>
              <input
                type="tel"
                className={Styles.formControl}
                id="formSubject"
                placeholder="enter your number*"
              />
            </div>
            <div className={Styles.formDiv}>
              <label for="formMessage" className="form-label">
                {/* message * */}
              </label>
              <textarea
                type="text"
                className={Styles.formControl}
                id="formMessage"
                placeholder=" message *"
                style={{ "min-height": "200px" }}
              ></textarea>
            </div>
            <div className={Styles.formDiv}>
              <button type="submit" className={Styles.formButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConTact;
