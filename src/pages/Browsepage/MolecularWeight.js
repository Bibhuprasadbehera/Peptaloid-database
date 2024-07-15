// File: MolecularWeight.js

import React, { useState } from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

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

const generateMWPayload = (row, cellIndex, currentPage, itemsPerPage) => {
  const range = row[0];
  let conditions = [];

  if (range.includes('and above')) {
    const start = parseInt(range.split(' ')[0], 10);
    conditions.push({
      field: "Exact_MW",
      value: start,
      operation: "greater",
      operator: "and"
    });
  } else {
    const [start, end] = range.split(' to ').map(Number);
    conditions.push(
      {
        field: "Exact_MW",
        value: start,
        operation: "greater",
        operator: "and"
      },
      {
        field: "Exact_MW",
        value: end,
        operation: "lesser",
        operator: "and"
      }
    );
  }

  return {
    skip: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage,
    conditions: conditions,
    source: [],
    functional_group: []
  };
};

const MolecularWeight = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div>
      <BrowsePage
        title="Browse by Molecular Weight"
        headers={mwHeaders}
        data={mwData}
        browsingText="You are browsing entries from Molecular Weight range:"
        browseField="Exact_MW"
        generatePayload={(row, cellIndex) => generateMWPayload(row, cellIndex, currentPage, itemsPerPage)}
      />
      <Footer />
    </div>
  );
};

export default MolecularWeight;
