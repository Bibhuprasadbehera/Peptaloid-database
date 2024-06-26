import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmilesStructureViewer from '../components/Molecules/SmilesStructureViewer';

const Toolspage = () => {
  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Tools Page</h2>
        <SmilesStructureViewer />
      </div>
      <Footer />
    </div>
  );
}

export default Toolspage;