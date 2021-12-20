import "./index.css";
import React, { useState, useEffect } from "react";
import ItemList from "./Item/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
//import { products } from "./Item/Items.jsx";
import { Fragment } from "react";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const db = getFirestore();
    const ref = collection(db, "products");
    getDocs(ref).then(snapshot => {
      const products = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const categorias = products.filter(i => i.category === `${id}`);
      id === undefined ? setItems(products) : setItems(categorias);
    });
  }, [id]);

  return (
    <Fragment>
      <h1 className="title-color">{greetings}</h1>
      <ItemList items={items} />
    </Fragment>
  );
};

//Codigo anterior a Firebase:
/* useEffect(() => {
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
  }, [generoId]); */

export default ItemListContainer;
