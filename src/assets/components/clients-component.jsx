// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
function ClientsComponents() {
  const clientsList = [
    // { img: "client-logo-1.png" },
    { img: "client-logo-11.png" },
    { img: "client-logo-10.png" },
    { img: "client-logo-9.png" },
    { img: "client-logo-8.png" },
    { img: "client-logo-7.jpg" },
  ];
  return (
    <section className="logo-container">
      <Swiper
        loop={true}
        className="mySwiper logo-slider"
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[FreeMode, Autoplay]}
      >
        <div className="swiper-wrapper">
          {clientsList.map((client, index) => (
            <SwiperSlide key={index} className="swiper-slide slide">
              <img src={`/images/${client.img}`} alt="logo client" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}

export default ClientsComponents;
