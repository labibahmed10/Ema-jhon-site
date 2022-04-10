import React from "react";
import "./Cart.css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// main part rendering here
const Cart = (props) => {
  const { cart, clearTheCart } = props;
  const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);

  const singlePrice = cart.map((i) => i.quantity * i.price);
  const mainPrice = singlePrice.reduce((prev, curr) => prev + curr, 0);

  const singleShipping = cart.map((i) => i.quantity * i.shipping);
  const ShippingCost = singleShipping.reduce((prev, curr) => prev + curr, 0);

  const mainShippingCost = quantity * ShippingCost;

  const tax = parseFloat((mainPrice * 0.1).toFixed(2));
  const grandTotal = mainPrice + mainShippingCost + tax;

  return (
    <section className="main-cart">
      <div className="info-container">
        <h1>Order Summary</h1>
        <p>Selected Item : {quantity}</p>
        <p>Total Price : {mainPrice}$</p>
        <p>Total Shipping Price : {mainShippingCost}$</p>
        <p>Tax : {tax}$</p>
        <h2>Grand Total : {grandTotal}$</h2>

        <button onClick={() => clearTheCart()} className="btn-1">
          Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>

        <Link to="/inventory" className="btn-2">
          {props.children} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
