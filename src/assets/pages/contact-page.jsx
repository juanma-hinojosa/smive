import { Helmet } from "react-helmet-async";
import ContactComponent from "../components/contact-component";
import { TitleDinamic } from "../js/title-list";

function ContactPage() {
  TitleDinamic("Contacto - SMIVE");
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Contactanos. SMIVE Refacciones y manteniemto integral en viviendas, edificios, fabricas y salones de reunion y eventos."
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
      <ContactComponent />
    </>
  );
}

export default ContactPage;
