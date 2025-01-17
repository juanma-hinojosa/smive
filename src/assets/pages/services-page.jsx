// import { Link } from "react-router-dom";
import { servicesList } from "../js/services-list";

function ServicesPage() {
  return (
    <section className="services-container">
      <div className="services">
        <h1 className="heading">Nuestro Servicios</h1>
        <h2>Podemos realizar varias de estos rubros entre otros</h2>
        <br />
        <div className="box-container">
          {servicesList.map((service, index) => (
            <div data-aos='zoom-in' key={index} className="box">
              <img
                src={`/images/${service.img}`}
                alt="service picture"
              />
              <h3>{service.name}</h3>
              <p>{service.resume}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
