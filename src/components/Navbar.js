import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo2.png'; // Adjust the path according to your directory structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Peptaloid" className="logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
