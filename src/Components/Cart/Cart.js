import React from "react";
import "./Cart.css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <section className="main-cart">
      <div className="info-container">
        <h1>Order Summary</h1>
        <p>Selected Item : </p>
        <p>Total Price : </p>
        <p>Total Shipping Price : </p>
        <p>Tax : </p>
        <h2>Grand Total : </h2>

        <button className="btn-1">
          Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>

        <button className="btn-2">
          Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </section>
  );
};

export default Cart;
