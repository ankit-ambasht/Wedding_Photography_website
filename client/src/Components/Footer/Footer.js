import React from "react";
import "./Footer.css";
import logo from "../image/logo7.jpg"
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} className="logo" alt="logo"/>
          <p>Capturing timeless wedding stories with heart and soul.</p>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h5>Navigation</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>Email: info@yourwebsite.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="mailto:info@yourwebsite.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Wedding Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
