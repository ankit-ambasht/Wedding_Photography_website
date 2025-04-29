import React, { useState,useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo  from '../image/logo7.jpg'

const Header = () => {
  const [showbar, setShowbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
         <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <h2>
            <Link to="/">
            <img src={logo} className="logo" alt="logo"/>
            </Link>           
          </h2>
        </div>
        <div className={showbar ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
           
            <li>
              <Link to="/gallery" className="navbar-icon">PHOTOGRAPH</Link>
            </li>
            <li>
              <Link to="/video" className="navbar-icon">FILMS</Link>
            </li>
            {/* <li>
              <Link to="/PreWedding" style={{"color":"gold"}}>PreWedding</Link>
            </li> */}
            <li>
              <Link to="/faq" className="navbar-icon">STORIES</Link>
            </li>
            <li>
              <Link to="/faq" className="navbar-icon">ABOUT</Link>
            </li>
            <li className="contact-button">
              <Link to="/contactUs" className="navbar-icon">CONTACT US</Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <div className="hamburger-menu">
            <button
              className="btn"
              href="#"
              onClick={() => setShowbar(!showbar)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
