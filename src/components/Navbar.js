import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo2.png'; // Adjust the path according to your directory structure

const Navbar = () => {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const toggleSearchDropdown = () => {
    setIsSearchDropdownOpen(!isSearchDropdownOpen);
  };

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
          <li className="search-dropdown">
            <NavLink to="/search" activeClassName="active" onClick={toggleSearchDropdown}>Search</NavLink>
            {isSearchDropdownOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/search" activeClassName="active">Simple Search</NavLink></li>
                <li><NavLink to="/search/advanced" activeClassName="active">Advanced Search</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/browse" activeClassName="active">Browse</NavLink></li>
          <li><NavLink to="/help" activeClassName="active">Help</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/download" activeClassName="active">Download</NavLink></li>
          <li><NavLink to="/tools" activeClassName="active">Tools</NavLink></li>
          <li><NavLink to="/faq" activeClassName="active">FAQ</NavLink></li>
        </ul>
        <NavLink to="/login" activeClassName="active" className="login-button">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;