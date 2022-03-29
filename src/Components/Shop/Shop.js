import "./Shop.css";
import React, { useEffect, useState } from "react";
// Components
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";
import { getStoredCart, localDB } from "../LocalStorage/LocalStorage";
import OrderReview from "../OrderReview/OrderReview";

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
  const handleAddToCart = (individualProduct) => {
    let newCart = [];
    const existingProduct = cart.find((product) => product.id === individualProduct.id);
    // console.log(existingProduct.id);
    if (!existingProduct) {
      individualProduct.quantity = 1;
      newCart = [...cart, individualProduct];
    } else {
      // ekhane restproduct hocche jegular quantity barano hoy nai segula ber kora hoice
      const restProduct = cart.filter((product) => product.id !== individualProduct.id);
      //jodi theke thake to existing gular quantity barano hocche
      existingProduct.quantity += 1;
      //jegula barano hoy nai segula rest product e ase ar existing tar quantity 1 barano hoice
      newCart = [...restProduct, existingProduct];
    }
    setCart(newCart);
    localDB(individualProduct.id);
  };

  // using useEffect to find local storage value
  useEffect(() => {
    // taken value of local storage value
    const storedCart = getStoredCart();

    // declaring newcart to send it to local storage
    const newSavedCart = [];

    // looping through every stored card
    for (const id in storedCart) {
      // finding added product from local storage comparing to local storage
      //dekha hocche local srorage e thaka product id er sathe products er id mile naki
      const addedProduct = products.find((product) => product.id === id);

      //local storage e thaka same id thakle eitar quantity save kora hocche
      if (addedProduct) {
        const quantity = storedCart[id];
        //click korbo jotobar totobar save hobe
        addedProduct.quantity = quantity;
        newSavedCart.push(addedProduct);
      }
    }
    // it's better to saving set new cart after looping
    //tar por eita daane thaka cart er state banay dicche fole updated thaktece
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
