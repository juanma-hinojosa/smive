// import Swiper from "swiper";
import AboutComponent from "../components/about-component";
import ClientsComponents from "../components/clients-component";
import ContactComponent from "../components/contact-component";
import ProjectComponet from "../components/project-component";
// import SlideReviewComponent from "../components/reviews-component";
import SlideComponent from "../components/slide-component";
import { TitleDinamic } from "../js/title-list";
import ServicesPage from "./services-page";
import AboutVid from '/images/about-vid.mp4'

function HomePage() {
  TitleDinamic('SMIVE')
  return (
    <>
      <section className="home" id="home">
        <SlideComponent />
      </section>

      <AboutComponent src={AboutVid} />
      <ServicesPage />
      <ProjectComponet />
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
