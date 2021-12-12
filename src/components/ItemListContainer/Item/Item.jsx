import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <Link to={`/item/${item.id}`}>
              <img src={item.img} className="card-img" alt={item.nombre} />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">Price: $ {item.precio}</p>
              <p className="card-text">Gender: {item.generoId}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
