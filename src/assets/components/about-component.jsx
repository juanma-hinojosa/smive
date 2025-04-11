import CountUp from "react-countup";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function AboutComponent(props) {
  const boxs = [
    { incio: 10, p: "Años de experiencia", fin: 20 },
    { incio: 65, p: "Proyectos finalizados", fin: 100 },
    { incio: 10, p: "Clientes satisfechos", fin: 20 },
    { inicio: 1, p: "Obras en progreso", fin: 3 },
  ];
  return (
    <section className="about" id="about">
      <h1 className="heading">Nosotros</h1>

      <div className="row">
        <div className="video">
          <video src={props.src} loop muted autoPlay></video>
        </div>

        <div className="content">
          <h3 data-aos="fade-up">
            SMIVE: Construcción de confianza, mantenimiento de calidad!
          </h3>
          <p data-aos="fade-up">
            {props.text}
          </p>
          <Link to="/projects" className="btn">
            Proyectos
          </Link>
        </div>
      </div>

      <div className="box-container">
        {boxs.map((box, index) => (
          <div key={index} className="box">
            <h3>
              <CountUp
                start={box.inicio}
                end={box.fin}
                duration={5.0}
                enableScrollSpy={false}
              />
              +
            </h3>
            <p>{box.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutComponent;
