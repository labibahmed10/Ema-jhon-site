import React from "react";
import "./Cart.css";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// main part rendering here
const Cart = ({ cart }) => {
  console.log(cart);

  const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);

  const singlePrice = cart.reduce((prev, curr) => prev + curr.price, 0);

  const mainPrice = quantity * singlePrice;

  const singleShippingCost = cart.reduce((prev, curr) => prev + curr.shipping, 0);

  const mainShippingCost = quantity * singleShippingCost;

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
