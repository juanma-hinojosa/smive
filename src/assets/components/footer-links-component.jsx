import { Link } from "react-router-dom";
import Logo from "/images/smive-logo.jpg";
import "../../css/footer.css";
import "../../css/botons.css";

function FooterLinkComponent() {
  return (
    <>
      <div
        className=" footer-links-container"
        id="footer-links"
        style={{ backgroundColor: "white" }}
      >
        <section className="footer-links">
          <div className=" box-footer-container">
            <div className="box-links">
              <img style={{ width: "100%" }} src={Logo} alt="image logo" />
            </div>
            <div className="box-links">
              <h1>Navegar</h1>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/projects">Proyectos</Link>
                </li>
                <li>
                  <Link to="/contact">Contactanos</Link>
                </li>
              </ul>
            </div>
            <div className="box-links">
              <h1>Direccion</h1>
              <ul>
                <li>Capital Federal, Buenos Aires</li>
                <li>Argentina</li>
                <li>CP: 1424</li>
              </ul>
            </div>
            <div className="box-links">
              <h1>Seguinos</h1>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>

            <div className="box-links">
              <h1>Contactanos</h1>
              <ul>
                <li>
                  <a
                    href="https://wa.me/5491132986884?text=Hola,%20quiero%20más%20información%20sobre%20presupuestos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wpp"
                    style={{
                      fontSize: '12px'
                    }}
                  >
                    Presupuestos
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5491162111611?text=Hola,%20quiero%20más%20información!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wpp"
                    style={{
                      fontSize: '12px'
                    }}
                  >
                    Obras
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:smive.reparaciones@gmail.com?subject=Consulta&body=Hola,%20quisiera%20más%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gmail"
                    style={{
                      fontSize: '12px'
                    }}
                  >
                    smive.reparaciones@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FooterLinkComponent;
