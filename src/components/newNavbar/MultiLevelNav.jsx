import React from "react";
import { Link } from "react-router-dom";
import "./multilevel.scss";
import { navData } from "./navData";
import { menuIcons } from "./navData";
const MultiLevelNav = () => {
  return (
    <div className="menuParent">
      <div className="menu">
        <ul className="firstParent d-flex">
          {navData &&
            navData.map((mainNav, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="firstParentItem">
                    <Link to={mainNav.url} className="mainNavLink">
                      {mainNav.title}
                    </Link>

                    <div className="subMenuContainerOne">
                      <ul className="secondUnoderedList">
                        {mainNav.submenu &&
                          mainNav.submenu.map((levelOne, index) => {
                            return (
                              <React.Fragment key={index}>
                                <li className="secondListLi">
                                  <Link
                                    to={levelOne.url}
                                    className="secondListAnchor"
                                  >
                                    <span>{levelOne.title}</span>
                                    <span>{menuIcons[0].leftArrow}</span>
                                  </Link>

                                  <div className="subMenuContainerTwo">
                                    <ul className="thirdUnorderedList">
                                      {levelOne.submenu &&
                                        levelOne.submenu.map(
                                          (levelTwo, index) => {
                                            return (
                                              <React.Fragment key={index}>
                                                <li className="thirdListLi">
                                                  <Link
                                                    to={levelTwo.url}
                                                    className="thirdListAnchor"
                                                  >
                                                    <span>
                                                      {levelTwo.title}
                                                    </span>
                                                    <span>
                                                      {menuIcons[0].leftArrow}
                                                    </span>
                                                  </Link>

                                                  <div className="subMenuContainerThree">
                                                    <ul className="fourthUnorderedList">
                                                      {levelTwo.submenu &&
                                                        levelTwo.submenu.map(
                                                          (
                                                            levelThree,
                                                            index
                                                          ) => {
                                                            return (
                                                              <React.Fragment
                                                                key={index}
                                                              >
                                                                <li className="fourthListLi">
                                                                  <Link
                                                                    to={
                                                                      levelThree.url
                                                                    }
                                                                    className="fourthListAnchor"
                                                                  >
                                                                    <span>
                                                                      {
                                                                        levelThree.title
                                                                      }
                                                                    </span>
                                                                    <span>
                                                                      {
                                                                        menuIcons[0]
                                                                          .leftArrow
                                                                      }
                                                                    </span>
                                                                  </Link>
                                                                </li>
                                                              </React.Fragment>
                                                            );
                                                          }
                                                        )}
                                                    </ul>
                                                  </div>
                                                </li>
                                              </React.Fragment>
                                            );
                                          }
                                        )}
                                    </ul>
                                  </div>
                                </li>
                              </React.Fragment>
                            );
                          })}
                      </ul>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
        </ul>
      </div>
      <div className="menuButton">
        <button><Link to="/contact">Contact Us</Link></button>
      </div>
    </div>
  );
};

export default MultiLevelNav;
