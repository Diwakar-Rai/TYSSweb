import React from "react";
import Style from "./Career.module.css";
import { Link } from "react-router-dom";
import experienced from "./images/experienced.jpg";
import fresher from "./images/fresher.jpg";
const NewCareer = () => {
  return (
    <div className={Style.newCareerMain}>
      <section className={Style.newCareerBody}>
        <article className={Style.newCareerHead}>
          <h2>Explore Your Career Path</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam a, aliquid omnis atque commodi distinctio, delectus perferendis quaerat, nemo architecto libero accusantium.</p>
        </article>
        <section className="d-flex">
          <article className={`${Style.photoLeft} d-flex`}>
            <aside className={Style.careerPhoto}>
              <img src={experienced} alt="" />
            </aside>
            <aside className={Style.careerPhoto}>
              <img src={fresher} alt="" />
            </aside>
          </article>
          <article className={`${Style.detailRight} d-flex`}>
            <aside className={Style.careerPara}>
              <h3>Experienced professionals</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                numquam veritatis facilis inventore, porro dicta officia maiores
                reiciendis. Voluptate magnam ea a ut inventore quae odio aut
                adipisci aspernatur obcaecati?
              </p>
              <button>
                <Link to="/">Explore More</Link>
              </button>
            </aside>
            <aside className={Style.careerPara}>
              <h3>Experienced professionals</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                numquam veritatis facilis inventore, porro dicta officia maiores
                reiciendis. Voluptate magnam ea a ut inventore quae odio aut
                adipisci aspernatur obcaecati?
              </p>
              <button>
                <Link to="/">Explore More</Link>
              </button>
            </aside>
          </article>
        </section>
      </section>
    </div>
  );
};

export default NewCareer;
