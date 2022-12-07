import { useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

import plant from "../img/Plant1.png";
import plant2 from "../img/Plant2.png";
import plant3 from "../img/Plant5.png";
import desierto from "../img/Desierto1.png";
import desierto2 from "../img/Desierto2.png";
import desertificacion from "../img/desertificacion.jpg";

const Desierto = ({mobil, menu, animatedMenu, handleMenu, closeMenu, quit}) => {
  useEffect(() => {
    quit();
  }, []);
  return (
    <>
      <Header mobil={mobil} menu={menu} handleMenu={handleMenu}/>
      <main className="main">
        <section className="main-container">
          <div className="widget">
            <h2>Desertificación</h2>
            <p>Es el proceso de degradación del suelo cuyas causas incluyen las variaciones climáticas y las actividades humanas. Dicho fenómeno de degradación es causante de la pérdida de grandes extensiones de suelos fértiles e implica la pérdida de la capacidad de los ecosistemas para ser capaces de cumplir normalmente con el papel que tiene como responsable de la regulación para suministrar bienes y servicios. Se considera que las zonas geográficas que tienen mayores posibilidades de ser afectadas por este problema son las áreas áridas, semiáridas y subhúmedas secas.</p>
            <p>En otras palabras, la desertificación es el proceso por medio del cual la tierra fértil se convierte en un desierto ya sea por causas naturales o por intervención humana. Representa un declive en la productividad biológica y, a pesar de ser un proceso que ocurre naturalmente, sus causas naturales han superado por mucho la velocidad normal del fenómeno.</p>
            <div className="main-images">
              <img src={desierto} alt="imagen desierto" />
            </div>
          </div>
          <div className="widget">
            <h2>Causas</h2>
            <ul className="causes">
                <li>El clima semiárido, las sequías estacionales y las lluvias poco constantes. </li>
                <li>Las tierras pobres y la erosión del suelo.</li>
                <li>Los incendios forestales.</li>
                <li>Crisis del sector primario, éxodo rural y abandono de terrenos productivos.</li>
                <li>Explotación irresponsable de los recursos hídricos y contaminación de los acuíferos.</li>
                <li>Crecimiento urbano desordenado, sobre todo en zonas costeras.</li>
                <li>Cambio climático: calentamiento global y disminución de precipitaciones.</li>
            </ul>
            <div className="main-images">
              <img src={desierto2} alt="imagen desertificacion" />
            </div>
          </div>
          <div className="widget">
            <h2>Consecuencias</h2>
            <ul className="consequences">
                <li>Pérdida de especies animales y vegetales, suelos fértiles productivos y de ecosistemas.</li>
                <li>Disminución de la producción agrícola e inseguridad alimentaria.</li>
                <li>Alteración de los recursos naturales.</li>
                <li>Intensificación de las consecuencias del cambio climático.</li>
                <li>Impacto sobre el desarrollo sostenible y la calidad de vida.</li>
            </ul>
            <div className="main-images">
              <img src={plant2} alt="imagen planta" />
              <img src={plant} alt="imagen planta" />
              <img src={plant3} alt="imagen planta" />
            </div>
          </div>
          <div className="widget">
            <h2>Ejemplo</h2>
            <p>En México, la desertificación, que degrada la tierra para la agricultura y la silvicultura, principalmente en zonas áridas y montañosas, es parte del problema nacional. Por encima de todo, la desertificación es un problema de desarrollo sostenible. Es una cuestión de pobreza y bienestar humano y conservación del medio ambiente.</p>
            <p>Los problemas sociales y económicos, la seguridad alimentaria, la migración y la estabilidad política están estrechamente relacionados con la degradación de la tierra y otros problemas ambientales como el cambio climático, la biodiversidad, el suministro y el suministro de agua potable.</p>
            <p>La tierra descubierta emite más dióxido de carbono, lo que provoca el calentamiento global y el cambio climático. Por el contrario, los suelos vegetales tienen una mayor capacidad para fijar dióxido de carbono y absorber agua, lo que se traduce en menores insumos y mayor productividad.</p>
            <p>El proceso de desertificación significa que el 23% de la tierra ya no es productiva, lo que afecta indirectamente a las personas, ya que los alimentos se producen menos y son más caros de comprar. En México, 175 millones de hectáreas, o alrededor del 89% de la superficie del país, están experimentando diversos grados de degradación de la tierra.</p>
            <p>El 59% sufre degradación específica del suelo, lo que significa pérdida de carbono orgánico y su rendimiento. Uno de los estados más afectados es Jalisco, especialmente Los Altos.</p>
            <p>Aparte de este ejemplo también puedes ver más acerca de las consecuencias de la desertificación en el siguiente <a href="https://www.fao.org/fao-stories/article/es/c/1480363/" target="_blank" rel="noopener noreferrer">enlace</a></p>
            <div className="main-images">
              <img src={desertificacion} alt="imagen ejemplo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {menu && <Menu handleMenu={handleMenu} animatedMenu={animatedMenu} closeMenu={closeMenu} />}
    </>
  )
}

export default Desierto;