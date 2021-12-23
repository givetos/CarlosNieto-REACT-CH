import React from "react";

const Mensaje = ({ ord }) => {
  const nombreprod = ord.items.map(x => x.nombre);
  const { buyer } = ord;

  return (
    <div style={{ border: "1px solid black", margin: "30px", padding: "7px" }}>
      <p>Purchase ID: {ord.id}</p>
      <p>Date: {ord.date}</p>
      <p>Product: {nombreprod}</p>
      <p>Email: {buyer}</p>
    </div>
  );
};

export default Mensaje;
