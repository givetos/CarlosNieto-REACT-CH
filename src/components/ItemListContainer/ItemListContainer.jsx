import "./index.css";
import React, { useState, useEffect } from "react";
import ItemList from "./Item/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Fragment } from "react";

const ItemListContainer = ({ greetings }) => {
  const [items, setItems] = useState([]);
  const { generoId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const ref = collection(db, "products");
    const filtrado = generoId
      ? query(ref, where("generoId", "==", generoId))
      : ref;
    getDocs(filtrado).then(snapshot => {
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(products);
    });
  }, [generoId]);

  return (
    <Fragment>
      <h1 className="title-color">{greetings}</h1>
      <ItemList items={items} />
    </Fragment>
  );
};

export default ItemListContainer;
