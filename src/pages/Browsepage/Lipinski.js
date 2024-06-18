// Lipinski.js
import React from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const lipinskiHeaders = ["Rule", "Count"];
const lipinskiData = [
  ["0", 1829],
  ["1", 16884],
  ["2", 14844],
  ["3", 31822],
  ["4", 96346]
];

const Lipinski = () => (
  <div>
    <BrowsePage 
      title="Browse by Lipinski Rule" 
      headers={lipinskiHeaders} 
      data={lipinskiData} 
      browsingText="You are browsing entries with Lipinski rule violation:" 
    />
    <Footer />
  </div>
);

export default Lipinski;
