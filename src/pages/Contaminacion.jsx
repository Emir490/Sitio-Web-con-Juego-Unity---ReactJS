import { useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

import monster from "../img/Monster4.png";
import contamina from "../img/Contamina1.png";
import contamina2 from "../img/Contamina2.png";
import contaminacion from "../img/contaminacion.jpg";

const Contaminacion = ({ mobil, menu, animatedMenu, handleMenu, closeMenu, quit }) => {
  useEffect(() => {
    quit();
  }, []);
  return (
    <>
      <Header mobil={mobil} menu={menu} handleMenu={handleMenu} />
      <main className="main">
        <section className="main-container">
          <div className="widget">
            <h2>Contaminación</h2>
            <p>
              La contaminación es el ingreso de elementos o sustancias a un
              ecosistema, los cuales normalmente no deberían estar en él y que
              afectan su equilibrio.
            </p>
            <p>
              Como ejemplo, en alimentos y bebidas existen sustancias o
              componentes en concentraciones mínimas que no afectan la salud de
              quienes los consumen, pero el problema de la contaminación
              comienza cuando los niveles aumentan y sobrepasan un cierto
              límite.
            </p>
            <p>
              Los agentes contaminantes pueden ser físicos, químicos o
              biológicos y afectan a distintos medios como agua, suelo y aire al
              presentarse en elevadas concentraciones.
            </p>
            <p>
              En los ecosistemas habita un conjunto de diversos organismos que
              interactúan entre sí, cuyas condiciones son alteradas por los
              compuestos o agentes contaminantes, dando como resultado muchos y
              muy variados problemas en donde se encuentran incluidos los de
              salud o de seguridad, malestar e incluso la muerte.
            </p>
            <div className="main-images">
              <img src={monster} alt="imagen contamina" />
            </div>
          </div>
          <div className="widget">
            <h2>Contaminación del agua</h2>
            <p>
              Causada por la incorporación de agentes, materias, elementos y
              partículas en el agua, dentro de los cuales se encuentran
              microorganismos, productos químicos, residuos industriales y otros
              tipos o aguas residuales. Las consecuencias de la presencia de
              estas materias incluyen el deterioro de la calidad del agua y
              privarla de su capacidad para ser consumida o incluso habitada por
              seres vivos.
            </p>
            <p>
              Causada por la incorporación de basura, desechos tóxicos,
              productos químicos, y desechos industriales al suelo en distintas
              áreas, dentro o fuera de los espacios habitados por los seres
              humanos.
            </p>
            <p>
              Las consecuencias de dichos agentes contaminantes incluyen la
              producción de un desequilibrio tanto físico, químico y biológico
              que afecta negativamente a plantas, animales y humanos que
              requerían del espacio físico para habitarlo y obtener recursos
              necesarios para su supervivencia.
            </p>
            <div className="main-images">
              <img src={contamina} alt="imagen contaminacion" />
            </div>
          </div>
          <div className="widget">
            <h2>Contaminación del aire</h2>
            <p>
              Causada por la presencia excesiva de gases como el dióxido de
              carbono, el metano y los óxidos de nitrógeno y de azufre, o de
              algún tipo de material particulado en la atmósfera terrestre.
              Tiene como consecuencias la generación de un desequilibrio en el
              estado óptimo de la atmósfera y efectos en el normal desarrollo de
              plantas, animales y la salud de los humanos, sobre todo en las
              grandes ciudades por su alta concentración de procesos
              industriales y medios de transporte que requieren de la quema de
              combustibles fósiles para su funcionamiento.
            </p>
            <div className="main-images">
              <img src={contamina2} alt="imagen contaminacion" />
            </div>
          </div>
          <div className="widget">
            <h2>Ejemplo</h2>
            <p>
              Cada semana, el programa Tijuana Waterkeeper lleva a cabo
              muestreos y análisis de agua en cinco puntos de la costa de
              Tijuana (El Faro, Parque México, Cañada Azteca, El Vigía y Playa
              Blanca), bajo lineamientos nacionales e internacionales en la
              medición de parámetros físico-químicos.
            </p>
            <p>
              El más reciente análisis, del 18 de agosto, muestra que en cuatro
              de las cinco playas de Tijuana la calidad de agua fue apta para
              uso recreativo. Con 309, Playa Blanca fue el único punto con
              resultado negativo.
            </p>
            <p>
              La contaminación del agua en los litorales de Tijuana y Rosarito
              preocupa debido a los escurrimientos de fraccionamientos sin
              conexión a la red sanitaria de ambas ciudades, arroyos y el Río
              Tijuana con desechos, así como la deficiente operación de la
              planta de tratamiento Punta Bandera en San Antonio de Los Buenos:
              ambientalistas. Datos del primer laboratorio comunitario de
              Latinoamérica indican que los niveles más altos de enterococos en
              El Faro se registraron el 3 de febrero, con 7 mil 701 MNP por 100
              ml. En el Parque México, el 8 de julio, con 19 mil 863. En Cañada
              Azteca, el nivel máximo encontrado (24 mil 196) fue el 25 de
              marzo, y en El Vigía (2 mil 909) el 8 de febrero
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
              <img src={contaminacion} alt="imagen ejemplo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {menu && <Menu handleMenu={handleMenu} animatedMenu={animatedMenu} closeMenu={closeMenu} />}
    </>
  );
};

export default Contaminacion;
