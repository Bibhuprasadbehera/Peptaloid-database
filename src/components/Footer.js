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
        <p><a href="mailto:info@example.com">bibhu.behera@niser.ac.in</a></p>
        <p>NISER, Bhubaneswar, India</p>
      </div>
      <p>&copy; Alkaloid Database {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;