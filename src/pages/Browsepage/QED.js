// File: QED.js

import React, { useState } from 'react';
import './Browse.css';
import BrowsePage from '../BrowsePage';
import Footer from '../../components/Footer';

const qedHeaders = ["Range", "Count"];
const qedData = [
  ["0 to 0.1", 19377],
  ["0.1 to 0.2", 10378],
  ["0.2 to 0.3", 12745],
  ["0.3 to 0.4", 15873],
  ["0.4 to 0.5", 20794],
  ["0.5 to 0.6", 24395],
  ["0.6 to 0.7", 23643],
  ["0.7 to 0.8", 20699],
  ["0.8 to 0.9", 12601],
  ["0.9 to 1", 1220]
];

const generateQEDPayload = (row, cellIndex, currentPage, itemsPerPage) => {
  const [start, end] = row[0].split(' to ').map(Number);
  return {
    skip: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage,
    conditions: [
      {
        field: "qed_score",
        value: start,
        operation: "greater",
        operator: "and"
      },
      {
        field: "qed_score",
        value: end,
        operation: "lesser",
        operator: "and"
      }
    ],
    source: [],
    functional_group: []
  };
};

const QED = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div>
      <BrowsePage
        title="Browse by QED"
        headers={qedHeaders}
        data={qedData}
        browsingText="You are browsing entries from QED range:"
        browseField="qed_score"
        generatePayload={(row, cellIndex) => generateQEDPayload(row, cellIndex, currentPage, itemsPerPage)}
      />
      <Footer />
    </div>
  );
};

export default QED;
