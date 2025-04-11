// import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LogoNav from "/images/smive-logo-nav.jpg";
import "../../css/botons.css";
function NavigationComponent() {
  function navbarOpen() {
    const navbar = document.querySelector(".header .navbar");
    navbar.classList.toggle("active");
  }

  function infoOpen() {
    const contactInfo = document.querySelector(".contact-info");
    contactInfo.classList.add("active");
  }

  function infoClose() {
    const contactInfo = document.querySelector(".contact-info");
    contactInfo.classList.remove("active");
  }

  function removeClass() {
    const navbar = document.querySelector(".header .navbar");
    const contactInfo = document.querySelector(".contact-info");

    navbar.classList.remove("active");
    contactInfo.classList.remove("active");
  }
  const links = [
    { path: "/", pathName: "Inicio" },
    { path: "/projects", pathName: "Proyectos" },
    { path: "/contact", pathName: "Contacto" },
  ];
  return (
    <>
      <header className="header">
        <section className="flex">
          <Link to="/" className="logo">
            <img src={LogoNav} alt="Logo SMIVE" style={{ width: "100px" }} />
          </Link>

          <nav onClick={removeClass} className="navbar">
            {links.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.pathName}
              </Link>
            ))}
          </nav>

          <div className="icons">
            <div
              onClick={infoOpen}
              id="info-btn"
              className="fas fa-info-circle"
            ></div>
            <div
              onClick={navbarOpen}
              id="menu-btn"
              className="fas fa-bars"
            ></div>
          </div>
        </section>
      </header>

      <div className="contact-info" onClick={removeClass}>
        <div
          onClick={infoClose}
          id="close-contact-info"
          className="fas fa-times"
        ></div>

        <div className="info">
          <i className="fas fa-phone"></i>
          <h3>Telefonos</h3>
          <a
            href="https://wa.me/5491132986884?text=Hola,%20quiero%20más%20información%20sobre%20presupuestos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wpp"
          >
            Presupuestos
          </a>
          <br />
          <a
            href="https://wa.me/5491162111611?text=Hola,%20quiero%20más%20información!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wpp"
          >
            Obras
          </a>
        </div>

        <div className="info">
          <i className="fas fa-envelope"></i>
          <h3>emails</h3>
          <a
            href="mailto:smive.reparaciones@gmail.com?subject=Consulta&body=Hola,%20quisiera%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gmail"
            
          >
            smive.reparaciones@gmail.com
          </a>
          <br />
          {/* <a
            href="mailto:smive@reparaciones.com?subject=Consulta&body=Hola,%20quisiera%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gmail"
          >
            smive@reparaciones.com
          </a> */}
        </div>

        <div className="share">
          <a href="#" className="fab fa-facebook-f"></a>
          {/* <a href="#" className="fab fa-twitter"></a> */}
          <a href="#" className="fab fa-instagram"></a>
          {/* <a href="#" className="fab fa-linkedin"></a> */}
        </div>
      </div>
    </>
  );
}

export default NavigationComponent;
