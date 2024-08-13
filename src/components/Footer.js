// Footer.js

import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" aria-label="Facebook"></a>
        <a href="#" aria-label="Twitter"></a>
        <a href="#" aria-label="Instagram"></a>
        <a href="#" aria-label="LinkedIn"></a>
      </div>
      <div className="contact-info">
        <p><a href="mailto:info@example.com">databasepeptaloid@gmail.com</a></p>
        <p>NISER, Bhubaneswar, India</p>
      </div>
      <p>&copy; Peptaloid Database {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;