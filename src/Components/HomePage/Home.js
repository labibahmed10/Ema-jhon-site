import React from "react";
import { Link } from "react-router-dom";
import image from "../../Ema-John_site/images/Group 12.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section className="container-home">
      <div className="info">
        <p>Sale Up to 70% off</p>

        <div className="middle-info">
          <h1>New Collection For Fall</h1>
          <h4>Discover all the new arrivals of ready-to-wear collection.</h4>
        </div>

        <Link className="shop-now" to="/shop">
          SHOP NOW
        </Link>
      </div>

      <div className="image-part">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Home;
