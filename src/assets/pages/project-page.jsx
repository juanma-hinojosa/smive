import AboutComponent from "../components/about-component";
import ProjectComponet from "../components/project-component";
import { TitleDinamic } from "../js/title-list";
import VideoNosotros from "/images/project-vid.mp4";
import { Helmet } from "react-helmet-async";

function ProjectPage() {
  // const sliders = [
  //   {
  //     img: "url(src/assets/images/home-slide-4.jpg)",
  //     title: "Hola soy SMIVE",
  //     paragrafo: "Hola mundo como anda todos ahi",
  //   },
  //   {
  //     img: "url(src/assets/images/home-slide-5.jpg)",
  //     title: "Hola soy Copijsud",
  //     paragrafo: "Hola mundo como anda todos ahi",
  //   },
  //   {
  //     img: "url(src/assets/images/home-slide-6.jpg)",
  //     title: "Hola soy OyM",
  //     paragrafo: "Hola mundo como anda todos ahi",
  //   },
  //   {
  //     img: "url(src/assets/images/home-slide-7.jpg)",
  //     title: "Hola soy OyM",
  //     paragrafo: "Hola mundo como anda todos ahi",
  //   },
  // ];
  TitleDinamic("Proyectos - SMIVE");
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Proyectos, obras de refacciones y mantenimiento integral en viviendas, edificios, fabricas y sala de reuniones y eventos."
        />
        <meta
          name="keywords"
          content="Proyectos y Servicios de Albañileria, pintura, plomeria, techos, impermeabilizacion, gas."
        />
        <meta
          name="category"
          content="SMIVE Refacciones y Mantenimiento. Servicios de Albañileria, pintura, plomeria, techos, impermeabilizacion, gas, construccion en seco."
        />
      </Helmet>
      <AboutComponent
        src={VideoNosotros}
        text="Con un equipo de expertos altamente capacitados,
                  aseguramos que cada obra no solo cumpla, sino que supere los
                  estándares de la industria, brindando resultados confiables y
                  sostenibles a largo plazo. Confíe en SMIVE para construir con
                  calidad y mantener con efectividad."
      />
      <ProjectComponet />
    </>
  );
}

export default ProjectPage;
