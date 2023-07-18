import React from "react";
import "../css/Magnifi.css";
import MagnifiSvg from "../Images/magnifi.svg";

const Magnifi = () => {
  return (
    <div className="image">
      <img src={MagnifiSvg} alt="image" className="image-responsive" />
    </div>
  );
};

export default Magnifi;
