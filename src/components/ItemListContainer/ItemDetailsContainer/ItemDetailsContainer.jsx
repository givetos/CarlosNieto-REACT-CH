import React, { useState, useEffect } from "react";
import ItemDetails from "../ItemDetails/ItemDetails.jsx";
import { products } from "../Item/Items.jsx";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetailsContainer = ({ greetings }) => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoader(true);
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
  }, [id]);

  const onAdd = cantidad => {
    console.log({ ...item, quantity: cantidad });
    addToCart(item, cantidad);
    setIrAlCarrito(true);
  };

  return loader ? (
    <h1>Loading product...</h1>
  ) : (
    <Fragment>
      <h1 className="Titulo_color">{greetings}</h1>
      <ItemDetails item={item} onAdd={onAdd} irAlCarrito={irAlCarrito} />
    </Fragment>
  );
};

export default ItemDetailsContainer;
