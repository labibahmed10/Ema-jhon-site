import React from "react";
import "./Header.css";
import logo from "../../Ema-John_site/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="" />

        <div className="links">
          <Link to="/home">Home</Link>
          <Link to="/order">Orders</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
