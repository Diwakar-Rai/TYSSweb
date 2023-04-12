import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import Shop from './Shop';
import Style from "./_navbar.module.css"
import MultiLevelNav from '../../newNavbar/MultiLevelNav';
const Navbar = () => {
  return (
    <div className={Style.navbarContainer}>
      <section className={Style.navbarBody}>
        <Logo />
        <MultiLevelNav/>
        <Shop />
      </section>
    </div>
  );
}

export default Navbar
