import React from "react";
import "../css/Footer.css";
import Logo from "../Images/AITradingSpy.png";

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
            Tampa Office
          </p>
          <p style={{ fontSize: "0.816em" }}>
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
            }}
          >
            St Peterburg Office
          </p>
          <p style={{ fontSize: "0.816em" }}>
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
            support@aitradingspy.com
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
