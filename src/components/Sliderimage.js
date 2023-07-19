import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Imagef from "../Images/photo-first-fotor-20230719154113.png";
import Imaget from "../Images/photo-main-fotor-20230719151846.png";
import Images from "../Images/photo-second-fotor-20230719163026.png";
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
              Build using
              <br />
              Strategy Studio
            </h1>
            <p>
              Strategist Studio helps you build and automate
              <br />
              using our sophisticated tools and skilled
              <br />
              team of developers.
            </p>
            <a href="#">
              <button style={{ backgroundColor: "#9E52FF" }}>
                Request Early access
              </button>
            </a>
          </div>
          <img
            src={Imagef}
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
              Optimize using
              <br />
              Trade Optimizer
            </h1>
            <p>
              Trade Optimizer are advanced machine learning
              <br />
              algorithms that meticulosly scrutinize and
              <br />
              Optimize future trades.
            </p>
            <a href="#">
              <button style={{ backgroundColor: "#9E52FF" }}>
                Request Early access
              </button>
            </a>
          </div>
          <img
            src={Images}
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
              Grow Using
              <br />
              Community Builder
            </h1>
            <p>
              Community builder helps you build,nurture,and
              <br />
              monetize trading communities.
            </p>
            <a href="#">
              <button style={{ backgroundColor: "#9E52FF" }}>
                Request Early access
              </button>
            </a>
          </div>
          <img
            src={Imaget}
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
