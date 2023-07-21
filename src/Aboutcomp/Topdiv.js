import React from "react";
import "../Aboutcss/Top.css";

const Topdiv = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="top-container">
        <div className="text-container">
          <div
            className="right-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <span>
              <h1
                style={{
                  fontSize: "58px",
                  lineHeight: "1.1",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                We amplify <br />
                Investing with <br />
                AI
              </h1>
            </span>
          </div>

          {/* right part */}
          <div className="left-container">
            <div style={{ paddingTop: "30px", display: "flex" }}>
              <img
                src="https://aisot.com/hubfs/aisot-theme-2023/icons/red-arrow.svg"
                alt=""
                width={57}
                height={57}
                style={{ paddingTop: "23px", paddingRight: "10px" }}
              />
              <h2>
                <span className="span-text">
                  Discover aisot's story and meet the team composed of seasoned
                  professionals with experiences in ml, data science, nlp,
                  blockchain, digital assets and beyond.
                </span>
              </h2>
            </div>
            {/* <h2 className="h2-text">Who We Are</h2>
            <h2 className="h2-text"> Vision</h2>
            <h2 className="h2-text">Team</h2> */}
            <ul style={{ listStyle: "none" }}>
              <li style={{ marginBottom: "20px" }}>
                <a href="#Third" className="arrow">
                  Who We Are
                </a>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <a href="#Four" className="arrow">
                  Vision
                </a>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <a href="#Team" className="arrow">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topdiv;
