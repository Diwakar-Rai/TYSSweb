import React from "react";
import Styles from "./Testimonials.module.css";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import image1 from "./images/software.avif";
import image2 from "./images/entrepreneur-2326419__340.jpg";
import image3 from "./images/software-developer-6521720_960_720.jpg";
const Testimonials = () => {
  return (
    <section className={Styles.mySection}>
      <article className={Styles.myArticle}>
        <div className={Styles.Div1}>
          <Link>TESTIMONIALS</Link>
        </div>
        <div className={Styles.Div2}>
          <h1>Client's Success is our success</h1>
        </div>
        <div className={Styles.Div3}>
          {/*  */}

          <div className={Styles.card}>
            <div>
              <img src={image1} alt={image1} />
            </div>
            <div className={Styles.QuoteDiv}>
              <FaQuoteLeft className={Styles.Quote} />
            </div>
            <div className={Styles.conTent}>
              <p>
                " It uses a directory of over 20 latin words combine a half of
                the things you need model sentences structure sgather "
              </p>
            </div>
            <div>
              <h1>Leslie Alexander</h1>
            </div>
            <div className={Styles.lstPara}>
              <p>SALE DEVELOPMENT</p>
            </div>
          </div>

          {/*  */}
          <div className={Styles.card}>
            <div>
              <img src={image2} alt={image2} />
            </div>
            <div className={Styles.QuoteDiv}>
              <FaQuoteLeft className={Styles.Quote} />
            </div>
            <div className={Styles.conTent}>
              <p>
                " It uses a directory of over 20 latin words combine a half of
                the things you need model sentences structure sgather "
              </p>
            </div>
            <div>
              <h1>Leslie Alexander</h1>
            </div>
            <div className={Styles.lstPara}>
              <p>SALE DEVELOPMENT</p>
            </div>
          </div>
          {/*  */}
          <div className={Styles.card}>
            <div>
              <img src={image3} alt={image3} />
            </div>
            <div className={Styles.QuoteDiv}>
              <FaQuoteLeft className={Styles.Quote} />
            </div>
            <div className={Styles.conTent}>
              <p>
                " It uses a directory of over 20 latin words combine a half of
                the things you need model sentences structure sgather "
              </p>
            </div>
            <div>
              <h1>Leslie Alexander</h1>
            </div>
            <div className={Styles.lstPara}>
              <p>SALE DEVELOPMENT</p>
            </div>
          </div>
        </div>
        <div className={Styles.btn}>
          <div className={Styles.btn1}>
            <Link>
              <BsArrowLeftShort className={Styles.arrOw} />
            </Link>
          </div>
          <div className={Styles.btn2}>
            <Link>
              <BsArrowRightShort className={Styles.arrOw} />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
