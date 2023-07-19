import React, { useState, useEffect } from "react";
import "../css/Magnifi.css";
import MagnifiSvg from "../Images/magnifi.svg";

const Magnifi = () => {
  // return (
  //   <div className="image">
  //     <img src={MagnifiSvg} alt="image" className="image-responsive" />
  //   </div>
  // );
  const [text, setText] = useState("");
  const fullText = "Trading with AI";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      } else {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="svg-animation">
      <svg
        className="animated-text"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 30"
      >
        <text x="0" y="20">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Magnifi;
