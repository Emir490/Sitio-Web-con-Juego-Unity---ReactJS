import { useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

import monster from "../img/Monster5.png";
import nuclear from "../img/Nuclear1.png";
import nuclear2 from "../img/Nuclear2.png";
import central from "../img/central-nuclear.png";

const Nuke = ({mobil, menu, animatedMenu, handleMenu, closeMenu, quit}) => {
  useEffect(() => {
    quit();
  }, [])

  return (
    <>
      <Header mobil={mobil} menu={menu} handleMenu={handleMenu}/>
      <main className="main">
        <section className="main-container">
          <div className="widget">
            <h2>Energía Nuclear</h2>
            <p>La energía nuclear es la energía en el núcleo de un átomo, hay muchísima energía dentro del núcleo de un átomo, y esta energía es la que mantiene la unión entre los neutrones y protones (partículas dentro del átomo), esta fuerza que los mantiene juntos es llamada “fuerza nuclear fuerte”.</p>
            <p>La energía nuclear puede ser usada para generar electricidad, para ello la energía debe ser liberada, existen dos métodos para lograrlo: “Fisión nuclear” y “Fusión nuclear”, el que se utiliza para generar electricidad en las plantas nucleares es la fisión nuclear, en la cual los núcleos se separan liberando energía, los átomos se vuelven más pequeños, siendo la masa que pierden la energía que se utiliza para generar electricidad.</p>
            <div className="main-images">
              <img src={nuclear} alt="imagen nuclear" />
            </div>
          </div>
          <div className="widget">
            <h2>Energía Nuclear como energía limpía y sostenible</h2>
            <p>La energía nuclear es una fuente limpia de energía, sin ir muy lejos, en Estados Unidos es la mayor fuente más limpia de energía en Estados Unidos. La energía nuclear protege la calidad del aire, debido a que no emite gases de efecto invernadero, por ejemplo, es común ver en las centrales nucleares ver humo salir, sin embargo, eso se trata de simple vapor, el cual no afecta negativamente al medio ambiente; lo cual contribuye a eliminar miles de toneladas de contaminantes atmosféricos nocivos que contribuyen a la lluvia ácida.</p>
            <p>Según el Instituto de Energía Nuclear (NEI), Estados Unidos evitará más de 471 millones de toneladas métricas de emisiones de dióxido de carbono en 2020. Eso equivale a retirar 100 millones de coches de la carretera y más que todas las demás fuentes de energía limpia juntas.</p>
            <p>Al mismo tiempo que produce aire limpio, también produce más electricidad en menos espacio que cualquier otra fuente de aire limpio, es decir, necesitarías más de 3 millones de paneles solares o 430 turbinas eólicas para producir la misma cantidad de electricidad que un reactor nuclear común; por lo tanto, además de ser un buen candidato para el cambio climático debido a que emite aire limpio, también es un excelente para producir electricidad en grandes cantidades.</p>
            <p>La energía nuclear aparte de ser una fuente de energía limpia también genera trabajo a la población, por lo tanto, no solo ayuda a la población en factores de energía, también lo hace con buenos empleos los cuales son mejor remunerados que la media, por tanto se podría considerar a la energía nuclear parte del desarrollo sustentable cumpliendo con ser una ayuda a la sociedad y amigable con el medio ambiente, no obstante, no cumple con ser económica y menos en un país como México.Sin embargo existe un factor el cual se ha debatido mucho, o sea los residuos nucleares, los cuales son nocivos para el ser humano, estos residuos son almacenados en Almacenes Geológicos, estos recipientes están resguardados de manera muy segura evitando cualquier tipo de filtración, los cuales deben estar almacenando los residuos por miles de años.</p>
            <p>Otro problema que surge con la energía nuclear, es que no es del todo renovable, debido a que su recurso principal es el uranio, pero no cualquier muestra de uranio sino uno llamado U-235 el cual representa menos del uno por ciento de todo el uranio en el mundo, y no solo eso sino que sólo extraemos un 5% de la energía del uranio, lo que hace que siga siendo radiactivo por miles de años, sin embargo, se han buscado alternativas y plantas de 4ta generación permitirán consumir un 97% del combustible, y los residuos solo será necesario resguardarlos por 300 años.</p>
            <div className="main-images">
              <img src={nuclear2} alt="imagen nuclear" />
            </div>
          </div>
          <div className="widget">
            <h2>Mitos sobre la energía nuclear</h2>
            <p>La energía nuclear ha sufrido una campaña de desprestigio durante años, medios como Greenpeace han hechos campañas para desinformar y mentir sobre lo que es la energía nuclear, mentiras como que es insegura, sus residuos dañan al medio ambiente (lo cual es una verdad a medias, si bien dañan han sido bien controlados), incluso se ha dicho que se había registrado un pez con tres ojos y demás deformaciones genéticas cerca de la central nuclear de Garoña en Burgos, días después quien hizo esa nota tuvo que reconocer que mintió.</p>
            <ul>
              <li><span>La energía nuclear es insegura: </span> A lo largo del tiempo se ha dicho que la energía nuclear es insegura, debido a que podría haber accidentes en las plantas nucleares, como el famoso caso de Chernobyl, pero la verdad es que el riesgo de que ocurra un accidente así es bajo y va disminuyendo. Las consecuencias de un accidente son menores comparadas con otros riesgos que se aceptan, se pueden evitar los efectos radiológicos en las personas de cualquier emisión radiactiva. Comparar el caso de Chernobyl con las centrales nucleares actuales es como comparar un vuelo en avión comercial actual con un aeroplano de hace décadas.</li>
              <li><span>Los reactores nucleares pueden explotar como una bomba atómica: </span> Es imposible que un reactor nuclear pueda explotar de esa manera, las bombas atómicas tienen varios materiales especiales en su interior que las hacen explotar así, materiales que no se encuentran en los reactores nucleares.</li>
              <li><span>La energía nuclear es mala para el medio ambiente: </span>Cómo ya vimos anteriormente la energía nuclear es una fuente de energía limpia que no emite gases de efecto invernadero.</li>
              <li><span>No hay solución para los enormes residuos nucleares generados: </span>Así como ya explicamos, los residuos generados son almacenados seguramente en Almacenes Geológicos, los cuales evitan cualquier tipo de fuga, y también se están aplicando nuevas soluciones en desarrollo para disminuir los residuos.</li>
              <li><span>La plantas nucleares presentan un peligro para los trabajadores o la población alrededor: </span>Esto es rotundamente falso, debido que cómo ya mencionamos las plantas nucleares solo emiten vapor y sus residuos son bien resguardados, por tanto no representan un peligro para el ser humano; la radiación emitida por las plantas nucleares son menores que la radiación ambiental, lo que recibe el cuerpo humano por simplemente vivir en el planeta tierra, por lo cual no genera ningún daño a la población; para ponernos en perspectiva comer un solo plátano te genera la misma dosis radiactiva que vivir junto a una central nuclear.</li>
            </ul>
            <div className="main-images">
              <img src={monster} alt="imagen monster" />
            </div>
          </div>
          <div className="widget">
            <h2>Energía Nuclear en México.</h2>
            <p>Apesar de México ser un país de tercer mundo y la energía nuclear no pareciera ser una opción muy viable debido a los enormes costos y que tal vez por ser México no se pueda asegurar la seguridad de las centrales nucleares como en países de primer mundo, lo cierto es, es que esta fuente de energía sí que existe en México, contamos con la Central Nucleoeléctrica de Laguna Verde en Alto Lucero de Gutiérrez Barrios, Veracruz. Así como en México existen energías limpias como son la hidráulica, eólica o solar, también está la energía nuclear, la cual es la más limpia y segura que las anteriores, afirmación hecha por el <a href="https://www.gob.mx/sener/articulos/por-medio-de-la-energia-nuclear-nuestro-pais-garantiza-el-suministro-de-electricidad?idiom=es" target="_blank" rel="noopener noreferrer">Gobierno de México</a></p>
            <p>También cabe mencionar que la La Central Nucleoeléctrica de Laguna Verde en Alto Lucero de Gutiérrez Barrios, Veracruz cumple con los más altos estándares de seguridad a nivel mundial, avalado por entidades como la Comisión Nacional de Seguridad Nuclear y Salvaguardias, y el Instituto Nacional de Investigaciones Nucleares (ININ).</p>
            <p>En México se está optando por energías limpias, siendo la energía nuclear una de ellas, la cual es por mucho la más segura siempre y cuando se maneje bajo estrictas medidas de seguridad, las cuales son exigidas en México.</p>
            <div className="main-images">
              <img src={central} alt="Central nuclear laguna verde" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {menu && <Menu handleMenu={handleMenu} animatedMenu={animatedMenu} closeMenu={closeMenu} />}
    </>
  )
}

export default Nuke