import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/navbar.png';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Close the dropdown if it's already open
    } else {
      setActiveDropdown(dropdownName); // Open the clicked dropdown and close others
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link"><img src={logo} alt="Peptaloid" className="logo" /></Link>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li><NavLink to="/" isActive={() => isActive('/')} activeClassName="active">Home</NavLink></li>
          <li className={`dropdown search-dropdown ${activeDropdown === 'search' ? 'active' : ''}`}>
            <a href="#" onClick={() => toggleDropdown('search')} className={isActive('/search') || isActive('/search/advanced') ? "active" : ""}> Search</a>
            {activeDropdown === 'search' && (
              <ul className="dropdown-menu">
                <li><NavLink to="/search" activeClassName="active">Simple Search</NavLink></li>
                <li><NavLink to="/browse/advanced" activeClassName="active">Advanced Search</NavLink></li>
              </ul>
            )}
          </li>
          <li className={`dropdown browse-dropdown ${activeDropdown === 'browse' ? 'active' : ''}`}>
            <a href="#" onClick={() => toggleDropdown('browse')} className={isActive('/browse/carbon') || isActive('/browse/molecularweight') || isActive('/browse/source') || isActive('/browse/qed') || isActive('/browse/lipinski') ? "active" : ""}> Browse</a>
            {activeDropdown === 'browse' && (
              <ul className="dropdown-menu">
                <li><NavLink to="/Pagination/Pagination" activeClassName="active">Browse All</NavLink></li>
                <hr />
                <li><NavLink to="/browse/carbon" activeClassName="active">Browse by No. of Carbon</NavLink></li>
                <li><NavLink to="/browse/molecularweight" activeClassName="active">Browse by Molecular Weight</NavLink></li>
                <li><NavLink to="/browse/source" activeClassName="active">Browse by Source</NavLink></li>
                <li><NavLink to="/browse/qed" activeClassName="active">Browse by QED</NavLink></li>
                <li><NavLink to="/browse/lipinski" activeClassName="active">Browse by Lipinski Rule</NavLink></li>
                <li><NavLink to="/browse/amidecount" activeClassName="active">Browse by Amide count</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/help" isActive={() => isActive('/help')} activeClassName="active">Help</NavLink></li>
          <li><NavLink to="/contact" isActive={() => isActive('/contact')} activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/download" isActive={() => isActive('/download')} activeClassName="active">Download</NavLink></li>
          <li><NavLink to="/tools" isActive={() => isActive('/tools')} activeClassName="active">Tools</NavLink></li>
          <li><NavLink to="/faq" isActive={() => isActive('/faq')} activeClassName="active">FAQ</NavLink></li>
        </ul>
        <NavLink to="/login" isActive={() => isActive('/login')} activeClassName="active" className="login-button">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
