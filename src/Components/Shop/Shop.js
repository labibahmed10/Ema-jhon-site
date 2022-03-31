import "./Shop.css";
import React from "react";
// Components
import Cart from "../Cart/Cart";
import Product from "../Product-single-card/Product";
import { getStoredCart, localDB } from "../LocalStorage/LocalStorage";
import { useProducts } from "../CustomHook/useProduct";
import useCart from "../CustomHook/useCart";

// main rendering part here
const Shop = () => {
  // products card state here and also it is a custom hook made by me
  const [products, setProducts] = useProducts();

  //sideline cart state here same custom hook
  const [cart, setCart] = useCart(products);

  // event handler added to update cart
  const handleAddToCart = (individualProduct) => {
    let newCart = [];
    const existingProduct = cart.find((product) => product.id === individualProduct.id);
    // console.log(existingProduct.id);

    if (existingProduct) {
      // ekhane restproduct hocche jegular quantity barano drkr nai segula
      const restProduct = cart.filter((product) => product.id !== individualProduct.id);

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
    localDB(individualProduct.id);
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
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>

      {/* cart part right side */}
      <div className="cart-container">
        {/* sending cart information */}
        <Cart clearTheCart={clearTheCart} cart={cart}></Cart>
      </div>
    </section>
  );
};

export default Shop;
