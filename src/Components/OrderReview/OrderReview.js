import React from "react";
import "./OrderReview.css";
import SingleCart from "../Cart/SingleCart";
import useCart from "../CustomHook/useCart";
import { useProducts } from "../CustomHook/useProduct";
import ReviewCart from "./ReviewCart";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(cart);

  return (
    <section className="review-container">
      <div className="review-all">
        {cart.map((item) => (
          <SingleCart key={item.id} item={item}></SingleCart>
        ))}
      </div>
      <div className="order-cart">
        <ReviewCart cart={cart}></ReviewCart>
      </div>
    </section>
  );
};

export default OrderReview;
