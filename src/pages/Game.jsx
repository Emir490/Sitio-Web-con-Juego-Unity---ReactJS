import { useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

import logo from "../img/webgl.png";
import full from "../img/fullscreen.png";

const Game = ({
  mobil,
  menu,
  animatedMenu,
  handleMenu,
  closeMenu,
  unload,
  handleClick,
  unityProvider,
  Unity,
  isLoaded,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
      <Header
        mobil={mobil}
        menu={menu}
        handleMenu={handleMenu}
        unload={unload}
      />
      <main className="main">
        <div className="widget">
          <h2>Instrucciones</h2>
          {mobil ? (
            <>
              <p>
                Presiona clic al monstruo dentro de él para coleccionarlo.
                Avanzando en el videojuego, te encontrarás con monstruos que se
                mueven por todas partes, intenta coleccionar todos y salva el
                mundo del robo de su naturaleza reciclando estos monstruos!{" "}
                <span>Desliza hacía arriba para salir del juego</span>
              </p>
              <Link to="/jugar" className="play-button">
                Jugar
              </Link>
            </>
          ) : (
            <>
              <p>
                Presiona clic al monstruo dentro de él para coleccionarlo.
                Avanzando en el videojuego, te encontrarás con monstruos que se
                mueven por todas partes, intenta coleccionar todos y salva el
                mundo del robo de su naturaleza reciclando estos monstruos!
              </p>
              <ClipLoader
                className="override"
                loading={!isLoaded}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <Unity
                className={`${mobil ? "game-mobil" : "game"}`}
                style={{
                  width: "100%",
                  height: "70vh",
                }}
                unityProvider={unityProvider}
              />
              <div className="game-images">
                <img src={logo} alt="imagen logo" />
                <img src={full} alt="imagen fullscreen" onClick={handleClick} />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
      {menu && (
        <Menu
          handleMenu={handleMenu}
          animatedMenu={animatedMenu}
          closeMenu={closeMenu}
          unload={unload}
        />
      )}
    </>
  );
};

export default Game;
