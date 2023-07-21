import React from "react";
import "../css/Footer.css";
import Logo from "../Images/AITradingSpy_Logo_Simple_Transperent.png";

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
              color: "white",
            }}
          >
            Tampa Office
          </p>
          <p style={{ fontSize: "0.816em", color: "white" }}>
            501 East Kennedy Boulevard Tampa,
            <br />
            FL 33602
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
            }}
          >
            St Peterburg Office
          </p>
          <p style={{ fontSize: "0.816em", color: "white" }}>
            2529 Central Ave, St.Peterburg,
            <br />
            FL 33713
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              marginBottom: "16px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
            }}
          >
            Get in touch with us.
          </p>
          <p
            style={{
              fontSize: "0.816em",
              color: "white",
            }}
          >
            To learn more,contact,
            <br />
            support@aitradingspy.com
          </p>
        </div>
        <div>
          <img
            src={Logo}
            alt=""
            width={144}
            height={144}
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
