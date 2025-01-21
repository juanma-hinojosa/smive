import { Link } from "react-router-dom";
import { projectsList } from "../js/projects-list";

function ProjectComponet() {
  // function topDom() {
  //   window.scrollY(0)
  // }

  return (
    <div className="projects-container">
      <section className="projects" id="projects">
        <h1 className="heading"> Proyectos y Obras </h1>

        <div className="box-container">
          {projectsList.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="box"
              // onClick={topDom}
              data-aos="zoom-in"
            >
              <div className="image">
                <img src={`/images/${project.img}`} alt="imagen project" />
              </div>
              <div className="content">
                <div className="info">
                  <h3>{project.h3}</h3>
                  <p>{project.p}</p>
                </div>
                <i className="fas fa-plus"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectComponet;
