import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import ItemDetails from "../ItemDetails/ItemDetails.jsx";
import { products } from "../Item/Items.jsx";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = ({ greetings }) => {
  const { id } = useParams();
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
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
