// import React, { useState } from "react";
// import "../css/Navbar.css";

// const Navbar = () => {
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);

//   return (
//     <header className={color ? "header header-bg" : "header"}>
//       <a href="#" className="logo">
//         AITradingSPy
//       </a>

//       <nav className={color ? "navbar header-bg" : "navbar"}>
//         <ul>
//           <li>
//             <a href="#">Discover</a>
//           </li>

//           <li>
//             <a href="#">Learn</a>
//           </li>

//           <li>
//             <a href="#">Magnifi+</a>
//           </li>

//           <li>
//             <a href="#">Sigh in</a>
//           </li>
//           <li>
//             <a href="#">
//               <button className="btn">Get Started</button>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "../css/Navbar.css";
import Logo from "../Images/navbar-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? `navbar navbar-bg ${menuOpen ? "open" : ""}`
          : `navbar ${menuOpen ? "open" : ""}`
      }
    >
      <div className="logo">
        <img
          src={Logo}
          alt=""
          width={120}
          height={40}
          style={{ backgroundColor: "transparent", marginLeft: "40px" }}
        />
      </div>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>About ATS</li>
        <li>How It Works</li>
        <li>Sign In</li>
        <li>
          <div style={{ marginRight: "40px" }}>
            <a href="#" style={{ textDecoration: "none" }} className="btn">
              Request Early Access
            </a>
          </div>
        </li>
      </ul>
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
