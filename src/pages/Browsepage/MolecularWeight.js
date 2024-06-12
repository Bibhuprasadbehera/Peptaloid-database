import React from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer'; // Corrected path


const mwHeaders = ["Range", "Count"];
const mwData = [
  ["0 to 100", 7],
  ["100 to 200", 701],
  ["200 to 300", 6468],
  ["300 to 400", 34080],
  ["400 to 500", 60721],
  ["500 to 600", 26351],
  ["600 to 700", 9462],
  ["700 to 800", 4731],
  ["800 to 900", 3963],
  ["900 to 1000", 2928],
  ["1000 to 1100", 3137],
  ["1100 to 1200", 2186],
  ["1200 to 1300", 1451],
  ["1300 to 1400", 1093],
  ["1400 to 1500", 962],
  ["1500 and above", 3484]
];

const MolecularWeight = () => (
  <div>
    <BrowsePage title="Browse by Molecular Weight" headers={mwHeaders} data={mwData} />
    <Footer />
  </div>
);

export default MolecularWeight;
