import React from "react";
import "./NavList.css";
const NavList = () => {
  const navListItems = ["TextReader", "Calculator", "App3", "App4", "App5"];

  return (
    <ul>
      {
      navListItems.map(
        (navListItem, index) => 
        {
        return <li key={index}>{navListItem}</li>;
        }
      )
      }
    </ul>
  );
};

export default NavList;
