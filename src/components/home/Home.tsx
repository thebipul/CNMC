import "./home.css";
import { Title } from "../../elements/Title";
import Image1 from "../../assets/homepage/image1.jpg";
import Image2 from "../../assets/homepage/image2.jpg";
import Image3 from "../../assets/homepage/image3.jpg";
import Image4 from "../../assets/homepage/image4.jpg";
import Image5 from "../../assets/homepage/image5.jpg";
import Image6 from "../../assets/homepage/image6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import About from "../about/About";
import "swiper/css";

function Home() {
  return (
    <>
      <div className="home">
        <Title text="Home" />
        <div className="home-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="swiper">
              <img src={Image1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Image3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Image4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Image5} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={Image6} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="home-text">
          <About />
        </div>
      </div>
    </>
  );
}

export default Home;
