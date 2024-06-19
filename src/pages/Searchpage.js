import React, { useState } from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFields, setSearchFields] = useState({
    "InChIKey": false,
    "Compound InChI": false,
    "Smiles": false,
    "Molecular Formula": false,
    "IUPAC Name": false,
    "Compound Name": false,
    "Origin type": false,
    "Genus": false,
    "Origin species": false,
    "Peptaloid id": false,
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFieldChange = (event) => {
    setSearchFields({
      ...searchFields,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSearch = () => {
    // Perform search using searchTerm and searchFields
  };

  const fields = Object.keys(searchFields);
  const midIndex = Math.ceil(fields.length / 2);
  const firstColumnFields = fields.slice(0, midIndex);
  const secondColumnFields = fields.slice(midIndex);

  return (
    <div>
      <div className="container">
        <h2 className="heading">Welcome to the Alkaloid Database Search Page</h2>
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
                    type="checkbox"
                    id={`_checkbox-${field}`}
                    name={field}
                    checked={searchFields[field]}
                    onChange={handleFieldChange}
                  />
                  <div className="tick_mark"></div>
                  <span className={`search-field-label ${searchFields[field] ? 'selected' : ''}`}>
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
                    type="checkbox"
                    id={`_checkbox-${field}`}
                    name={field}
                    checked={searchFields[field]}
                    onChange={handleFieldChange}
                  />
                  <div className="tick_mark"></div>
                  <span className={`search-field-label ${searchFields[field] ? 'selected' : ''}`}>
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
