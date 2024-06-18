// Pagination.js
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MoleculeCard from '../Molecules/MoleculeCard';
import { useLocation } from 'react-router-dom';
import './pagination.css';

const Pagination = () => {
  const location = useLocation();
  const { count, category, browsingText } = location.state || {};
  const [molecules, setMolecules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
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

  const maxPagesToShow = 5;
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
      {category && <p>{browsingText} {category}</p>}
      <p>Retrieved entries: {count}</p>
      <p>
        Showing {indexOfFirstItem + 1} to{' '}
        {indexOfLastItem > molecules.length ? molecules.length : indexOfLastItem} of {molecules.length} entries
      </p>
      <div className="pagination-controls">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div className="pagination-buttons">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <div className="page-numbers">
            {startPage > 1 && <span onClick={() => handlePageChange(1)}>1</span>}
            {startPage > 2 && <span className="ellipsis">...</span>}
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => handlePageChange(number)}
                className={number === currentPage ? 'active' : ''}
              >
                {number}
              </span>
            ))}
            {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
            {endPage < totalPages && <span onClick={() => handlePageChange(totalPages)}>{totalPages}</span>}
          </div>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
      <div className="molecule-list">
        {currentItems.map((molecule, index) => (
          <MoleculeCard key={index} molecule={molecule} />
        ))}
      </div>
      {/* Duplicate pagination control at the bottom */}
      <div className="pagination-controls">
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <div className="pagination-buttons">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <div className="page-numbers">
            {startPage > 1 && <span onClick={() => handlePageChange(1)}>1</span>}
            {startPage > 2 && <span className="ellipsis">...</span>}
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => handlePageChange(number)}
                className={number === currentPage ? 'active' : ''}
              >
                {number}
              </span>
            ))}
            {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
            {endPage < totalPages && <span onClick={() => handlePageChange(totalPages)}>{totalPages}</span>}
          </div>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
