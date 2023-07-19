import React, { useState } from "react";
import Question from "./Question";
import Questions from "./Questions";
import Questiont from "./Questiont";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        backgroundColor: "#eeefe8",
        paddingTop: "2em",
        width: "100%",
        paddingBottom: "5em",
      }}
      className="Question-section"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          display: "inline-block",
          width: "100%",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginTop: "24px",
              marginBottom: "24px",
              fontWeight: "400",
              fontFamily: "Inter",
              color: "black",
            }}
          >
            Questions?
          </h1>
        </div>
        {/* question section */}
        <div>
          <Question />
          <Questions />
          <Questiont />
        </div>
      </div>
    </div>
  );
};

export default Location;
