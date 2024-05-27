// FilterBar.js
import React from 'react';

const FilterBar = ({ onFilter }) => {
    return (
        <select onChange={(e) => onFilter(e.target.value)}>
            <option value="">All</option>
            // Add more filter options as needed
        </select>
    );
};

export default FilterBar;