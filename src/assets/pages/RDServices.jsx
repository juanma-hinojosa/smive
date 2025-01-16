import { useParams } from "react-router";
import { servicesList } from "../js/services-list";
// import SlideVidComponent from "../components/slide-vid-component";

// Import Swiper React components
// import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
// import { EffectFade, Navigation } from "swiper/modules";

function RouteDinamicServices() {
  const { id } = useParams();
  const serviceSelected = servicesList.find((service) => service.name === id);
//   const videoHero = Object.keys(serviceSelected.fotosHero);
//   console.log(videoHero);

  return (
    <section>
      <h1 className="heading">Servicio de {serviceSelected.name}</h1>
      {/* <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper home-slider"
      >
        {videoHero.map((video, index) => (
          <SlideVidComponent 
          key={index} 
          fotoPath={video.fotoPath}
          h3={video.name} 
          />
        ))}
      </Swiper> */}
      <img src={serviceSelected.imgHero} alt=""  />
      <p>{serviceSelected.description}</p>
    </section>
  );
}

export default RouteDinamicServices;
