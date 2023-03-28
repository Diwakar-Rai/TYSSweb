import React from "react";
import Styles from "./Purpose.module.css";
import { Link } from "react-router-dom";
import { MdOutlineWorkHistory } from "react-icons/md";
import image1 from "./images1/dev5.avif";
const Purpose = () => {
  return (
    <section>
      <div className={Styles.cardPurpose}>
        <div className={Styles.purDiv}>
          <MdOutlineWorkHistory className={Styles.historyIcon} />
          <h1>Our History</h1>
          <div>
            <h2>The name</h2>
            <p className={Styles.paraWidth}>
              Yantra (यन्त्र) is the Sanskrit word for ‘machine’ or
              ‘instrument’. The word ‘yantra’ (यन्त्र) is derived from the root
              ‘yam’ meaning to sustain, hold or support. ‘Test Yantra’
              symbolizes the automated and expert contrivance that harnesses the
              energy and experience of the organization to make our client’s
              business successful through a full suite of IT services.
            </p>
          </div>
          <div className={Styles.about}>
            <h2>About Test Yantra Global</h2>
            <p className={Styles.paraWidth}>
              With its humble beginnings in the early 2000’s helping customers
              with software testing and training services, Test Yantra Global
              has grown into a global conglomerate with subbrands under its
              umbrella, offering a full suite of exceptional Digital
              Transformation and IT services to its clients.
            </p>
          </div>
        </div>
        <div className={Styles.testYantra}>
          <h1>TESTYANTRA</h1>
        </div>
      </div>

      <div className={Styles.conTainer}>
        <div className={Styles.mainDiv}>
          <div className={Styles.firstDiv}>
            <div className={Styles.linkDiv}>
              <Link>
                <p>WHY CHOOSE US</p>
              </Link>
              <h1>
                Custom IT solutions
                <br />
                for your business
              </h1>
            </div>
            <div className={Styles.conTent}>
              <p className={Styles.paraWidth}>
                With its humble beginnings in the early 2000’s helping customers
                with software testing and training services, Test Yantra Global
                has grown into a global conglomerate with subbrands under its
                umbrella, offering a full suite of exceptional Digital
                Transformation and IT services to its clients.
              </p>
            </div>
          </div>
          <div className={Styles.secondDiv}>
            <img src={image1} alt={image1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
