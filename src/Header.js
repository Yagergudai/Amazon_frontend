import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [showAll, setShowAll] = useState(false);
  // console.log(showAll);


  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <span className="header__address">
        <LocationOnOutlinedIcon className="header__location" />
        Deliver to <br />
        {!user ? "Guest" : user.email}
      </span>

      <span onClick={() => setShowAll(!showAll)} className="header__drop">
        <ArrowDropDownOutlinedIcon />
        All<span></span>
      </span>
      {showAll && (
        <div>
          <ul className="Drop_down">
            <li>All departements</li>
          </ul>
        </div>
      )}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearLink">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello <br />
              {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearLink ">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearLink">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length} cart
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
