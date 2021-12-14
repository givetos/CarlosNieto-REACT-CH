import React, { useContext } from "react";
import "./index.css";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return cart.length > 0 ? (
    <>
      <div>
        <Link to="/cart" className="nav-item nav-link">
          <IoCartOutline className="cart" />
          <span> {cart.length} </span>
        </Link>
      </div>
    </>
  ) : null;
};

export default CartWidget;
