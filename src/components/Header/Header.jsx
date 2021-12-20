import logo from "../assets/murakami-logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
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
                <Link to="/genero/Realism" className="nav-item nav-link">
                  <button type="button" className="btn btn-light">
                    REALISM
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
                <CartWidget />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
