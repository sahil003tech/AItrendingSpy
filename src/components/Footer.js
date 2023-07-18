import React from "react";
import "../css/Footer.css";
import Logo from "../Images/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inside-footer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            New York Office
          </p>
          <p style={{ fontSize: "0.816em" }}>
            1 pennsylavina Plaze,
            <br />
            39th Floor <br />
            New york,NY 10119
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Boulder Office
          </p>
          <p style={{ fontSize: "0.816em" }}>
            2440 Junction Place, Suite 300,
            <br />
            Boulder, Co 80301
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            Get in touch with us.
          </p>
          <p
            style={{
              fontSize: "0.816em",
            }}
          >
            To learn more,contact,
            <br />
            hello@gmail.com
          </p>
          <p
            style={{
              fontSize: "0.816em",
              marginTop: "16px",
            }}
          >
            For Question & support,contact,
            <br />
            support@gmail.com
          </p>
        </div>
        <div>
          <img
            src={Logo}
            alt=""
            width={144}
            height={144}
            style={{ color: "white", backgroundColor: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
