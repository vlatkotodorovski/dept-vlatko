import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaTimes } from "react-icons/fa";
import "./Menu.css";

const Menu = ({ toggleMenu }) => {
  const [global, setGlobal] = useState(false);

  const handleGlobalClick = () => {
    if (!global) {
      setGlobal(true);
    } else {
      setGlobal(false);
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="header-logo">
          <img src="./logo/DEPT-LogoBlack.webp" alt="" />
        </div>
        <button onClick={toggleMenu} className="button-close">
          <FaTimes />
        </button>
      </div>
      <div className="menu-main">
        <div className="menu-main-left">
          <div className="global-dropdown">
            <button onClick={handleGlobalClick}>
              GLOBAL {global ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <ul className={global ? "show-global" : "hide-global"}>
              <li>NEDERLAND</li>
              <li>DEUTSCHLAND</li>
              <li>DENMARK</li>
              <li>ENGLISH</li>
            </ul>
          </div>
          <div className="list-social-menu">
            <ul>
              <li>
                <a href="#">FACEBOOK</a>
              </li>
              <li>
                <a href="#">TWITTER</a>
              </li>
              <li>
                <a href="#">INSTAGRAM</a>
              </li>
              <li>
                <a href="#">LINKEDIN</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-main-right">
          <ul>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">HOME</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">WERK</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">OVER</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">DIENSTEN</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">PARTNERS</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">STORIES</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">VACATURES</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">EVENTS</a>
            </li>
            <li>
              <p className="hide">&#9654;</p>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
