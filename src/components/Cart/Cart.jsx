import { useContext } from "react";
import { useDeleteFromCart } from "../../context/CartContext.jsx";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, borrar } = useContext(CartContext);
  const deleteProduct = useDeleteFromCart();
  return (
    <>
      {cart.map(item => (
        <div key={item.id}>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-2">
                <Link to={`/item/${item.id}`}>
                  <img src={item.img} className="card-img" alt={item.nombre} />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">Price: $ {item.precio}</p>
                  <p className="card-text">Genre: {item.generoId}</p>
                  <p className="card-text">Quantity: {item.cantidad}</p>
                  <button onClick={() => deleteProduct(item)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button onClick={borrar}>Clear</button>
    </>
  );
};

export default Cart;
