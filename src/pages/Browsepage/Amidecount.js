//amide count page
import React from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const amideHeaders = ["Range", "Count"];
const amideData = [
  ["2 to 3", 88641],
  ["3 to 4", 38067],
  ["4 to 5", 18260],
  ["5 to 6", 4136],
  ["6 to 7", 2432],
  ["7 to 8", 3312],
  ["8 to 9", 1696],
  ["9 to 10", 987],
  ["10 or more", 4194]
];

const AmideCount = () => (
  <div>
    <BrowsePage
      title="Browse by No. of Amide Bonds"
      headers={amideHeaders}
      data={amideData}
      browsingText="You are browsing entries with Amide Bonds:"
    />
    <Footer />
  </div>
);

export default AmideCount;
