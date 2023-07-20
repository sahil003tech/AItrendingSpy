import React from "react";
import "../css/Action.css";
import Image from "../Images/Tradingimage.jpg";

const Action = () => {
  return (
    <div className="main" style={{ marginTop: "0" }}>
      <div className="container">
        <h1 style={{ color: "white" }}>
          AI Working to
          <br />
          help you trade
        </h1>
        <p style={{ color: "white" }}>
          Trading needs an AI partner and no better
          <br />
          partner for regular traders than AITradingSpy.
        </p>
        <div style={{ marginTop: "40px" }}>
          <a href="#" className="slider-button">
            Request Early access
          </a>
        </div>
      </div>
      <img
        src={Image}
        alt=""
        height={900}
        width="100%"
        className="slider-image"
        style={{ objectFit: "cover", marginTop: "0" }}
      />
    </div>
  );
};

export default Action;
