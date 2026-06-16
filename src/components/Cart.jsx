import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems);
  const isDarkMode = true;
  return <div>Cart</div>;
};

export default Cart;
