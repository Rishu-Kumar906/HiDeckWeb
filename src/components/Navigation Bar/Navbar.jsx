import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="HiDeck-logo" width="80px" />
        </div>
        <ul>
          <li>
            <Link to="/src/pages/Home.jsx">Home</Link>
          </li>
          <li>
            <Link to="/src/pages/Menu.jsx">Menu</Link>
          </li>
          <li>
            <Link to="/src/pages/CoupleStay.jsx">Couple Stay</Link>
          </li>
          <li>
            <Link to="/src/pages/VilaAndGroupPartis.jsx">
              Vila & Group Partis
            </Link>
            Vila & Group Partis
          </li>
          <li>
            <Link to="/src/pages/DecorationAndMore.jsx">Decoration & More</Link>
          </li>
          <li>
            <Link to="/src/pages/ContactUs.jsx">Contact Us</Link>
          </li>
        </ul>

        <link to="/src/pages/LoginPage.jsx">
          <button>Login</button>
        </link>
        {/* <button className="whatsapp-button">
          <img
            src="../src/Images/WhatApp button/whatsapp-6273368_1280.png"
            width="45px"
            alt="WhatsApp Logo"
            className="whatsapp-logo"
          />
        </button> */}
      </nav>
    </>
  );
};

export default Navbar;
