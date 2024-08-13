// File: Carbon.js

import React, { useState } from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const carbonHeaders = ["Range", "Count"];
const carbonData = [
  ["1 to 10", 1315],
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

const generateCarbonPayload = (row, cellIndex, currentPage, itemsPerPage) => {
  const range = row[0];
  let conditions = [];

  if (range.includes('and above')) {
    const start = parseInt(range.split(' ')[0], 10);
    conditions.push({
      field: "carbon_count",
      value: start,
      operation: "greater",
      operator: "and"
    });
  } else {
    const [start, end] = range.split(' to ').map(Number);
    conditions.push(
      {
        field: "carbon_count",
        value: start,
        operation: "greater",
        operator: "and"
      },
      {
        field: "carbon_count",
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

const Carbon = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(400);

  return (
    <div>
      <BrowsePage
        title="Browse by No. of Carbon"
        headers={carbonHeaders}
        data={carbonData}
        browsingText="You are browsing entries with Carbon Number:"
        browseField="carbon_count"
        generatePayload={(row, cellIndex) => generateCarbonPayload(row, cellIndex, currentPage, itemsPerPage)}
      />
      <Footer />
    </div>
  );
};

export default Carbon;
