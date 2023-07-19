import React from "react";
import "../css/Action.css";
import Image from "../Images/Tradingimage.jpg";

const Action = () => {
  return (
    <div className="main">
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
        <a href="#">
          <button style={{ backgroundColor: "#9E52FF" }}>
            Request Early Access
          </button>
        </a>
      </div>
      <img
        src={Image}
        alt=""
        height={900}
        width="100%"
        className="slider-image"
      />
    </div>
  );
};

export default Action;
