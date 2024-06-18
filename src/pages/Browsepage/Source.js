// Source.js
import React from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const sourceHeaders = ["Source", "Count"];
const sourceData = [
  ["From coconut", 50150],
  ["From npatlas", 7548],
  ["From supernatural", 147152],
  ["From zinc", 7803]
];

const Source = () => (
  <div>
    <BrowsePage 
      title="Browse by Source" 
      headers={sourceHeaders} 
      data={sourceData} 
      browsingText="You are browsing entries that has been collected" 
    />
    <Footer />
  </div>
);

export default Source;
