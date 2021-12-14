import React, { useContext } from "react";
import "./index.css";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { unidades } = useContext(CartContext);

  return (
    <>
      <div className="cartContainer">
        <IoCartOutline className="cart" />
        <span>{unidades()}</span>
      </div>
    </>
  );
};

export default CartWidget;
