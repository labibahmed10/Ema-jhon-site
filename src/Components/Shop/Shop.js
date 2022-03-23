import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";

const Shop = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section className="main-container">
      <div className="product-container">
        {product.map((shoe) => (
          <Product key={shoe.id} shoe={shoe}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart></Cart>
      </div>
    </section>
  );
};

export default Shop;
