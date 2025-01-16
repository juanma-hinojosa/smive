// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
function SlideReviewComponent() {
  const sliders = [
    {
      img: "/images/pic-1.png",
      nameUser: "Andres Galbuchi",
      paragrafo: "SMIVE fue una empresa que siempre cumplio las expectativas de las tareas a realizar",
    },
    {
      img: "/images/pic-2.png",
      nameUser: "Santiago Ramirez",
      paragrafo: "En lo que respecta a la region que superviso en cordoba ellos cumplieron",
    },
    {
      img: "/images/pic-3.png",
      nameUser: "Luis Molins",
      paragrafo: "Contratamos a esta empresa para realizar unas tareas integrales en nuestra fabrica y lograron cumplir con muchos problemas que teniamos en años",
    },
    {
      img: "/images/pic-4.png",
      nameUser: "Daniel Ruiz",
      paragrafo: "Hola mundo como anda todos ahi",
    },
    {
      img: "/images/pic-5.png",
      nameUser: "Marcelo Gonzalez",
      paragrafo: "Hola mundo como anda todos ahi",
    },
    {
      img: "/images/pic-6.png",
      nameUser: "Matias Lozano",
      paragrafo: "Hola mundo como anda todos ahi",
    },
  ];
  return (
    <Swiper
      Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      className="mySwiper swiper-wrapper"
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide slide">
            <p>
              {slide.paragrafo}
            </p>
            <div className="user">
              <img src={slide.img} alt="user profile pic" />
              <div className="info">
                <h3>{slide.nameUser}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideReviewComponent;
