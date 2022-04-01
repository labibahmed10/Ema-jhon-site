import React from "react";
import "./SingleCart.css";
import { TrashIcon } from "@heroicons/react/solid";

const SingleCart = ({ item }) => {
  const { img, name, price, quantity, shipping } = item;
  return (
    <div>
      <div className="review-cart">
        <div className="review-orders">
          <img src={img} alt="" />
          <div>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p>Shipping: {shipping}</p>
            <p>Piece: {quantity}</p>
          </div>
        </div>
        <TrashIcon className="beaker"></TrashIcon>
      </div>
    </div>
  );
};

export default SingleCart;
