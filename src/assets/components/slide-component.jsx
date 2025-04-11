// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
function SlideComponent() {
  const sliders = [
    {
      img: "url(/images/home-slide-1.jpg)",
      title: "Tu aliado en mantenimiento y refacción",
      paragrafo:
        "En SMIVE ofrecemos soluciones integrales para mantener tus proyectos de construcción en perfecto estado, con calidad y eficiencia garantizadas.",
    },
    {
      img: "url(/images/home-slide-2.jpg)",
      title: "Refacción y mantenimiento sin complicaciones",
      paragrafo:
        "SMIVE es tu socio confiable en proyectos de construcción, ofreciendo soluciones rápidas y de alta calidad para todo tipo de mantenimiento.",
    },
    {
      img: "url(/images/home-slide-3.jpg)",
      title: "Transformamos tu construcción con calidad",
      paragrafo:
        "En SMIVE nos aseguramos de que cada refacción y mantenimiento se realice con los mejores estándares, manteniendo tu proyecto siempre en óptimas condiciones",
    },
  ];
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      navigation={true}
      modules={[EffectFade, Navigation]}
      className="mySwiper"
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>
          <section
            className="swiper-slide slide"
            style={{
              background: `${slide.img} no-repeat`,
              position: "relative", // Asegura que el contenido se posicione correctamente.
            }}
          >
            <div className="content" style={{ position: 'relative', zIndex: '10' }}>
              <h3>{slide.title}</h3>
              <p>{slide.paragrafo}</p>
              <Link
                to="/contact"
                className="btn"
                style={{
                  zIndex: "9999", // Asegura que el enlace esté encima de otros elementos
                  position: "relative", // Permite que el z-index funcione bien
                }}
              >
                Contactanos
              </Link>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideComponent;
