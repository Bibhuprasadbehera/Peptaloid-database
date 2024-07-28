import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/navbar.png';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const isActive = (path) => location.pathname === path;

  const handleBrowseAllClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const payload = {
      skip: 0,
      limit: 30,
      conditions: [
        {
          field: "Num_Amide_Bonds",
          value: 1,
          operation: "greater",
          operator: "and"
        }
      ],
      source: [],
      functional_group: []
    };
    console.log("Navigating with payload:", payload); // Add this line for debugging
    navigate('/pagination', { state: { payload } });
  };

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
                <li><a href="#" onClick={handleBrowseAllClick}>Browse All</a></li>
                <hr />
                <li><NavLink to="/browse/carbon" activeClassName="active">Browse by No. of Carbon</NavLink></li>
                <li><NavLink to="/browse/molecularweight" activeClassName="active">Browse by Molecular Weight</NavLink></li>
                <li><NavLink to="/browse/qed" activeClassName="active">Browse by QED</NavLink></li>
                <li><NavLink to="/browse/lipinski" activeClassName="active">Browse by Lipinski Rule</NavLink></li>
                <li><NavLink to="/browse/amidecount" activeClassName="active">Browse by Amide count</NavLink></li>
                <li><NavLink to="/browse/source" activeClassName="active">Browse by Source of data collection</NavLink></li>
              </ul>
            )}
          </li>
          <li><NavLink to="/help" isActive={() => isActive('/help')} activeClassName="active">About</NavLink></li>
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