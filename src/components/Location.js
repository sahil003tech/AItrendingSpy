import React from "react";
import "../css/Question.css";
import Plus from "../Images/plus.svg";

const Location = () => {
  return (
    <div
      style={{
        backgroundColor: "#eeefe8",
        marginTop: "0",
        paddingTop: "2em",
        width: "100%",
        paddingBottom: "5em",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          display: "inline-block",
          width: "100%",
        }}
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
        {/* question section */}
        <div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              What is Magnifi?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              How much does it cost?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              What's included?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              Is it safe to use?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              How does it work?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              How do I add funds to my account
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              How can I withdraw money from my account?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              How does AI improve my investing decisions?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="question">
            <p
              style={{
                fontSize: "30px",
                fontWeight: "400",
                lineHeight: "100%",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              How can I download the Magnifi app?
            </p>
            <img
              src={Plus}
              alt=""
              height={17}
              width={17}
              style={{ marginRight: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
