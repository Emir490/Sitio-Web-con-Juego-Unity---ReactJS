import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

import Contaminacion from "./pages/Contaminacion";
import Deforestacion from "./pages/Deforestacion";
import Desierto from "./pages/Desierto";
import Game from "./pages/Game";
import Index from "./pages/Index";
import Jugar from "./pages/Jugar";
import Nuke from "./pages/Nuke";

function App() {
  const [mobil, setMobil] = useState(false);
  const [menu, setMenu] = useState(false);
  const [animatedMenu, setAnimatedMenu] = useState(false);

  const { unityProvider, requestFullscreen, isLoaded, unload } = useUnityContext({
    loaderUrl: "Build/DS.loader.js",
    dataUrl: "Build/DS.data.unityweb",
    frameworkUrl: "Build/DS.framework.js.unityweb",
    codeUrl: "Build/DS.wasm.unityweb",
  });

  const handleClick = () =>  {
    requestFullscreen(true)
  }

  const quit = async () => {
    window.scrollTo(0, 0)
    if (isLoaded) {
      await unload();
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setMobil(true);
    } else {
      setMobil(false);
    }
  };

  const handleMenu = async () => {
    if (menu) {
      setAnimatedMenu(false);
      setMenu(false);
      await unload();
      window.scrollTo(0, 0)
    } else {
      setMenu(true);

      setTimeout(() => {
        setAnimatedMenu(true);
      }, 300);
    }
  };

  const closeMenu = () => {
    if (menu) {
      setAnimatedMenu(false);
      setMenu(false);
    } else {
      setMenu(true);

      setTimeout(() => {
        setAnimatedMenu(true);
      }, 300);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Index
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                closeMenu={closeMenu}
                quit={quit}
              />
            }
          />
          <Route
            path="deforestacion"
            element={
              <Deforestacion
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                quit={quit}
              />
            }
          />
          <Route
            path="contaminacion"
            element={
              <Contaminacion
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                closeMenu={closeMenu}
                quit={quit}
              />
            }
          />
          <Route
            path="desertificacion"
            element={
              <Desierto
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                closeMenu={closeMenu}
                quit={quit}
              />
            }
          />
          <Route
            path="energia-nuclear"
            element={
              <Nuke
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                closeMenu={closeMenu}
                unload={unload}
                quit={quit}
              />
            }
          />
          <Route
            path="juego"
            element={
              <Game
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                closeMenu={closeMenu}
                handleClick={handleClick}
                unload={unload}
                Unity={Unity}
                unityProvider={unityProvider}
                requestFullscreen={requestFullscreen}
                isLoaded={isLoaded}
              />
            }
          />
          <Route
            path="jugar"
            element={
              <Jugar
                mobil={mobil}
                menu={menu}
                animatedMenu={animatedMenu}
                setAnimatedMenu={setAnimatedMenu}
                handleMenu={handleMenu}
                closeMenu={closeMenu}
                handleClick={handleClick}
                unload={unload}
                Unity={Unity}
                unityProvider={unityProvider}
                requestFullscreen={requestFullscreen}
                isLoaded={isLoaded}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
