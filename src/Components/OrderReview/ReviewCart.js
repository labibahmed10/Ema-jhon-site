import React from "react";

const ReviewCart = ({ cart }) => {
  console.log(cart);
  const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);

  const singlePrice = cart.map((i) => i.quantity * i.price);
  const mainPrice = singlePrice.reduce((prev, curr) => prev + curr, 0);

  const singleShipping = cart.map((i) => i.quantity * i.shipping);
  const shippingCharge = singleShipping.reduce((p, c) => p + c, 0);

  const tax = parseFloat((mainPrice * 0.1).toFixed(2));

  const totalCost = mainPrice + shippingCharge + tax;

  return (
    <div>
      <h1>Order Summary</h1>

      <h2>Selected Items: {quantity}</h2>
      <h2>Total Price: {mainPrice} </h2>
      <h2>Total Shipping: {shippingCharge} </h2>
      <h2>Tax: {tax}</h2>

      <h3>Grand Total: {totalCost}</h3>

      <button className="btn-1">Clear Cart</button>
      <button className="btn-2">Proceed Checkout</button>
    </div>
  );
};

export default ReviewCart;
