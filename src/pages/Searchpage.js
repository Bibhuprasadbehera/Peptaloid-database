// SearchPage.js

import React, { useState } from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

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
                <p className="paragraph">Enter your search query above to explore our database of alkaloids.</p>
                {/* Add more content here */}
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;
