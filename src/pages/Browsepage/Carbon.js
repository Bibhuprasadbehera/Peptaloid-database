// Carbon.js
import React from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const carbonHeaders = ["Range", "Count"];
const carbonData = [
  ["0 to 10", 1315],
  ["10 to 20", 29735],
  ["20 to 30", 84046],
  ["30 to 40", 27844],
  ["40 to 50", 7411],
  ["50 to 60", 4879],
  ["60 to 70", 2687],
  ["70 to 80", 1637],
  ["80 to 90", 948],
  ["90 to 100", 625],
  ["100 and above", 598]
];

const Carbon = () => (
  <div>
    <BrowsePage
      title="Browse by No. of Carbon"
      headers={carbonHeaders}
      data={carbonData}
      browsingText="You are browsing entries with Carbon Number:"
      browseField="carbon_count"
    />
    <Footer />
  </div>
);

export default Carbon;
