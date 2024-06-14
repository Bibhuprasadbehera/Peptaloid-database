// AdvancedSearch.js
import React, { useState } from 'react';
import SearchBar from '../../components/Search/SearchBar';
import FilterBar from '../../components/Search/FilterBar';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AdvancedSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    return (
        <div>
            <div className="container">
                <h2 className="heading">Advanced Search</h2>
                <SearchBar onSearch={handleSearchChange} />
                <FilterBar onFilter={handleFilterChange} />
                <p className="paragraph">Enter your search query and select a filter to refine your search.</p>
                {/* Add more content here */}
            </div>
            <Footer />
        </div>
    );
};

export default AdvancedSearch;