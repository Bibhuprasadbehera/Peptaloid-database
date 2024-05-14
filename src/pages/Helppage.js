// HelpPage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar'; // Adjust the path according to your directory structure
import Header from '../components/Header'; // Adjust the path according to your directory structure
import Footer from '../components/Footer'; // Adjust the path according to your directory structure

const HelpPage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Help Page</h2>
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        {/* Add more content here */}
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;