import Image1 from "../../assets/cnmc017/image1.jpg";
import Image2 from "../../assets/cnmc017/image2.jpg";
import Image3 from "../../assets/cnmc017/image3.jpg";
import Image4 from "../../assets/cnmc017/image4.jpg";
import Image5 from "../../assets/cnmc017/image5.jpg";
import Image6 from "../../assets/cnmc017/image6.jpg";
import Image7 from "../../assets/cnmc017/image7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./photos.css";

export const CNMC017 = () => {
  return (
    <>
      <div className="cnmc017">
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
          <SwiperSlide className="swiper">
            <img src={Image7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
