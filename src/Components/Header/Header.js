import React from "react";
import "./Header.css";
import logo from "../../Ema-John_site/images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar">
        <img onClick={() => navigate("/home")} src={logo} alt="" />

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
