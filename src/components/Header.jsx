import { Link, useLocation } from "react-router-dom";
import useScrollDirection from "../hook/useScrollDirection";
import header from "../img/header.png";

const Header = ({ mobil, menu, handleMenu }) => {
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`header ${scrollDirection === "down" ? "show" : "hide"}`}
    >
      {mobil ? (
        <div>
          <Link to="/">
            <img src={header} alt="México Sustentable IMG" />
          </Link>
          <nav>
            {menu ? (
              <span className="material-symbols-outlined" onClick={handleMenu}>
                menu_open
              </span>
            ) : (
              <span className="material-symbols-outlined" onClick={handleMenu}>
                menu
              </span>
            )}
          </nav>
        </div>
      ) : (
        <div>
          <Link className="link-img" to="/">
            <img src={header} alt="México Sustentable IMG" />
          </Link>
          <nav>
            <Link
              className={`link ${
                location.pathname == "/deforestacion" ? "activate" : null
              }`}
              to="/deforestacion"
            >
              Deforestación
            </Link>
            <Link
              className={`link ${
                location.pathname == "/contaminacion" ? "activate" : null
              }`}
              to="/contaminacion"
            >
              Contaminación
            </Link>
            <Link
              className={`link ${
                location.pathname == "/desertificacion" ? "activate" : null
              }`}
              to="/desertificacion"
            >
              Desertificación
            </Link>
            <Link
              className={`link ${
                location.pathname == "/energia-nuclear" ? "activate" : null
              }`}
              to="/energia-nuclear"
            >
              Energía Nuclear
            </Link>
            <Link
              className={`link ${
                location.pathname == "/juego" ? "activate" : null
              }`}
              to="/juego"
            >
              Juego
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
