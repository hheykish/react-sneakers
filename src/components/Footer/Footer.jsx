import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import FontAwesome icons

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  const heartStyle = {
    color: 'red',      // Makes the heart symbol red
    fontSize: '20px'   // Adjust the size as needed
  };

  return (
    <div className="footer">
      <div className="contact-address">
        <p><FaEnvelope /> support@solesavvy.com</p>
        <p><FaPhone /> Phone : +91 7845561289</p>
        <p>123 Sole Street, Sneaker City, SS12345</p>
      </div>
      <big>&copy; {copyrightYear} Made with <span style={heartStyle}>&hearts;</span> by Dev Akash.</big>
      <div className="social-links">
        <Link to="https://twitter.com/" target="_blank">
          <BsTwitter />
        </Link>
        <Link to="https://github.com/" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
