// ContactPage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import lab1 from '../images/lab1.jpg';
import lab2 from '../images/lab2.jpg';

const ContactPage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database contact Page</h2>
        <p className="paragraph" style={{ textAlign: 'justify' }}>Feel free to contact us if you have questions or want to report a bug or suggest a new feature.
        Please send your feedback via e-mail: bibhu.behera@niser.ac.in , badireenath@niser.ac.in or Peptaloid@gmail.com</p>
        <img src={lab1} alt="Database Architecture" className="image" style={{ width: '70%' }}/>
        <img src={lab2} alt="Database Architecture" className="image" style={{ width: '70%' }}/>
          
        {/* Add more content here */}
        
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;