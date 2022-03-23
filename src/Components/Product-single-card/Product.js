import "./Product.css";
import React from "react";

// font awesome part
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

// main rendering here
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.shoe;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="cards"
    >
      <img src={img} alt="" />
      <div className="card-details">
        <h1>{name.length > 10 ? name.slice(0, 16) : name}</h1>
        <h4>Price : {price}$</h4>
        <p>Manufacturer : {seller} </p>
        <p>Rating : {ratings} </p>
      </div>
      <button>
        Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
