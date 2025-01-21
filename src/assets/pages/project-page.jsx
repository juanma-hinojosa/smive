// Import Swiper React components
// import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import AboutComponent from "../components/about-component";
import ProjectComponet from "../components/project-component";
import { TitleDinamic } from "../js/title-list";
import VideoNosotros from '/images/project-vid.mp4'

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
  TitleDinamic('Proyectos - SMIVE')
  return (
    <>
    {/* <section className="home" id="home">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper home-slider"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <section
              className="swiper-slide slide"
              style={{
                background: `${slide.img} no-repeat`,
              }}
            >
              <div className="content">
                <h3>{slide.title}</h3>
                <p>{slide.paragrafo}</p>
                <a href="#about" className="btn">
                  get started
                </a>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section> */}
    <AboutComponent 
      src={VideoNosotros}
    />
    <ProjectComponet />

    </>
  );
}

export default ProjectPage;
