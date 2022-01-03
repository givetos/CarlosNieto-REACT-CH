import React from "react";

const Mensaje = ({ ord }) => {
  const { buyer } = ord;

  return (
    <>
      {ord.items.map(ticket => (
        <div
          style={{ border: "1px solid black", margin: "30px", padding: "7px" }}
        >
          <p>Ticket ID: {ord.id}</p>
          <p>Date: {ord.date}</p>
          <p>Product: {ticket.nombre}</p>
          <p>Email: {buyer}</p>
          <p>Total Price: ${ord.total}</p>
        </div>
      ))}
    </>
  );
};

export default Mensaje;
