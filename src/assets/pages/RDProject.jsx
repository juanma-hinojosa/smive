/* eslint-disable react/prop-types */
import "../../css/galleria.css";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "/images/smive-logo.jpg";

import "react-lazy-load-image-component/src/effects/blur.css";
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
import { Helmet } from "react-helmet-async";

function RouteDinamicProject({ projectsList }) {
  const { slug } = useParams();
  const project = projectsList.find((p) => p.slug === slug);

  // ❌ Si el proyecto no existe, mostrar mensaje de error
  if (!project) {
    return <h1>Proyecto no encontrado</h1>;
  }

  TitleDinamic(`${project.h3} - SMIVE`);

  // const projectDesc = projectsList[id].projectDesc;
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content= {`Proyecto ${project.h3}. ${project.description}`}
        />
        <meta
          name="keywords"
          content={`Proyecto ${project.h3}. ${project.projectDesc.map((item) => item.category).join(", ")}`}
        />
        <meta
          name="category"
          content="SMIVE Refacciones y Mantenimiento. Servicios de Albañileria, pintura, plomeria, techos, impermeabilizacion, gas, construccion en seco."
        />
      </Helmet>
      <section className="about">
        <h1 className="heading">
          {/* {" "} */}
          Proyecto {project.h3} <br />
          {project.infoObjs.provincia} - {project.infoObjs.ciudad}
        </h1>

        <div className="row">
          <div className="content">
            <h3>{project.h3}</h3>
            <p>{project.description}</p>
          </div>
        </div>

        {project.projectDesc.map((desc, index) => (
          <div key={index}>
            <h1 style={{ fontSize: "1.7rem" }}>{desc.category}</h1>
            <p style={{ fontSize: "1.5rem" }}>{desc.desc}</p>

            <div className="box-gallery-grid">
              {desc.listImg.map((img, index) => (
                <LightGallery
                  // onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  key={index}
                >
                  <a href={`/images/${img}`}>
                    <LazyLoadImage
                      alt="img2"
                      src={`/images/${img}`}
                      style={{ width: "100%" }}
                      placeholderSrc={placeholder}
                      effect="blur"
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
    </>
  );
}

export default RouteDinamicProject;
