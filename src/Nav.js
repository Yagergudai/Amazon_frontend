import React from "react";
import "./Nav.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Nav() {
  return (
    <div className="nav_wrapper">
      <ul className="nav">
        <li >
          <MenuOutlinedIcon className="menuicon" />
        </li>
        <li>All</li>
        <li>Today's Deal</li>
        <li>Buy Again</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
        <li>Browsing History</li>
        <li>Sell</li>
        <li>Registry</li>
      </ul>
    </div>
  );
}

export default Nav;
