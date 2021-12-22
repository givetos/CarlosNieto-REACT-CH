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
              <p>Total: ${precioTotal()}</p>
              <button onClick={borrar}>Clear</button>
              <BackHome />
            </div>
            <br />
            <form method="Post" onSubmit={finalizar}>
              <input
                onChange={llenarFormulario}
                type="email"
                name="email"
                placeholder="email"
              />
              <input
                onChange={llenarFormulario}
                type="text"
                name="nombre"
                placeholder="nombre"
              />
              <button
                disabled={
                  cart?.length === 0 || form.nombre === "" || form.email === ""
                }
              >
                Comprar
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
