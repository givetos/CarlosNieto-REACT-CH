import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import "./index.css";
import BackHome from "../BackHome/BackHome.jsx";
import Order from "../Order/Order";

const Cart = () => {
  const { cart, borrar, precioTotal, getUser } = useContext(CartContext);

  const [goTicket, setGoTicket] = useState(false);
  const [form, getForm] = useState({ nombre: "", email: "" });

  const llenarFormulario = e => {
    const { name, value } = e.target;
    getForm({
      ...form,
      [name]: value,
    });
  };

  const date = new Date();

  const finalizar = () => {
    getUser(form);
    const db = getFirestore();
    const ref = collection(db, "ticket");
    const newOrder = {
      buyer: form.email,
      items: cart,
      date: date,
      total: precioTotal(),
    };
    addDoc(ref, newOrder);
    setGoTicket(true);
  };

  return (
    <>
      <>
        {!goTicket ? (
          <>
            {cart.map(item => (
              <CartDetail key={item.id} item={item} />
            ))}
            <div className="contentTotal">
              <p style={{ marginLeft: "10px" }}>Total: ${precioTotal()}</p>
              <button
                className="btn btn-secondary"
                style={{ marginLeft: "10px" }}
                onClick={borrar}
              >
                Clear
              </button>
              <BackHome />
            </div>
            <br />
            <form
              style={{ marginBottom: "20px", marginLeft: "10px" }}
              method="Post"
              onSubmit={finalizar}
            >
              <input
                onChange={llenarFormulario}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                onChange={llenarFormulario}
                type="text"
                name="nombre"
                placeholder="Name"
              />
              <button
                className="btn-lg btn-secondary"
                style={{ marginLeft: "5px" }}
                disabled={
                  cart?.length === 0 || form.nombre === "" || form.email === ""
                }
              >
                Buy
              </button>
            </form>
          </>
        ) : (
          <>
            <Order />
          </>
        )}
      </>
    </>
  );
};

export default Cart;
