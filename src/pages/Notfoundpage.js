// notfoundpage.js
import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Notfoundpage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">404 Page Not Found</h2>
        <p className="paragraph">The page you are looking for does not exist.</p>
        {/* Add more content here */}
        
      </div>
      <Footer />
    </div>
  );
}


export default Notfoundpage;