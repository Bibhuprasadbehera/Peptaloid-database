import React, { useState } from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmilesStructureViewer from '../components/Molecules/SmilesStructureViewer';
import SmilesPropertyPredictor from '../components/Molecules/SmilesPropertyPredictor';

const Toolspage = () => {
  const [activeTab, setActiveTab] = useState('structure');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Tools Page</h2>
        <div className="tab-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === 'structure' ? 'active' : ''}`}
              onClick={() => handleTabChange('structure')}
            >
              Structure Viewer
            </div>
            <div
              className={`tab ${activeTab === 'property' ? 'active' : ''}`}
              onClick={() => handleTabChange('property')}
            >
              Property Predictor
            </div>
          </div>
          <div className="tab-content">
            {activeTab === 'structure' && <SmilesStructureViewer />}
            {activeTab === 'property' && <SmilesPropertyPredictor />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Toolspage;
