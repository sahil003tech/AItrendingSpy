import React from "react";
import "../css/Action.css";

const Action = () => {
  return (
    <div className="main">
      <div className="container">
        <h1 style={{ color: "black" }}>
          Designed to
          <br />
          help you invest
        </h1>
        <p style={{ color: "black" }}>
          We belive investing shouldn't take over
          <br />
          your life , it should allow you to live it.
        </p>
        <a href="#">
          <button>Get Started</button>
        </a>
      </div>
      <img
        src="https://cdn.sanity.io/images/l4rnpwz2/production/d398d14cf3545824af135a0467c0510aa1620cd2-1920x1080.jpg?fm=webp&q=80"
        alt=""
        height={900}
        width="100%"
        className="slider-image"
      />
    </div>
  );
};

export default Action;
