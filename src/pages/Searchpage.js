import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Footer from '../components/Footer';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState("Compound Name");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFieldChange = (field) => {
    setSelectedField(field);
  };

  const handleSearch = () => {
    if (!selectedField) {
      alert("Please select a search field.");
      return;
    }

    let apiField;
    switch (selectedField) {
      case "SMILES":
        apiField = "smiles";
        break;
      case "Molecular Formula":
        apiField = "MolecularFormula";
        break;
      case "Origin (Bacterium or Fungus...)":
        apiField = "origin_type";
        break;
      case "Origin species":
        apiField = "origin_species";
        break;
      case "Peptaloid id":
        apiField = "peptaloid_id";
        break;
      case "Genus":
        apiField = "genus";
        break;
      default:
        apiField = selectedField.replace(/ /g, "_");
    }

    const payload = {
      skip: 0,
      limit: 30,
      conditions: [
        {
          field: apiField,
          value: searchTerm,
          operation: "equal",
          operator: "and"
        }
      ],
      source: [],
      functional_group: []
    };

    console.log("Search Payload:", payload); // Debug log
    navigate('/pagination', { state: { payload } });
  };

  const fields = [
    "Compound Name",
    "Peptaloid id",
    "InChIKey",
    "IUPAC Name",
    "Compound InChI",
    "Molecular Formula",
    "SMILES",
    "Genus",
    "Origin species",
    "Origin (Bacterium or Fungus...)",
  ];

  const midIndex = Math.ceil(fields.length / 2);
  const firstColumnFields = fields.slice(0, midIndex);
  const secondColumnFields = fields.slice(midIndex);

  return (
    <div>
      <div className="container">
        <h2 className="heading">Pepataloid Database Search Page</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <p className="paragraph">
          To speed up the search, please select a field to get the desired result. You can search by any of the following fields:
        </p>
        <div className="search-fields">
          <div className="search-fields-column">
            {firstColumnFields.map((field) => (
              <div key={field} className="checkbox-wrapper-26">
                <label htmlFor={`_checkbox-${field}`}>
                  <input
                    type="radio"
                    id={`_checkbox-${field}`}
                    name="searchField"
                    checked={selectedField === field}
                    onChange={() => handleFieldChange(field)}
                  />
                  <div className="tick_mark"></div>
                  <span className={`search-field-label ${selectedField === field ? 'selected' : ''}`}>
                    {field}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="search-fields-column">
            {secondColumnFields.map((field) => (
              <div key={field} className="checkbox-wrapper-26">
                <label htmlFor={`_checkbox-${field}`}>
                  <input
                    type="radio"
                    id={`_checkbox-${field}`}
                    name="searchField"
                    checked={selectedField === field}
                    onChange={() => handleFieldChange(field)}
                  />
                  <div className="tick_mark"></div>
                  <span className={`search-field-label ${selectedField === field ? 'selected' : ''}`}>
                    {field}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <p className="paragraph">Enter your search query above to explore our database of alkaloids.</p>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
