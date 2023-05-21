import React, { useState } from "react";
import "./Navbar.css";
import CNMCLogo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={CNMCLogo} alt="" />
            <div className="logo-text">
              <h2>CNMC</h2>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {!showNavbar ? <GiHamburgerMenu /> : <ImCross />}
          </div>
          <div className={`nav-elements ${showNavbar && "active"} `}>
            <ul>
              <li className="menu">
                <a href="/">Home</a>
              </li>
              <li className="menu">
                <a href="/members">Members</a>
              </li>
              <li className="menu">
                <a href="/events">Events</a>
              </li>
              <li className="menu">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
