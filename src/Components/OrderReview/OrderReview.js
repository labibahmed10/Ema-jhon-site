import React from "react";
import "./OrderReview.css";
import SingleCart from "../Cart/SingleCart";
import useCart from "../CustomHook/useCart";
import { useProducts } from "../CustomHook/useProduct";
import ReviewCart from "./ReviewCart";
import { removeFromLocalStorage } from "../LocalStorage/LocalStorage";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const removeSingleCart = (product) => {
    const deleteIndividual = cart.filter((pro) => pro.id !== product.id);
    removeFromLocalStorage(product.id);
    setCart(deleteIndividual);
  };

  const clearTheCart = () => {
    setCart([]);
    localStorage.removeItem("shopping_cart");
  };

  return (
    <section className="review-container">
      <div className="review-all">
        {cart.map((item) => (
          <SingleCart key={item.id} item={item} removeSingleCart={removeSingleCart}></SingleCart>
        ))}
      </div>
      <div className="order-cart">
        <ReviewCart clearTheCart={clearTheCart} cart={cart}></ReviewCart>
        {/* <Cart clearTheCart={clearTheCart} cart={cart}></Cart> */}
      </div>
    </section>
  );
};

export default OrderReview;
