import { useEffect } from "react";

// Componentes
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";

// Images
import monster from "../img/Monster1.png";
import monster2 from "../img/Monster2.png";
import monster3 from "../img/Monster3.png";
import deforesta from "../img/Deforesta1.png";
import deforesta2 from "../img/Deforesta2.png";
import contamina from "../img/Contamina1.png";
import contamina2 from "../img/Contamina2.png";
import desierto from "../img/Desierto1.png";
import desierto2 from "../img/Desierto2.png";
import nuclear from "../img/Nuclear2.png";

const Index = ({ mobil, menu, animatedMenu, handleMenu, closeMenu, quit }) => {
  useEffect(() => {
    quit();
  }, []);

  return (
    <>
      <Header mobil={mobil} menu={menu} handleMenu={handleMenu} />
      <main className="main">
        <section className="main-container">
          <div className="widget">
            <h2>México Sustentable</h2>
            <p>
              El desarrollo sustentable es actualmente un tema bastante conocido
              a nivel mundial, aunque no todas las personas le dan la
              importancia que se le debería dar por los problemas
              medioambientales a los que se ha tenido que enfrentar la
              humanidad.
            </p>
            <p>
              El desarrollo sustentable trata de la capacidad de una sociedad
              para poder satisfacer las necesidades de los individuos que la
              conforman en el presente sin comprometer la capacidad de las
              generaciones futuras para satisfacer sus propias necesidades,
              tomando en cuenta tres pilares fundamentales o dimensiones que son
              económico, ecológico y social.
            </p>
            <p>
              Dichas tres partes tienen que estar en equilibrio para poder
              alcanzar la verdadera sustentabilidad. La generación de recursos
              económicos financieros debe tomar en cuenta la utilización de los
              recursos ofrecidos por el medio ambiente en una medida adecuada
              para garantizar su capacidad de regeneración o permitir que todos
              puedan aprovechar los beneficios del aprovechamiento en el caso de
              los recursos no renovables, tomando en cuenta la parte social que
              comprende la calidad de vida de todos y cada uno de los seres
              humanos individuales que habitan el planeta en cuanto a
              necesidades básicas como la salud, la vivienda y la educación.
              Todo está conectado.
            </p>
            <p>
              Para poder llegar a tener un desarrollo sustentable, es necesario
              enfrentar y resolver los diversos problemas que afectan por igual
              a cada uno de los tres pilares, perjudicando la calidad de vida de
              las personas, afectando directamente la capacidad de todos para
              poder generar dinero y, sobre todo, causando daños en los
              ecosistemas que podrían llegar a ser irreversibles si no se toman
              medidas inmediatas y permanentes con respecto a ellos.
            </p>
            <p>
              Dentro de estos problemas, pueden destacarse tres que son algunos
              de los más notorios o conocidos y que causan grandes daños al
              medio ambiente, los cuales son la contaminación, la
              desertificación y la deforestación. De cada uno de estos se puede
              desprender una gran cantidad de subtemas muy interesantes si se
              les llega a dedicar tiempo y esfuerzo en la investigación. Con el
              objetivo de presentar los puntos más relevantes de los resultados
              de investigación con respecto a los tres problemas antes
              mencionados, aquí se presentan puntos como concepto, causas y
              consecuencias de cada uno de ellos para fomentar la lectura y
              generar interés en estos grandes problemas.
            </p>
            {mobil ? (
              <div className="main-images">
                <img src={monster3} alt="imagen intro" />
              </div>
            ) : (
              <div className="main-images">
                <img src={monster} alt="imagen intro" />
                <img src={monster2} alt="imagen intro" />
                <img src={monster3} alt="imagen intro" />
              </div>
            )}
          </div>
          <div className="widget">
            <h2>Deforestación en México</h2>
            <p>
              La deforestación perjudica directamente la calidad del aire que
              respiran tanto los seres humanos como todos los otros seres vivos
              que existen en el planeta. A pesar de que es entendible que
              existen razones para explotar los recursos naturales como lo son
              los árboles y que aportan beneficios como materia prima para un
              sin fin de herramientas útiles, es importante considerar el papel
              tan importante que juegan en la naturaleza y las consecuencias
              negativas que trae consigo la sobreexplotación.
            </p>
            <p>
              El desarrollo sustentable busca satisfacer las necesidades del
              presente, por lo que usar madera para la construcción de viviendas
              y elaboración de productos para satisfacer distintas necesidades
              no está mal. Aún así, falta considerar seriamente la capacidad de
              regeneración y el nivel o la medida límite en la que se tienen que
              explotar recursos como los árboles para no perder completamente
              esta fuente de recursos, que a su vez forma parte de ecosistemas
              en donde viven otros organismos que desaparecerían con ellos.
            </p>
            {mobil ? (
              <div className="main-images">
                <img src={deforesta} alt="imagen deforestación" />
              </div>
            ) : (
              <div className="main-images">
                <img src={deforesta2} alt="imagen deforestación" />
              </div>
            )}
          </div>
          <div className="widget">
            <h2>Contaminación en México</h2>
            <p>
              La contaminación es un tema mucho más grande de lo que se piensa
              en cuanto a sus consecuencias. Hoy en día es normal ver terrenos
              baldíos llenos de basura al pasar por la calle o ir a la playa sin
              tomar en cuenta el nivel de contaminación de sus aguas. De la
              misma forma, en cualquier parte se puede estar respirando aire
              plagado de sustancias nocivas para la salud y el bienestar del ser
              humano y los ecosistemas.
            </p>
            <p>
              La contaminación afecta el pilar social del desarrollo sustentable
              al perjudicar la calidad de vida de las personas, obligándoles a
              vivir en espacios llenos de basura y contaminación de suelo, aire
              y agua, involucrando al pilar ambiental. Así mismo, al afectar los
              recursos naturales de donde se obtiene la materia prima para
              procesos industriales, se tiene que tomar en cuenta que afecta la
              capacidad de México y muchos otros países alrededor del mundo para
              generar recursos económicos, afectando así el tercer pilar.
            </p>
            {mobil ? (
              <div className="main-images">
                <img src={contamina} alt="imagen contaminación" />
              </div>
            ) : (
              <div className="main-images">
                <img src={contamina} alt="imagen contaminación" />
                <img src={contamina2} alt="imagen contaminación" />
              </div>
            )}
          </div>
          <div className="widget">
            <h2>Desertificación en México</h2>
            <p>
              La desertificación es un problema muy grande y un riesgo para la
              existencia de las formas de vida que habitan el planeta, ya que a
              las plantas les quita la posibilidad de disponer de las zonas
              afectadas para crecer y desarrollarse en ellas, mientras que a los
              animales les impide disponer de dichas plantas como recursos para
              obtener sus beneficios. En el caso particular del ser humano, si
              se quedara sin espacios para poder plantar y cosechar frutas y
              verduras, una de las actividades más importantes de las
              civilizaciones desde la antigüedad, no solo sería un cambio de
              estilo de vida sino quizá su completa desaparición.
            </p>
            <p>
              Las consecuencias reales que tiene la desertificación pueden no
              ser muy notorias para muchas personas, pero en zonas afectadas
              directamente por ésta como Somalia ha llegado a cambiar
              completamente el estilo de vida de las personas. La
              desertificación los ha hecho pasar por situaciones lamentables y
              muy problemáticas como lo son la completa pérdida del único medio
              de subsistencia con el que contaban, lo que representaría la
              muerte de los animales de los granjeros, la pobreza y la necesidad
              de migrar a lugares desconocidos para poder sobrevivir.
            </p>
            {mobil ? (
              <div className="main-images">
                <img src={desierto2} alt="imagen desierto" />
              </div>
            ) : (
              <div className="main-images">
                <img src={desierto} alt="imagen desierto" />
                <img src={desierto2} alt="imagen desierto" />
              </div>
            )}
          </div>
          <div className="widget">
            <h2>Energía Nuclear</h2>
            <p>
              La energía nuclear es una de las energías más rentables hoy en
              día, y de la cual ha tenido mucha desinformación a lo largo de los
              años, se llegó a decir a que esta energía era la más nociva para
              el medio ambiente, haciendo campañas en contra de ella, cuando
              esto no es así, de hecho al contrario, no daña el medio ambiente
              hasta cierto punto, y es lo que veremos a continuación.
            </p>
            <div className="main-images">
              <img src={nuclear} alt="imagen nuclear" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {menu && <Menu handleMenu={handleMenu} animatedMenu={animatedMenu} closeMenu={closeMenu} />}
    </>
  );
};

export default Index;
