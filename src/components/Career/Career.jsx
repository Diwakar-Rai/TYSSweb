import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Career.module.css";
import { BsPersonWorkspace } from "react-icons/bs";
import { FcBusinesswoman } from "react-icons/fc";
import { GiStumpRegrowth } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import CountUp from "react-countup";
const Career = () => {
  return (
    <section>
      {/* topsection start here */}
      <div className={Styles.TopNav}>
        <div className={Styles.CareerNav}>
          <Link>Students & Graduates</Link>
        </div>
        <div className={Styles.CareerNav}>
          <Link>Experienced Professionals</Link>
        </div>
        <div className={Styles.CareerNav}>
          <Link>Open Position</Link>
        </div>
        <div className={Styles.CareerNav}>
          <Link>Life At TestYantra</Link>
        </div>
      </div>
      {/* topsection end here */}
      {/* middlesection start here */}
      <div className={Styles.image1}>
        <div className={Styles.mainHaed}>
          <div className={Styles.heading}>
            <h1>Accelerate Your Impact</h1>
          </div>
          <div className={Styles.cardHeading}>
            <h1>Innovative work, meaningful career paths.</h1>
            <p>
              Hear more about how you will accomplish your career goals and more
              at Qualitest.
            </p>
            <Link className={Styles.linkbtn}>EXPLORE JOBS</Link>
            <div>
              <Link className={Styles.linkPara}>
                Beware of fake recruitment emails - please read
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* middlesection end here */}
      {/* be more at test yantra start here  */}
      <div className={Styles.middleSection}>
        <div className={Styles.middleDiv}>
          <h1>Be More At TestYantra</h1>
          <p>
            TestYantra is the world’s largest AI-led quality engineering
            company. Our quality engineers align with our customers to
            understand their business needs and figure out the problems inside a
            system or website. Every day with TestYantra is an opportunity to
            innovate, grow and change.
          </p>
        </div>
      </div>
      {/* be more at test yantra end  here  */}
      {/* tHird div start here */}
      <div className={Styles.thirdDiv}>
        <div>
          <BsPersonWorkspace className={Styles.EmployedIcon} />
        </div>
        <div className={Styles.EmployedEmployed}>
          {/* <h1>7,000+</h1> */}
          <CountUp
            end={7000}
            duration={10}
            className={Styles.Number1}
            suffix="+"
          />

          <p>ENGINEERS EMPLOYED</p>

          <h2>We’ve assembled one of the largest,</h2>
          <h2> most talented groups of creative,</h2>
          <h2>critical problem-solvers in the world.</h2>
        </div>
      </div>
      {/* third div end here */}
      <div className={Styles.thirdDiv}>
        <div className={Styles.EmployedEmployed}>
          {/* <h1>40%</h1> */}
          <CountUp
            end={40}
            duration={10}
            className={Styles.Number1}
            suffix="%"
          />
          <p>FEMALE, AND GROWING</p>

          <h2>We are committed to decreasing the gender gap</h2>
          <h2> even more, to support and encourage women’s</h2>
          <h2>active participation in our projects.</h2>
        </div>
        <div>
          <FcBusinesswoman className={Styles.EmployedIcon} />
        </div>
      </div>

      <div className={Styles.thirdDiv}>
        <div>
          <GiStumpRegrowth className={Styles.EmployedIcon} />
        </div>
        <div className={Styles.EmployedEmployed}>
          {/* <h1>3000+</h1> */}
          <CountUp
            end={3000}
            duration={10}
            className={Styles.Number1}
            suffix="+"
          />
          <p>ONLINE CLASSES</p>

          <h2>Our brand-new QJ Spiders</h2>
          <h2>offers career-building courses for training,</h2>
          <h2>growth and professional development.</h2>
        </div>
      </div>

      <div className={Styles.thirdDiv}>
        <div className={Styles.EmployedEmployed}>
          {/* <h1>40+</h1> */}
          <CountUp
            end={40}
            duration={10}
            className={Styles.Number1}
            suffix="+"
          />
          <p>CERTIFICATION PROGRAMS</p>

          <h2>Earn valuable certification in Agile, TestYantra™,</h2>
          <h2>DevOps, Jira, Selenium, Test Automation and all</h2>
          <h2>the latest tools and technology.</h2>
        </div>
        <div>
          <TbCertificate className={Styles.EmployedIcon} />
        </div>
      </div>

      {/* fourth div start here */}
      <div className={Styles.forthDiv}>
        <div className={Styles.fourthDivSec}>
          <h1>Warning Against Recruitment Fraud</h1>
          <p>
            Fraudulent offers of employment with TestYantra. We are issuing this
            warning to alert people to a potential scam involving fraudulent
            ‘TestYantra’ offer letters that are being sent out to potential
            recruits. These offer letters appear to be legitimate, official
            TestYantra communications and usually contain a job offer, salary
            and other employment details. However, the recipients of these
            letters are then required to pay a ‘processing fee’, which can
            amount to hundreds of dollars. This fee is not a legitimate
            employment expense and should NOT be paid. These fraudulent offers
            are not connected to any legitimate offer of employment with
            TestYantra, and the perpetrators are attempting to extract personal
            information or financial compensation from victims. It is essential
            for job seekers to be aware of this scam, as it can have serious
            repercussions if you fall prey to it.
          </p>
          <h1>How to spot recruitment fraud.</h1>
          <p>
            TestYantra will never ask you to pay towards any offer of
            employment. Job seekers should be wary of any offer letters that ask
            for payment in exchange for a position. Additionally, you should
            always double-check the legitimacy of any communication from
            TestYantra and other potential employers before committing to a job
            offer.
          </p>
          <h1>How to report suspicious recruitment offers.</h1>
          <p>
            If you are suspicious of any contact from a party purporting to be
            from TestYantra, please contact us via the button below and we will
            be happy to verify authenticity.
          </p>
          <Link to="/careerContact">CONTACT US</Link>
        </div>
        <div></div>
      </div>
      {/* fourth div end here */}
      <div className={Styles.lastDiv}>
        <div className={Styles.lastDiv1}>
          <div>
            <h1>Get Started</h1>
          </div>
          <div>
            <p>Get a free 30-minute consultation with an expert.</p>
          </div>
          <div>
            <Link>QUICK ASSESSMENT</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
