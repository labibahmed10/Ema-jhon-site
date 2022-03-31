import { useEffect, useState } from "react";
import { getStoredCart } from "../LocalStorage/LocalStorage";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addededProduct = products.find((item) => item.id === id);

      if (addededProduct) {
        addededProduct.quantity = storedCart[id];
        savedCart.push(addededProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
