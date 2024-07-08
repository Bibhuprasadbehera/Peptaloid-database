import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MoleculeCard from '../Molecules/MoleculeCard';
import './pagination.css';
import AdvancedSearchSidebar from '../../pages/Browsepage/sidebar';

const Pagination = () => {
  const location = useLocation();
  const [molecules, setMolecules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedMolecules, setSelectedMolecules] = useState([]);
  const [activeTab, setActiveTab] = useState('browse');
  const [selectAll, setSelectAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const payload = location.state?.payload;
      if (!payload) {
        setError("No search payload found");
        setLoading(false);
        return;
      }
      try {
        console.log("Fetching with payload:", payload);  // Debug log
        const response = await axios.post('http://127.0.0.1:8000/api/molecules/search', payload);
        setMolecules(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setError("Failed to fetch results. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [location.state]);

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

  const handleFilterChange = (updatedFilters) => {
    console.log('Filters updated:', updatedFilters);
  };

  const handleSelectAllMolecules = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedMolecules(currentItems);
    } else {
      setSelectedMolecules([]);
    }
  };

  const isDownloadDisabled = activeTab === 'browse' || selectedMolecules.length === 0;

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'browse') {
      setSelectedMolecules([]);
      setSelectAll(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pagination-container">
      <h1>Search Results</h1>
      <p>
        Showing {indexOfFirstItem + 1} to{' '}
        {indexOfLastItem > molecules.length ? molecules.length : indexOfLastItem} of {molecules.length} entries
      </p>
      <div className="pagination-controls">
        <select className="items-per-page-select" value={itemsPerPage} onChange={handleItemsPerPageChange}>
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
      <div className="content-split-container">
        <AdvancedSearchSidebar onFilterChange={handleFilterChange} />
        <div className="molecule-list-container">
          <div className="containerpagination">
            <div className="tabs">
              <div
                className={`tab ${activeTab === 'browse' ? 'active' : ''}`}
                onClick={() => handleTabChange('browse')}
              >
                Browse
              </div>
              <div
                className={`tab ${activeTab === 'select' ? 'active' : ''}`}
                onClick={() => handleTabChange('select')}
              >
                Select
              </div>
              <div
                className={`tab select-all-tab ${selectAll ? 'active' : ''} ${activeTab !== 'select' ? 'disabled' : ''}`}
                onClick={() => activeTab === 'select' && handleSelectAllMolecules()}
              >
                Select All
              </div>
              <div
                className={`tab download-tab ${isDownloadDisabled ? 'disabled' : ''}`}
                onClick={() => !isDownloadDisabled && generateFile('csv')}
              >
                Download
              </div>
            </div>
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
          <div className="pagination-controls">
            <select className="items-per-page-select" value={itemsPerPage} onChange={handleItemsPerPageChange}>
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
      </div>
    </div>
  );
};

export default Pagination;
