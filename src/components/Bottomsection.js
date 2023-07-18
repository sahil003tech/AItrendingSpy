import React from "react";
import "../css/bottom.css";
import tick from "../Images/tick.svg";
import Apple from "../Images/apple.svg";
import Android from "../Images/android.svg";

const Bottomsection = () => {
  return (
    <div className="background">
      <div className="start">
        <div className="heading">Start investing today</div>
      </div>

      <div className="list-section">
        {/* Image  */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <img
            src="https://cdn.sanity.io/images/l4rnpwz2/production/26fb4ea8133b953559755087fef15d6a99a84840-1240x521.png?fm=webp&q=80"
            alt=""
            style={{ backgroundColor: "transparent", width: "100%" }}
          />
        </div>
        {/* List item */}
        <div className="right-part">
          <ul>
            <li>
              <div>
                <img
                  src={tick}
                  alt=""
                  height={30}
                  width={30}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Guided goal planing
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
                  height={30}
                  width={30}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Always-on conversational assistance
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
                  height={30}
                  width={30}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Natural language investment search
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
                  height={30}
                  width={30}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Powerful investment comparison
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
                  height={30}
                  width={30}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              Commission-free brokerage
            </li>

            <li>
              <div>
                <img
                  src={tick}
                  alt=""
                  height={30}
                  width={30}
                  className="tick"
                  style={{ marginRight: "0.5em" }}
                />
              </div>
              High-yield saving over 5% APY
            </li>
          </ul>

          <div
            className="right-btn"
            style={{ marginBottom: "16px", marginLeft: "30px" }}
          >
            <a href="#">
              <button>Get Started</button>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          columnGap: "20px",
        }}
      >
        <img src={Apple} alt="" height={50} />
        <img src={Android} alt="" height={50} />
      </div>
    </div>
  );
};

export default Bottomsection;
