import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../css/Slider.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Sliderimage = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      className="swiper-image"
    >
      <SwiperSlide>
        <div>
          <div className="container">
            <h1>
              Designed to
              <br />
              help you invest
            </h1>
            <p>
              We belive investing shouldn't take over
              <br />
              your life , it should allow you to live it.
            </p>
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/38c2915bf654579ca587440ea59795ac9f4764f8-1920x1080.jpg?fm=webp&q=80"
            alt=""
            height={900}
            width="100%"
            className="slider-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="container">
            <h1>
              Designed to
              <br />
              help you invest
            </h1>
            <p>
              We belive investing shouldn't take over
              <br />
              your life , it should allow you to live it.
            </p>
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/32b43b264fdfb351267620a226f64346e31c3d18-1920x1080.jpg?fm=webp&q=80"
            height={900}
            width="100%"
            className="slider-image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="container">
            <h1>
              Designed to
              <br />
              help you invest
            </h1>
            <p>
              We belive investing shouldn't take over
              <br />
              your life , it should allow you to live it.
            </p>
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/05f6124c4b24d79b05b8bfa3df9856130bfdd883-1920x1080.jpg?fm=webp&q=80"
            alt=""
            height={900}
            width="100%"
            className="slider-image"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliderimage;
