// Pagination.js
import React from 'react';
import MoleculeCard from '../Molecules/MoleculeCard';

const Pagination = ({ onPageChange, molecules }) => {
    return (
        <div>
            {molecules.map((molecule, index) => (
                <MoleculeCard key={index} molecule={molecule} />
            ))}
            <button onClick={() => onPageChange('prev')}>Previous</button>
            <button onClick={() => onPageChange('next')}>Next</button>
        </div>
    );
};

export default Pagination;