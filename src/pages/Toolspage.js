// toolspage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Toolspage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Tools Page</h2>
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        {/* Add more content here */}
        
      </div>
      <Footer />
    </div>
  );
}

export default Toolspage;