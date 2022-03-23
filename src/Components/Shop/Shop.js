import "./Shop.css";
import React, { useEffect, useState } from "react";
// Components
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";

// main rendering part here
const Shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    // main section under navbar
    <section className="main-container">
      {/* Only product parts */}
      <div className="product-container">
        {product.map((shoe) => (
          <Product key={shoe.id} shoe={shoe}></Product>
        ))}
      </div>

      {/* cart part right side */}
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </section>
  );
};

export default Shop;
