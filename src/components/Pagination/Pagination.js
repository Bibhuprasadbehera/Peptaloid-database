// Pagination.js
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MoleculeCard from '../Molecules/MoleculeCard';
import { useLocation } from 'react-router-dom';
import './pagination.css';

const Pagination = () => {
  const location = useLocation();
  const { count } = location.state || {};
  const [molecules, setMolecules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    // Simulate fetching molecules based on the count value
    const fetchedMolecules = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Molecule ${i + 1}`,
      description: `This is molecule ${i + 1}`,
    }));
    setMolecules(fetchedMolecules);
  }, [count]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = molecules.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(molecules.length / itemsPerPage);
  const pageNumbers = [];

  const maxPagesToShow = 5; // Maximum number of page numbers to show
  let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="pagination-container">
      <h1>Pagination</h1>
      <p>Count: {count}</p>
      <div className="molecule-list">
        {currentItems.map((molecule, index) => (
          <MoleculeCard key={index} molecule={molecule} />
        ))}
      </div>
      <div className="pagination-controls">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div className="pagination-buttons">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="page-numbers">
            {currentPage > 1 && <span onClick={() => handlePageChange(1)}>1</span>}
            {currentPage > maxPagesToShow + 1 && <span className="ellipsis">...</span>}
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => handlePageChange(number)}
                className={number === currentPage ? 'active' : ''}
              >
                {number}
              </span>
            ))}
            {endPage < totalPages && <span className="ellipsis">...</span>}
            {endPage < totalPages && <span onClick={() => handlePageChange(totalPages)}>{totalPages}</span>}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= molecules.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;