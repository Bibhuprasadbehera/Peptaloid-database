// Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>PEPTALOID DATABASE</h1>
          <p>This database contains over 160,000 natural <br /> molecules known as peptide alkaloids, <br /> offering vast opportunities for drug discovery, <br /> ecological research, and biotechnological innovations.</p>
          <p>Explore the comprehensive collection of <br /> peptide alkaloids and unlock the potential <br /> of nature's bioactive compounds.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
