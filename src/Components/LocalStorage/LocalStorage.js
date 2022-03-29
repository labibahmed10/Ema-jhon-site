const getStoredCart = () => {
  let localStrgValue = {}; //local storage er value

  const localValue = localStorage.getItem("shopping_cart");

  if (localValue) {
    localStrgValue = JSON.parse(localValue);
  }

  return localStrgValue; //local storage er object ta ke return korlam parse kore
};

const localDB = (id) => {
  let localStrgValue = getStoredCart();

  const itemQuantity = localStrgValue[id];

  if (itemQuantity) {
    localStrgValue[id] = itemQuantity + 1;
  } else {
    localStrgValue[id] = 1;
  }

  localStorage.setItem("shopping_cart", JSON.stringify(localStrgValue));
};
  
export { localDB, getStoredCart };
