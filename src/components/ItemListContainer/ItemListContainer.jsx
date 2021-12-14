import "./index.css";
import React, { useState, useEffect } from "react";
import ItemList from "./Item/ItemList";
import { products } from "./Item/Items.jsx";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

const ItemListContainer = ({ greetings }) => {
  const { generoId } = useParams();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    const traerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    });
    traerProductos
      .then(res => {
        const filtrado = res.filter(prod => prod.generoId === generoId);

        generoId ? setItems(filtrado) : setItems(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, [generoId]);

  return loader ? (
    <h1>Loading products...</h1>
  ) : (
    <Fragment>
      <h1 className="title-color">{greetings}</h1>
      <ItemList items={items} />
    </Fragment>
  );
};

export default ItemListContainer;
