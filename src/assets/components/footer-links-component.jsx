import { Link } from "react-router-dom";
import Logo from "/images/smive-logo.jpg";
import '../../css/footer.css';

function FooterLinkComponent() {
  return (
    <>
      <div className=" footer-links-container" id="footer-links" style={{ backgroundColor: "white"}}>
        <section className="footer-links">
          <div className=" box-footer-container">
            <div className="box-links">
              <img style={{ width: "100%" }} src={Logo} alt="image logo" />
            </div>
            <div className="box-links">
              <h1>Navegar</h1>
              <ul>
                <li>
                  <Link to='/'>Inicio</Link>
                </li>
                <li>
                  <Link to='/projects'>Proyectos</Link>
                </li>
                <li>
                  <Link to='/contact'>Contactanos</Link>
                </li>
              </ul>
            </div>
            <div className="box-links">
              <h1>Direccion</h1>
              <ul>
                <li>Capital Federal, Buenos Aires</li>
                <li>Quiros 2900, Parque Chas</li>
                <li>1424, Argentina</li>
              </ul>
            </div>
            <div className="box-links">
              <h1>Seguinos</h1>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
              </ul>
            </div>

            <div className="box-links">
              <h1>Contactanos</h1>
              <ul>
                <li>smive.reparaciones@gmail.com</li>
                <li>smive.reparaciones@gmail.com</li>
                <li>1132986884</li>
                <li>1132986884</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FooterLinkComponent;
