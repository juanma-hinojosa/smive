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
          <video src={`/images/${props.src}`} loop muted autoPlay></video>
        </div>

        <div className="content">
          <h3>SMIVE: Construcción de confianza, mantenimiento de calidad!</h3>
          <p>
          En SMIVE, nos especializamos en ofrecer soluciones integrales de refacciones y mantenimiento que garantizan la durabilidad y eficiencia de sus proyectos de construcción. Nuestro compromiso con la excelencia se refleja en cada detalle, desde la selección de materiales de alta calidad hasta la implementación de técnicas innovadoras. Con un equipo de expertos altamente capacitados, aseguramos que cada obra no solo cumpla, sino que supere los estándares de la industria, brindando resultados confiables y sostenibles a largo plazo. Confíe en SMIVE para construir con calidad y mantener con efectividad.
          </p>
          <Link to='/projects' className="btn">Proyectos</Link>
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
              />+
            </h3>
            <p>{box.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutComponent;
