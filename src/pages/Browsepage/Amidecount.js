//amide count page
import React from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const amideHeaders = ["Range", "Count"];
const amideData = [
  ["2", 88641],
  ["3", 38067],
  ["4", 18260],
  ["5", 4136],
  ["6", 2432],
  ["7", 3312],
  ["8", 1696],
  ["9", 987],
  ["10 or more", 4194]
];

const AmideCount = () => (
  <div>
    <BrowsePage
      title="Browse by No. of Amide Bonds"
      headers={amideHeaders}
      data={amideData}
      browsingText="You are browsing entries with Amide Bonds:"
      browseField="Num_Amide_Bonds"
    />
    <Footer />
  </div>
);

export default AmideCount;
