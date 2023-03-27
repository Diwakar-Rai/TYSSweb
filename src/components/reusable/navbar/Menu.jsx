import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Style from "./_navbar.module.css"
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div className={Style.menuContainer}>
      <ul>
        <li>
          <Link to="/">
            <span></span>
            <span>Home</span>
            <span>
              <BiChevronDown />
            </span>
          </Link>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Pages</span>
            <span>
              <BiChevronDown />
            </span>
          </a>

          <ul>
            <li>
              <a href="#">Software Development</a>
            </li>
            <li>
              <a href="#">Software Testing</a>
            </li>
            <li>
              <a href="#">Elevate-IT Training</a>
            </li>
            <li>
              <a href="#">IT Services</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>About Us</span>
            <span>
              <BiChevronDown />
            </span>
          </a>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Purpose </a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span></span>
            <span>Case Studies</span>
            <span>
              <BiChevronDown />
            </span>
          </a>

          <ul>
            <li>
              <a href="#">Case Study 1</a>
            </li>
            <li>
              <a href="#">Case Study 2</a>
            </li>
            <li>
              <a href="#">Case Study 3</a>
            </li>
            <li>
              <a href="#">Case Study 4</a>
            </li>
          </ul>
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
