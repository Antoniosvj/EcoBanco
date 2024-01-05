import React from "react";
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer footer-custom">
        <p>
          &copy; {new Date().getFullYear()} - <span>Antonio Sérgio Viana Júnior</span>
        </p>
      </div>
    );

  }

export default Footer;