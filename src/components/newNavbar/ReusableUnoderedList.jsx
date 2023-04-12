import React from "react";
import { Link } from "react-router-dom";

const ReusableUnoderedList = props => {
  let { menuItem, anchorName, listName, icon } = props;
  console.log(props);
  return (
    <>
      <li className={listName}>
        <Link to={menuItem.url} className={anchorName}>
          <span>{menuItem.title}</span>
          <span>{icon}</span>
        </Link>
      </li>
    </>
  );
};

export default ReusableUnoderedList;
