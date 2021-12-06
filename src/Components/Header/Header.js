import React from "react";
import "./Header.css";
import logo from "../../Assets/logos/ecom-logo.jpg";
import SearchIcon from "@material-ui/icons/Search";
import UserIcon from "@material-ui/icons/Person";
import CartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />

      <div className="header__nav">
        <div className="header__option">
          <a href="#!" className="active">
            Home
          </a>
        </div>
        <div className="header__option">
          <a href="#!">Home</a>
        </div>
        <div className="header__option">
          <a href="#!">Home</a>
        </div>
        <div className="header__option">
          <a href="#!">Home</a>
        </div>
        <div className="header__option">
          <a href="#!">Home</a>
        </div>
      </div>

      <div className="header__actions">
        <div className="header__action">
          <a href="#!">
            <SearchIcon className="header__searchIcon" />
          </a>
        </div>
        <div className="header__action">
          <a href="#!">
            <UserIcon className="header__loginIcon" />
          </a>
        </div>
        <div className="header__action">
          <a href="#!">
            <CartIcon className="header__cartIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
