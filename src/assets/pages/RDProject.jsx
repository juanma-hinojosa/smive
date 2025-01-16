/* eslint-disable react/prop-types */
import "../../css/galleria.css";
import { Link, useParams } from "react-router-dom";
// import { servicesList } from "../js/services-list";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { TitleDinamic } from "../js/title-list";

function RouteDinamicProject({ projectsList }) {
  const { id } = useParams();
  TitleDinamic(`${projectsList[id].h3} - SMIVE`);

  const projectDesc = projectsList[id].projectDesc;

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  // console.log(imgBefore);
  // console.log(projectsList[id].infoObjs);
  // console.log(imgLists);

  return (
    <section className="about">
      <h1 className="heading">
        {/* {" "} */}
        Proyecto {projectsList[id].h3} <br />
        {projectsList[id].infoObjs.provincia} -{" "}
        {projectsList[id].infoObjs.ciudad}
      </h1>

      <div className="row">
        <div className="content">
          <h3>{projectsList[id].h3}</h3>
          <p>{projectsList[id].description}</p>
        </div>
      </div>

      {projectDesc.map((project, index) => (
        <div key={index}>
          <h1 style={{ fontSize: "1.7rem" }}>{project.category}</h1>
          <p style={{ fontSize: "1.5rem" }}>{project.desc}</p>

          <div className="box-gallery-grid">
            {project.listImg.map((img, index) => (
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                key={index}
              >
                <a href={`/images/${img}`}>
                  <img
                    alt="img2"
                    src={`/images/${img}`}
                    style={{ width: "100%" }}
                  />
                </a>
              </LightGallery>
            ))}
          </div>
        </div>
      ))}

      <div className="row">
        <Link to="/projects" className="btn">
          Volver
        </Link>

        <Link to="/contact" className="btn">
          Contactanos
        </Link>
      </div>
    </section>
  );
}

export default RouteDinamicProject;
