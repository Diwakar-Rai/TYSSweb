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
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
          <BsArrowRightShort />
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <MdManageAccounts />
        </section>
        <section className={Style.carouselHeader}>
          <h3>IT Management</h3>
        </section>
        <section className={Style.carouselArrow}>
          <BsArrowRightShort />
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <IoMdAnalytics />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Data analytics</h3>
        </section>
        <section className={Style.carouselArrow}>
          <BsArrowRightShort />
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <GiCyberEye />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Cyber Security</h3>
        </section>
        <section className={Style.carouselArrow}>
          <BsArrowRightShort />
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <SiPreact />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Web development</h3>
        </section>
        <section className={Style.carouselArrow}>
          <BsArrowRightShort />
        </section>
      </div>
      <div className={Style.carouselSec}>
        <section className={Style.carouselIcon}>
          <BsFillCloudFog2Fill />
        </section>
        <section className={Style.carouselHeader}>
          <h3>Cloud Solutions</h3>
        </section>
        <section className={Style.carouselArrow}>
          <BsArrowRightShort />
        </section>
      </div>
    </Slider>
  );
};

export default ServicesCarousel;
