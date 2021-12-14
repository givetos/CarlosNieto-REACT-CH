import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./index.css";

import { Link } from "react-router-dom";

const BackHome = () => {
  const { cart } = useContext(CartContext);

  return cart.length > 0 ? (
    <>
      <div></div>
    </>
  ) : (
    <Link to="/">
      <button className="btn btn-secondary margin-left">Back Home</button>
    </Link>
  );
};

export default BackHome;
