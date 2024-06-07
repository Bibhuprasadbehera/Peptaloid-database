// MoleculeDetails.js
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

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