import Image1 from "../../assets/teej_events/image1.jpg";
import Image3 from "../../assets/teej_events/image3.jpg";
import Image5 from "../../assets/teej_events/image5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "../about/photos.css";

export const Teej = () => {
  return (
    <>
      <div className="teej">
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
            <img src={Image3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={Image5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
