import logo from "../assets/murakami-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="pl-2" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">
                  <button type="button" className="btn btn-light">
                    HOME
                  </button>
                </Link>
                <Link
                  to="/genero/Magical Realism"
                  className="nav-item nav-link"
                >
                  <button type="button" className="btn btn-light">
                    MAGICAL REALISM {/* <span className="sr-only"></span> */}
                  </button>
                </Link>
                <Link to="/genero/Biography" className="nav-item nav-link">
                  <button type="button" className="btn btn-light">
                    BIOGRAPHY
                  </button>
                </Link>
                <Link to="/genero/Romance" className="nav-item nav-link">
                  <button type="button" className="btn btn-light">
                    ROMANCE
                  </button>
                </Link>
                <Link to="/cart" className="nav-item nav-link">
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                      id="botonCarrito"
                    >
                      Cart{" "}
                      <span id="carritoCantidad" className="badge badge-light">
                        0
                      </span>
                    </button>
                    <div
                      className="modal fade bd-example-modal-lg"
                      id="carrito"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content" id="carritoProducto">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Subtotal x Quantity</th>
                              </tr>
                            </thead>
                            <tbody id="containerProductos"></tbody>
                          </table>

                          <div id="total">
                            Total Price: $ <span id="precioFinal"></span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            id="btnConfirmar"
                          >
                            Confirm Purchase
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div></div>
            <div></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
