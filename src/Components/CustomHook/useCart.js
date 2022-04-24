import { useEffect, useState } from "react";
import { getStoredCart } from "../LocalStorage/LocalStorage";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();

    const savedCart = [];

    const keys = Object.keys(storedCart);
    console.log(keys);

    fetch("http://localhost:5000/productForCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);

        for (const id in storedCart) {
          const addededProduct = products.find((item) => item._id === id);

          if (addededProduct) {
            addededProduct.quantity = storedCart[id];
            savedCart.push(addededProduct);
          }
        }
      });

    setCart(savedCart);
  }, []);

  return [cart, setCart];
};

export default useCart;
