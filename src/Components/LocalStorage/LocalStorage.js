const localDB = (id) => {
  let localStrgValue = {};

  const localValue = localStorage.getItem("shopping_cart");

  if (localValue) {
    localStrgValue = JSON.parse(localValue);
  }

  const itemQuantity = localStrgValue[id];

  if (itemQuantity) {
    localStrgValue[id] = itemQuantity + 1;
  } else {
    localStrgValue[id] = 1;
  }

  localStorage.setItem("shopping_cart", JSON.stringify(localStrgValue));
};

localDB();

export { localDB };
