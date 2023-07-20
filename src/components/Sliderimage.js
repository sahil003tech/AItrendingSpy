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
            <div>
              <a
                href="#"
                className="slider-button"
                style={{ marginTop: "40px" }}
              >
                Request Early access
              </a>
            </div>
          </div>
          <div className="slide-box">
            <span
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              "AITradingSpy can you create a trading strategy for TSLA using a
              set of proprietary indicators and back test it for past 3 months
              and provide me performance."
            </span>
          </div>
          <img
            src="https://i.pinimg.com/originals/6b/41/77/6b4177541c596ccf8c6f3894a301b8a6.jpg"
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
            <div style={{ marginTop: "40px" }}>
              <a href="#" className="slider-button">
                Request Early access
              </a>
            </div>
          </div>
          {/* box-1 */}
          <div className="slide-1">
            <span
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              "AITradingSpy can you find what I can do to optimize my option
              calls for AAPL and META based on my performance in the past month"
            </span>
          </div>
          {/* box-2 */}
          <div className="slide-2">
            <span
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              "Find what was my best performing trade by risk reward ratio for
              the past month".
            </span>
          </div>

          <img
            src="https://media.istockphoto.com/photos/trading-charts-on-a-display-picture-id1317587887?b=1&k=20&m=1317587887&s=170667a&w=0&h=L1Npj1k-fSnDAkafyzfeIL4LsVvue7sY-65AAiEQEdE="
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
            <div style={{ marginTop: "40px" }}>
              <a href="#" className="slider-button">
                Request Early access
              </a>
            </div>
          </div>
          <div className="slide-3">
            <span
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              "AITradingSpy find which of my community members who have recorded
              their trades had the best continued performance and compare it to
              my strategy and market data."
            </span>
          </div>
          <img
            src="https://th.bing.com/th/id/R.a191d60b4a83010bbd8e994924e90ab8?rik=31BUif0RgYMCYQ&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1560221328-12fe60f83ab8%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8MXx8b3B0aW9uJTIwdHJhZGluZ3x8MHx8fHwxNjI4OTE0NzI2%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=6kSuQvUMWntBYEboT%2bscGjUbjkBBam8gZicLN0ub5rA%3d&risl=&pid=ImgRaw&r=0"
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
