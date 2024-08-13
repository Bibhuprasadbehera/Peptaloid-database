// Lipinski.js
import React, { useState } from 'react';
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

const generateLipinskiPayload = (row, cellIndex, currentPage, itemsPerPage) => ({
  skip: (currentPage - 1) * itemsPerPage,
  limit: itemsPerPage,
  conditions: [
    {
      field: "Lipinski",
      value: row[0],
      operation: "equal",
      operator: "and"
    }
  ],
  source: [],
  functional_group: []
});

const Lipinski = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(400);

  return (
    <div>
      <BrowsePage
        title="Browse by Lipinski Rule"
        headers={lipinskiHeaders}
        data={lipinskiData}
        browsingText="You are browsing entries with Lipinski rule violation:"
        browseField="Lipinski"
        generatePayload={(row, cellIndex) => generateLipinskiPayload(row, cellIndex, currentPage, itemsPerPage)}
      />
      <Footer />
    </div>
  );
};

export default Lipinski;

