import "./Shop.css";
import React, { useEffect, useState } from "react";
// Components
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";
import { getStoredCart, localDB } from "../LocalStorage/LocalStorage";

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

  // using useEffect to find local storage value
  useEffect(() => {
    // taken value of local storage value
    const storedCart = getStoredCart();

    // declaring newcart to sent it to local storage
    const newSavedCart = [];

    // looping through every stored card
    for (const id in storedCart) {
      // finding added product from local storage comparing to local storage
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        newSavedCart.push(addedProduct);
      }
    }
    // it's better to saving set new cart after looping
    setCart(newSavedCart);
  }, [products]);

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
