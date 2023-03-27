import React from "react";
import Styles from "./Articles.module.css";
import { Link } from "react-router-dom";
import image1 from "./images/mobile.jpg";
import image2 from "./images/laptop.jpg";
import image3 from "./images/ecosystem.jpg";
const Articles = () => {
  return (
    <section className={Styles.mySection}>
      <article className={Styles.myArticle}>
        <div className={Styles.Div1}>
          <Link>RECENT ARTICLE</Link>
        </div>
        <div className={Styles.Div2}>
          <h1>Latest news from us </h1>
        </div>
        <div className={Styles.Div3}>
          <div className={Styles.card}>
            <div className={Styles.img}>
              <img src={image1} alt={image1} />
            </div>
            <div className={Styles.conTent}>
              <div className={Styles.para}>
                <p>September 28,2022</p>
                <p className={Styles.p1}>
                  By <strong>Admin</strong>
                </p>
              </div>
              <div className={Styles.head}>
                <h1>Create Live Segments & Target The Right People...</h1>
              </div>
              <div>
                <div className={Styles.btn}>
                  <button className={Styles.articleButton}>
                    Business Consulting
                  </button>
                  <button className={Styles.articleButton}>IT Solution</button>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.img}>
              <img src={image2} alt={image2} />
            </div>

            <div className={Styles.conTent}>
              <div className={Styles.para}>
                <p>September 28,2022</p>
                <p className={Styles.p1}>
                  By <strong>Admin</strong>
                </p>
              </div>
              <div className={Styles.head}>
                <h1>Create Live Segments & Target The Right People...</h1>
              </div>
              <div>
                <div className={Styles.btn}>
                  <button className={Styles.articleButton}>
                    Business Consulting
                  </button>
                  <button className={Styles.articleButton}>IT Solution</button>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.card}>
            <div className={Styles.img}>
              <img src={image3} alt={image3} />
            </div>

            <div className={Styles.conTent}>
              <div className={Styles.para}>
                <p>September 28,2022</p>
                <p className={Styles.p1}>
                  By <strong>Admin</strong>
                </p>
              </div>
              <div className={Styles.head}>
                <h1>Create Live Segments & Target The Right People...</h1>
              </div>
              <div>
                <div className={Styles.btn}>
                  <button className={Styles.articleButton}>
                    Business Consulting
                  </button>
                  <button className={Styles.articleButton}>IT Solution</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Articles;
