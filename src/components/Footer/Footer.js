import React from "react";
import "./Footer.css";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-up">
          <img src="./logo/DEPT-LogoBlack.webp" alt="" />
          <div className="footer-menu">
            <ul>
              <li>
                <a href="">WORK</a>
              </li>
              <li>
                <a href="">SERVICE</a>
              </li>
              <li>
                <a href="">STORIES</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">CAREERS</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/DeptAgency/" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/deptagency" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/deptagency/" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/deptagency"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hline"></div>
        <div className="footer-bottom">
          <div className="footer-down">
            <ul>
              <li>
                <a href="">Chamber of Commerce: 63464101</a>
              </li>
              <li>
                <a href="">VAT: NL 8552.47.502.B01</a>
              </li>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <p>© 2018 Dept Agency</p>
        </div>
      </div>
      <div className="footer-scroll">
        <div className="arrow-to-top">
          <button onClick={scrollToTop}>
            <FaLongArrowAltUp size="35px" />
          </button>
          <p>TOP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
