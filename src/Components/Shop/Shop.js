import "./Shop.css";
import React, { useEffect, useState } from "react";
// Components
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";
import { localDB } from "../LocalStorage/LocalStorage";

// main rendering part here
const Shop = () => {
  // products card state here
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  //sideline cart state here
  const [cart, setCart] = useState([]);

  // event handler added to update cart
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localDB(product.id);
  };

  return (
    // main section under navbar
    <section className="main-container">
      {/* Only product parts */}
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>

      {/* cart part right side */}
      <div className="cart-container">
        {/* sending cart information */}
        <Cart cart={cart}></Cart>
      </div>
    </section>
  );
};

export default Shop;
