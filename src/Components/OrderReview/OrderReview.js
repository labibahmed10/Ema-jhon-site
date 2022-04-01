import React from "react";
import "./OrderReview.css";
import SingleCart from "../Cart/SingleCart";
import useCart from "../CustomHook/useCart";
import { useProducts } from "../CustomHook/useProduct";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  return (
    <section className="review-container">
      <div className="review-all">
        {cart.map((item) => (
          <SingleCart key={item.id} item={item}></SingleCart>
        ))}
      </div>
      <div className="order-cart">
        <h1>Order Summary</h1>

        <h2>Selected Items: </h2>
        <h2>Total Price: </h2>
        <h2>Total Shipping: </h2>
        <h2>Tax: </h2>

        <h3>Grand Total: </h3>

        <button className="btn-1">Clear Cart</button>
        <button className="btn-2">Proceed Checkout</button>
      </div>
    </section>
  );
};

export default OrderReview;
