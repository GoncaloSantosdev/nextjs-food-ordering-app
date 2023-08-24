"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Images
import slider1 from "../../public/slide1.png";
import slider2 from "../../public/slide2.png";
import slider3 from "../../public/slide3.jpg";
// import required modules
import { Navigation } from "swiper/modules";

const ImageSwiper = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div className="relative w-full h-[60vh] overflow-hidden mt-8 lg:mt-0 shadow-2xl">
          <Image
            src={slider1}
            fill={true}
            objectFit="cover"
            alt="dog eating pizza"
            className="rounded h-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[60vh] overflow-hidden mt-8 lg:mt-0 shadow-2xl">
          <Image
            src={slider2}
            fill={true}
            objectFit="cover"
            alt="dog eating pizza"
            className="rounded h-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[60vh] overflow-hidden mt-8 lg:mt-0 shadow-2xl">
          <Image
            src={slider3}
            fill={true}
            objectFit="cover"
            alt="dog eating pizza"
            className="rounded h-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
