import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import ItemDetails from "../ItemDetails/ItemDetails.jsx";
//import { products } from "../Item/Items.jsx";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../../context/CartContext";

const ItemDetailsContainer = ({ greetings }) => {
  const [item, setItem] = useState({});
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "products", id);
    getDoc(ref).then(snap => {
      setItem({
        id: snap.id,
        ...snap.data(),
      });
    });
  }, [id]);

  //Logica anterior a Firebase:
  /* useEffect(() => {
    const traerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    });
    traerProductos
      .then(res => {
        const producto = res.find(prod => prod.id === parseInt(`${id}`));
        setItem(producto);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]); */

  const onAdd = cantidad => {
    console.log({ ...item, quantity: cantidad });
    addToCart(item, cantidad);
    setIrAlCarrito(true);
  };

  return (
    <Fragment>
      <h1 className="Titulo_color">{greetings}</h1>
      <ItemDetails item={item} onAdd={onAdd} irAlCarrito={irAlCarrito} />
    </Fragment>
  );
};

export default ItemDetailsContainer;
