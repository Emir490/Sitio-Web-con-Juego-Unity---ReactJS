import { Link } from "react-router-dom";

const Menu = ({ handleMenu, animatedMenu, closeMenu }) => {
  return (
    <div className="menu" onClick={closeMenu}>
      <span className="material-symbols-outlined cerrar-menu">menu_open</span>
      <nav className={`nav ${animatedMenu ? "animate" : "close"}`}>
        <Link
          className={`link ${
            location.pathname == "/" ? "activate-mobil" : null
          }`}
          to="/"
          onClick={handleMenu}
        >
          Inicio
        </Link>
        <Link
          className={`link ${
            location.pathname == "/deforestacion" ? "activate-mobil" : null
          }`}
          to="/deforestacion"
          onClick={handleMenu}
        >
          Deforestación
        </Link>
        <Link
          className={`link ${
            location.pathname == "/contaminacion" ? "activate-mobil" : null
          }`}
          to="/contaminacion"
          onClick={handleMenu}
        >
          Contaminación
        </Link>
        <Link
          className={`link ${
            location.pathname == "/desertificacion" ? "activate-mobil" : null
          }`}
          to="/desertificacion"
          onClick={handleMenu}
        >
          Desertificación
        </Link>
        <Link
          className={`link ${
            location.pathname == "/energia-nuclear" ? "activate-mobil" : null
          }`}
          to="/energia-nuclear"
          onClick={handleMenu}
        >
          Energía Nuclear
        </Link>
        <Link
          className={`link ${
            location.pathname == "/juego" ? "activate-mobil" : null
          }`}
          to="/juego"
          onClick={handleMenu}
        >
          Juego
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
