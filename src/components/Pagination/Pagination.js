// Pagination.js
import React from 'react';

const Pagination = ({ onPageChange }) => {
    return (
        <div>
            <button onClick={() => onPageChange('prev')}>Previous</button>
            <button onClick={() => onPageChange('next')}>Next</button>
        </div>
    );
};

export default Pagination;