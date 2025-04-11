/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { projectsList } from "../js/projects-list";

function ProjectComponet({ limit }) {
  const displayedProjects = limit ? projectsList.slice(0, limit) : projectsList;
  return (
    <div className="projects-container">
      <section className="projects" id="projects">
        <h1 className="heading"> Proyectos y Obras </h1>

        <div className="box-container">
          {displayedProjects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.id}
              className="box"
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
