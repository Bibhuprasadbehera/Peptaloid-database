// MoleculeDetails.js
import React from 'react';

const MoleculeDetails = ({ molecule }) => {
    return (
        <div>
            <h2>{molecule.name}</h2>
            <p>{molecule.description}</p>
            // Add more details as needed
        </div>
    );
};

export default MoleculeDetails;