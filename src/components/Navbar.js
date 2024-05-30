import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo2.png'; // Adjust the path according to your directory structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Peptaloid" className="logo" />
        </Link>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>
          <li><NavLink to="/learn" activeClassName="active">Learn</NavLink></li>
          <li><NavLink to="/search" activeClassName="active">Search</NavLink></li>
          <li><NavLink to="/download" activeClassName="active">Download</NavLink></li>
          <li><NavLink to="/faq" activeClassName="active">FAQ</NavLink></li>
          <li><NavLink to="/tools" activeClassName="active">Tools</NavLink></li>
        </ul>
        <NavLink to="/login" activeClassName="active" className="login-button">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
