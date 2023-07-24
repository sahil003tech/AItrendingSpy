import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Animated = ({ logos }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={4}
      autoplay={true}
      pagination={{ clickable: true }}
      style={{ width: "80%", display: "flex", justifyContent: "space-evenly" }}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Logo ${index + 1}`} width={200} height={200} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Animated;
