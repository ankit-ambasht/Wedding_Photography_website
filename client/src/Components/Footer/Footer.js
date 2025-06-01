import React from "react";
import "./Footer.css";
import logo from "../image/logo7.jpg"
// import UploadImage from "../admin/UploadImage";
import { Link } from "react-router-dom";
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
            <Link to="/UploadImage" className="navbar-icon">uplode</Link>
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
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Wedding Studio. All Rights Reserved.</p>
      </div>
    </footer>
//     <footer className="bg-gray-900 text-gray-300 py-10">
//   <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    
//     {/* Logo */}
//     <div className="space-y-4">
//       <img src={logo} alt="logo" className="w-32" />
//       <p className="text-sm font-light">
//         Capturing timeless wedding stories with heart and soul.
//       </p>
//     </div>

//     {/* Navigation */}
//     <div>
//       <h5 className="text-white font-semibold mb-4">Navigation</h5>
//       <ul className="space-y-2 text-gray-400">
//         <li><a href="#home" className="hover:text-white">Home</a></li>
//         <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
//         <li><a href="#about" className="hover:text-white">About Us</a></li>
//         <li><a href="#contact" className="hover:text-white">Contact</a></li>
//         <li>
//           <Link to="/UploadImage" className="text-blue-400 hover:underline">
//             Upload
//           </Link>
//         </li>
//       </ul>
//     </div>

//     {/* Contact */}
//     <div>
//       <h5 className="text-white font-semibold mb-4">Contact Us</h5>
//       <p className="text-gray-400 text-sm">Email: info@yourwebsite.com</p>
//       <p className="text-gray-400 text-sm">Phone: +91-9876543210</p>
//       <p className="text-gray-400 text-sm">Location: Mumbai, India</p>
//     </div>

//     {/* Social Icons */}
//     <div>
//       <h5 className="text-white font-semibold mb-4">Follow Us</h5>
//       <div className="flex space-x-4 text-gray-400 text-lg">
//         <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
//         <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
//         <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
//         <a href="mailto:info@yourwebsite.com" className="hover:text-green-500"><FaEnvelope /></a>
//       </div>
//     </div>

//   </div>

//   <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
//     © 2025 Your Wedding Studio. All Rights Reserved.
//   </div>
// </footer>
  );
};

export default Footer;
