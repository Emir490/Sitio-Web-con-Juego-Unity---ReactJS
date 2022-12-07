import logo from "../img/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Integrantes</h2>
        <div className="footer-devs">
          <p>Medrano Vázquez Eduardo Emir</p>
          <p>Abner Ramírez Castañeda</p>
          <p>Fidel Montesino González</p>
          <p>Oscar Sánchez Medina</p>
        </div>
      </div>
      <div className="footer-img">
        <img src={logo} alt="imagen logo" />
      </div>
    </footer>
  );
};

export default Footer;
