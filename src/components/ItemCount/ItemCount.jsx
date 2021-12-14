import { useState, useContext } from "react";
import CartContext from "../../context/CartContext.jsx";
import "./index.css";

const ItemCount = ({ stock, onAdd, item }) => {
  const { addToCart } = useContext(CartContext);
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    number !== stock && setNumber(number + 1);
  };

  const onDecrease = () => {
    number !== 0 && setNumber(number - 1);
  };

  return (
    <div>
      <h6>{`Quantity: ${number}`}</h6>

      <button className="btn btn-secondary margin-right" onClick={onIncrease}>
        +
      </button>
      <button className="btn btn-secondary margin-right" onClick={onDecrease}>
        -
      </button>
      <button
        className="btn btn-secondary margin-right"
        disabled={number === 0}
        onClick={() => addToCart(item, number)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;
