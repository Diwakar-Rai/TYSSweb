import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Style from "./_navbar.module.css"
const Menu = () => {
  return (
    <div className={Style.menuContainer}>
      <ul>
        <li>
          <a href="#">
            <span></span>
            <span>Home</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Pages</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>About Us</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Case Studies</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Contact</span>
          </a>
        </li>
      </ul>
      <aside>
        <button>Free Quote</button>
      </aside>
    </div>
  );
};

export default Menu;
