// Pagination.js
import React, { useState, useEffect } from 'react';
import MoleculeCard from '../Molecules/MoleculeCard';
import { useLocation } from 'react-router-dom';
import './pagination.css';

  const Pagination = () => {
    const location = useLocation();
    const { count, category, browsingText } = location.state || {};
    const [molecules, setMolecules] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedMolecules, setSelectedMolecules] = useState([]);
    const [activeTab, setActiveTab] = useState('browse');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    };
    fetchData();
    const fetchedMolecules = Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      CompoundName: `Molecule ${i + 1}`,
      peptaloid_id: `ID${i + 1}`,
      smiles: `C${i + 1}H${i + 1}`,
      MolecularFormula: `C${i + 1}H${i + 1}O${i + 1}`,
      Exact_MW: `${i + 100}`,
      IUPACName: `IUPAC${i + 1}`
    }));
    setMolecules(fetchedMolecules);
  }, [count]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectMolecule = (selectedMolecule) => {
    setSelectedMolecules((prevState) =>
      prevState.some((molecule) => molecule.id === selectedMolecule.id)
        ? prevState.filter((molecule) => molecule.id !== selectedMolecule.id)
        : [...prevState, selectedMolecule]
    );
  };

  const generateFile = (fileType) => {
    const headers = ["Category", "Property", "Value"];
    const rows = selectedMolecules.flatMap(molecule => [
      ["Basic Information", "Peptaloid ID", molecule.peptaloid_id],
      ["Basic Information", "Compound Name", molecule.CompoundName],
      ["Basic Information", "IUPAC Name", molecule.IUPACName],
      ["Basic Information", "Formula", molecule.MolecularFormula],
      ["Basic Information", "SMILES", molecule.smiles],
      ["Basic Information", "Exact MW", molecule.Exact_MW],
    ]);

    const content = [
      headers.join(fileType === 'csv' ? ',' : '\t'),
      ...rows.map(row => row.map(cell => cell === undefined ? '' : `"${cell}"`).join(fileType === 'csv' ? ',' : '\t'))
    ].join('\n');

    const blob = new Blob([content], { type: fileType === 'csv' ? 'text/csv;charset=utf-8;' : 'text/tab-separated-values;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `selected_molecules.${fileType}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
  const handleSelectAllMolecules = (event) => {
    if (event.target.checked) {
      setSelectedMolecules(currentItems);
    } else {
      setSelectedMolecules([]);
    }
  };
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
      <div className="container">
  <div className="select-all-checkbox">
    <input
      type="checkbox"
      onChange={handleSelectAllMolecules}
      checked={selectedMolecules.length === currentItems.length}
    />
    <label>Select All</label>
  </div>
  <div className="tabs">
    <div
      className={`tab ${activeTab === 'select' ? 'active' : ''}`}
      onClick={() => handleTabChange('select')}
    >
      Select
    </div>
    <div
      className={`tab ${activeTab === 'browse' ? 'active' : ''}`}
      onClick={() => handleTabChange('browse')}
    >
      Browse
    </div>
  </div>
  {activeTab === 'select' && (
    <div className="download-dropdown">
      <button
        className="download-button"
        style={{
          filter: activeTab === 'browse' ? 'grayscale(100%)' : 'none',
          float: 'right'
        }}
      >
        Download
      </button>
      <div className="download-content">
        <a href="#" onClick={() => generateFile('csv')}>CSV</a>
        <a href="#" onClick={() => generateFile('tsv')}>TSV</a>
      </div>
    </div>
  )}
</div>
      <div className="molecule-list">
        {currentItems.map((molecule, index) => (
          <MoleculeCard
            key={index}
            molecule={molecule}
            onSelect={handleSelectMolecule}
            isSelected={selectedMolecules.some(m => m.id === molecule.id)}
            isBrowsing={activeTab === 'browse'}
          />
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
