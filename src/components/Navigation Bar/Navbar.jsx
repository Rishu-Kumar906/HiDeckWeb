import "./Navbar.css";
import logo from "../../Images/logo.png";
import Search from "../Search/Search";
// import { useState } from "react";
const Navbar = () => {
  // const [select, setSelect] = useState("Home");
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="HiDeck-logo" width="80px" />
        </div>
        <Search />
        <hr />
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Couple Stay</li>
          <li>Vila & Group Partis </li>
          <li>Decoration & More</li>
        </ul>
        <button>Login</button>
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
