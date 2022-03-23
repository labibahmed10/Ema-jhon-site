import React from "react";
import "./Header.css";
import logo from "../../Ema-John_site/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="" />

        <div className="links">
          <a href="/#">Home</a>
          <a href="/#">Orders</a>
          <a href="#/">Manage Inventory</a>
          <a href="#/">About</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
