import Image1 from "../../assets/womensday_events/image1.jpg";
import Image2 from "../../assets/womensday_events/image2.jpg";
import Image3 from "../../assets/womensday_events/image3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "../about/photos.css";

export const Womensday = () => {
  return (
    <>
      <div className="womensday">
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
        </Swiper>
      </div>
    </>
  );
};
