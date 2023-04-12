import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./_services.module.css";

import { TbPackages } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { GiCyberEye } from "react-icons/gi";
import { SiPreact } from "react-icons/si";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={Style.rightarrow} onClick={onClick}>
      <BsArrowRightShort />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={Style.leftarrow} onClick={onClick}>
      <BsArrowLeftShort />
    </div>
  );
}

const ServicesCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <TbPackages />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Product Engineering</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <MdManageAccounts />
        </section>
        <section className={Style.carouselHeader}>
          <h3>For Industry</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <IoMdAnalytics />
        </section>
        <section className={Style.carouselHeader}>
          <h3>For Technology</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <GiCyberEye />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Enterprise level</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <SiPreact />
        </section>
        <section className={Style.carouselHeader}>
          <h3> Automation Engineering</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Quality Engineering</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Digital Assurance</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Advisory and Transformations</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>YaNLIB</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Auto Suite</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Test case engine</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Sauce labs</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Smart Bear</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Fireflink</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>AWS</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>ATDXT</h3>
        </section>
        <section className={Style.carouselArrow}>
          <Link to="/">
            <BsArrowRightShort />
          </Link>
        </section>
      </div>
    </Slider>
  );
};

export default ServicesCarousel;
