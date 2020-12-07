import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ toggleMenu }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const animateNavBar = () => {
    if (window.scrollY >= 85) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  window.addEventListener("scroll", animateNavBar);

  return (
    <div className="nav-container">
      <nav className={hasScrolled ? "navbar active" : "navbar"}>
        <div className="nav-left">
          <img src="./logo/DEPT-LogoBlack.webp" alt="" />
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <div className="nav-right">
            <p>MENU</p>
            <div className="burger-menu">
              <i></i>
              <i></i>
            </div>
          </div>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
