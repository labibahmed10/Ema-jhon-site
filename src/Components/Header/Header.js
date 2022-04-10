import React from "react";
import "./Header.css";
import logo from "../../Ema-John_site/images/Logo.svg";
import { useNavigate } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <header>
      <nav className="navbar">
        <img onClick={() => navigate("/home")} src={logo} alt="" />

        <div className="links">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/shop">Shop</CustomLink>
          <CustomLink to="/order">Order</CustomLink>
          <CustomLink to="/inventory">Manage Inventory</CustomLink>
          {user ? (
            <button className="text-[aliceblue]" onClick={() => signOut(auth)}>
              SignOut
            </button>
          ) : (
            <CustomLink to="/login">Log in</CustomLink>
          )}

          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
