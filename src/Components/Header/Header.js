import React from "react";
import "./Header.css";
import logo from "../../Ema-John_site/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar">
        <img onClick={() => navigate("/home")} src={logo} alt="" />

        <div className="links">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/shop">Shop</CustomLink>
          <CustomLink to="/review">Manage Inventory</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
