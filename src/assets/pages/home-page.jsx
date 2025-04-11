// import Swiper from "swiper";
import { Helmet } from "react-helmet-async";
import AboutComponent from "../components/about-component";
import ClientsComponents from "../components/clients-component";
import ContactComponent from "../components/contact-component";
import ProjectComponet from "../components/project-component";
import SlideComponent from "../components/slide-component";
import { TitleDinamic } from "../js/title-list";
import ServicesPage from "./services-page";
import AboutVid from "/images/about-vid1.mp4";

function HomePage() {
  TitleDinamic("SMIVE");
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="SMIVE ofrece servicios integrales de mantenimiento y refacciones para viviendas y edificios. Especializados en plomería, albañilería, revestimiento, pintura, impermeabilización, electricidad, construcción en seco y consultoría. Soluciones confiables y profesionales para tu hogar o empresa."
        />

        <meta
          name="keywords"
          content="mantenimiento hogar, refacciones construcción, plomería, albañilería, revestimiento, pintura, impermeabilización, electricidad, construcción en seco, consultoría construcción, servicios integrales vivienda, SMIVE, mantenimiento edificios"
        />

        <meta
          name="category"
          content="Construcción y mantenimiento de viviendas y edificios"
        />
      </Helmet>
      <section className="home" id="home">
        <SlideComponent />
      </section>

      <AboutComponent
        src={AboutVid}
        text="En SMIVE, nos especializamos en ofrecer soluciones integrales de
            refacciones y mantenimiento que garantizan la durabilidad y
            eficiencia de sus proyectos de construcción. Nuestro compromiso con
            la excelencia se refleja en cada detalle, desde la selección de
            materiales de alta calidad hasta la implementación de técnicas
            innovadoras. "
      />
      <ServicesPage />
      <ProjectComponet limit={6} />
      <ClientsComponents />

      {/* <section className="reviews">
        <h1 className="heading"> Reseñas de Clientes </h1>
        <div className="swiper reviews-slider">
          <SlideReviewComponent />
        </div>
      </section> */}

      <ContactComponent />
    </>
  );
}

export default HomePage;
