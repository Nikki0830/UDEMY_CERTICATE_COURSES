import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <StorefrontIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoTitle">eShop</h2>
        </Link>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_ietmLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_ietmLineTwo">Shop</span>
        </div>
        {/* checkout link */}
        <Link to="/checkout"style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            {/* <span className="nav_itemLineOne">Basket</span>
             */}
            <ShoppingBasketIcon className="itemBasket" fontSize="large" />
            <span className="nav_ietmLineTwo nav_basket">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
