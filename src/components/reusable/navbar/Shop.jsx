import React from "react";
import Style from "./_navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Shop = () => {
  return (
    <div className={Style.shop}>
      <section className={Style.shopChild}>
        <BsSearch />
      </section>
      <section className={Style.shopChild}>
        <HiOutlineShoppingBag />
      </section>
      <section className={Style.shopChild}>
        <aside></aside>
        <aside></aside>
        <aside></aside>
      </section>
    </div>
  );
};

export default Shop;
