// File: Source.js

import React, { useState } from 'react';
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

const generateSourcePayload = (row, cellIndex, currentPage, itemsPerPage) => {
  const source = row[0].split(' ')[1].toLowerCase();
  return {
    skip: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage,
    conditions: [],
    source: [source],
    functional_group: []
  };
};

const Source = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div>
      <BrowsePage
        title="Browse by Source"
        headers={sourceHeaders}
        data={sourceData}
        browsingText="You are browsing entries that have been collected from:"
        browseField="source"
        generatePayload={(row, cellIndex) => generateSourcePayload(row, cellIndex, currentPage, itemsPerPage)}
      />
      <Footer />
    </div>
  );
};

export default Source;
