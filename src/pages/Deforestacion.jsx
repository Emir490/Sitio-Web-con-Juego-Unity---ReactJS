import { useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

import monster from "../img/Monster6.png";
import deforesta from "../img/Deforesta1.png";
import deforesta2 from "../img/Deforesta2.png";
import deforestacion from "../img/deforestacion.jpg"

const Deforestacion = ({ mobil, menu, animatedMenu, handleMenu, closeMenu, quit }) => {
  useEffect(() => {
    quit();
  }, []);
  return (
    <>
      <Header mobil={mobil} menu={menu} handleMenu={handleMenu} />
      <main className="main">
        <section className="main-container">
          <div className="widget">
            <h2>Deforestación</h2>
            <p>
              La deforestación es el proceso de despojar un bosque o terreno
              forestal de todas las plantas y árboles que forman parte de su
              vegetación. Como problema medioambiental, la deforestación se
              presenta cuando el ser humano lleva a cabo un proceso de tala de
              árboles a gran escala y de forma descontrolada, sin consideración
              por las consecuencias negativas que puede acarrear.
            </p>
            <div className="main-images">
              <img src={deforesta} alt="imagen deforestacion" />
            </div>
          </div>
          <div className="widget">
            <h2>Causas</h2>
            <p>
              <span>Agricultura.</span> En la búsqueda de disponer de espacio
              libre para plantar y cosechar comida, fibras y biocombustibles,
              tanto la agricultura para consumo propio como para su
              comercialización, constituyen una de las principales causas de
              deforestación alrededor del mundo.
            </p>
            <p>
              <span>Nuevas Construcciones.</span> La construcción de
              infraestructuras para el uso del ser humano para satisfacer las
              necesidades del estilo de vida actual de la población, como
              podrían ser el transporte tanto de personas como de recursos y la
              generación de energía. Entre estas se encuentran carreteras, vías
              férreas, puertos y aeropuertos para movilizar recursos como
              cereales, frutas, minerales, combustibles fósiles, entre otros.
            </p>
            <p>
              <span>Urbanización.</span> Debido a la migración interna de
              personas que pasan de vivir en zonas rurales a áreas urbanas, es
              generado un crecimiento en las ciudades que requiere la
              construcción de viviendas y sitios de consumo. Al crecer, las
              ciudades se ven obligadas a expandir sus fronteras más allá de la
              naturaleza que los rodea para poder satisfacer las necesidades de
              sus habitantes.
            </p>
            <div className="main-images">
              <img src={deforesta2} alt="imagen deforestacion" />
            </div>
          </div>
          <div className="widget">
            <h2>Consecuencias</h2>
            <p>
              <span>Amenaza a la biodiversidad.</span> Al destruir los bosques,
              la actividad humana pone en peligro ecosistemas enteros, alterando
              el equilibrio y amenazando la existencia misma de aves, insectos,
              anfibios y plantas, entre otros, que habitan los bosques afectados
              por la deforestación.
            </p>
            <p>
              <span>Erosión del suelo.</span> La deforestación debilita y
              degrada el suelo en el que estaban plantando los árboles que son
              removidos. El suelo de los bosques es rico en materia orgánica y
              resistente a la erosión y climas extremos, ayudado por las raíces
              bajo la tierra y las hojas de los árboles que lo protegen. La
              deforestación hace las áreas afectadas frágiles y más vulnerables
              ante los desastres naturales.
            </p>
            <p>
              <span>Cambio climático.</span> Los árboles absorben y almacenan
              CO2 a lo largo de sus vidas, liberando este a la atmósfera al ser
              talados. Así mismo, la deforestación hace que se reduzca el número
              de árboles y por lo tanto la capacidad de la tierra para retener y
              almacenar CO2, contribuyendo al efecto invernadero y cambio
              climático.
            </p>
            <div className="main-images">
              <img src={monster} alt="imagen deforestacion" />
            </div>
          </div>
          <div className="widget">
            <h2>Ejemplo</h2>
            <p>
              México ocupa uno de los primeros lugares en el mundo en cuanto a
              tasas de deforestación. Existen diversas estimaciones de las tasas
              de deforestación a nivel nacional. Comisión Nacional Forestal
              (Conafor) La tasa de deforestación anual estimada en 2018, según
              el informe de la Comisión Nacional Forestal (Conafor) Las
              estimaciones de la tasa de deforestación general de México por
              orden de 2001 a 2018 se calculó en 166,000,337 hectáreas. Esto es
              más del doble de la tasa de deforestación total estimada en 79.677
              hectáreas hace 17 años. El año de mayor deforestación en México
              fue 2016, cuando se destruyeron 350,000 298 hectáreas de bosque.
            </p>
            <p>
              Las principales causas de la deforestación en México, en ese
              orden, son el aumento de fronteras para la agricultura y la
              ganadería. Tala ilegal e incendios forestales. Expansión de áreas
              urbanas e industriales. plaga de plantas
            </p>
            <p>
              Algunas de las causas indirectas de la deforestación son la
              demografía de los bosques y los grupos migratorios. Bajo costo de
              tierra, mano de obra, combustible o madera. precios más altos de
              los cultivos, políticas que promuevan la deforestación; Falta de
              planes integrales de gestión de la tierra que incluyan subsidios
              gubernamentales para desarrollar actividades ganaderas, frutícolas
              o energéticas en áreas de base forestal
            </p>
            <ul>
              <li>Empeora el cambio climático </li>
              <li>Profundiza la pobreza</li>
            </ul>
            <p>
              Hay 15.584 núcleos agrícolas, que cubren un área de más de 200
              hectáreas, incluyendo 62,6 millones de hectáreas de vegetación
              forestal, selva densa y selva seca, que representan el 45% de la
              superficie forestal del país.
            </p>
            <div className="main-images">
              <img src={deforestacion} alt="imagen ejemplo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {menu && <Menu handleMenu={handleMenu} animatedMenu={animatedMenu} closeMenu={closeMenu} />}
    </>
  );
};

export default Deforestacion;
