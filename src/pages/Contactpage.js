// ContactPage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database contact Page</h2>
        <p className="paragraph-center">contact bibhu.behera@niser.ac.in</p>
        {/* Add more content here */}
        
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;