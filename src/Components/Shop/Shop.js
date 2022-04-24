import "./Shop.css";
import React, { useEffect, useState } from "react";
// Components
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";
import { localDB } from "../LocalStorage/LocalStorage";
import { useProducts } from "../CustomHook/useProduct";
import useCart from "../CustomHook/useCart";

// main rendering part here
const Shop = () => {
  // products card state here and also it is a custom hook made by me
  const [products, setProducts, pages] = useProducts();

  //sideline cart state here same custom hook
  const [cart, setCart] = useCart(products);

  //setting state for button of pagination
  const [pageNo, setPageNo] = useState(0);

  //setting state for value chnage per change
  const [size, setSize] = useState(15);

  //sending to server again to find required data

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${pageNo}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [pageNo, size]);

  // event handler added to update cart
  const handleAddToCart = (individualProduct) => {
    let newCart = [];
    const existingProduct = cart.find((product) => product._id === individualProduct._id);

    if (existingProduct) {
      // ekhane restproduct hocche jegular quantity barano drkr nai segula
      const restProduct = cart.filter((product) => product._id !== individualProduct._id);

      //jodi theke thake to existing gular quantity barano hocche
      existingProduct.quantity += 1;

      //jegula barano hoy nai segula rest product e ase ar existing tar quantity 1 baray newCart e save kore dilam
      newCart = [...restProduct, existingProduct];
    } else {
      // jodi na pawa jaay tahole bakigula quantity 1 rakhbe
      individualProduct.quantity = 1;
      newCart = [...cart, individualProduct];
    }
    setCart(newCart);
    localDB(individualProduct._id);
  };

  //clear the cart by removing from local storage
  const clearTheCart = () => {
    setCart([]);
    localStorage.removeItem("shopping_cart");
  };

  return (
    // main section under navbar
    <section className="main-container">
      {/* Only product parts */}
      <div>
        <div className="product-container">
          {products.map((product) => (
            <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>
          ))}
        </div>

        <div className="flex items-center justify-center my-10 space-x-4">
          {[...Array(pages).keys()].map((number, i) => (
            <button
              key={i}
              onClick={() => setPageNo(number)}
              className={` p-3 ${pageNo === number ? "bg-[#FF9900]" : "bg-yellow-100"}`}
            >
              {number}
            </button>
          ))}
          {
            <select name="select" id="" onChange={(e) => setSize(e.target.value)}>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          }
        </div>
      </div>

      {/* cart part right side */}
      <div className="cart-container">
        {/* sending cart information */}
        <Cart clearTheCart={clearTheCart} cart={cart}>
          <p>Review Order</p>
        </Cart>
        {/* ekhane children akare 1st e 
        p tag er likha ta pathailam*/}
      </div>
    </section>
  );
};

export default Shop;
