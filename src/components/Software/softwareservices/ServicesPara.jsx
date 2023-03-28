import React from 'react'
import Style from "./_services.module.css"

import servicesLower from "./assets/serviceslower.jpg"
const ServicesPara = () => {
  return (
    <div className={Style.servicesParaMain}>
      <section className={Style.servicesLower}>
        <aside className={Style.softLeft}>
          <h2>Best Software Development Plans</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            animi perferendis neque. Minima doloribus, quas ex dignissimos amet
            dolor ea velit praesentium facere est laudantium doloremque odio
            autem accusamus totam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dignissimos, doloribus. Iure ipsum distinctio
            maxime corporis dolorem asperiores rerum! Explicabo animi unde velit
            et doloribus dolore non cupiditate culpa, suscipit consequatur.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, sunt
            consequatur ad nulla iure at eum excepturi blanditiis iste
            similique. Officia sunt exercitationem omnis facere temporibus?
            Fugiat est nam in!
          </p>
        </aside>
        <aside className={Style.softRight}>
          <img src={servicesLower} alt="" />
          
        </aside>
      </section>
    </div>
  );
}

export default ServicesPara
