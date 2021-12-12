import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetails = ({ item, onAdd, irAlCarrito }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={item.img} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Author: <b> {item.autor}</b>
              </h5>
              <h5 className="card-title">
                Title: <b> {item.nombre}</b>
              </h5>
              <p className="card-text">Price: $ {item.precio}</p>
              <p className="card-text">Genre: {item.generoId}</p>
              <div>
                <p>Stock: {item.stock}</p>
              </div>
              <div>
                {irAlCarrito ? (
                  <>
                    <Link to="/Cart">
                      {" "}
                      <button>Confirm Purchase</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <ItemCount stock={item.stock} onAdd={onAdd} item={item} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
