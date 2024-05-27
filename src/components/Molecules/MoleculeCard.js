// MoleculeCard.js
import React from 'react';

const MoleculeCard = ({ molecule }) => {
    return (
        <div>
            <h2>{molecule.name}</h2>
            <img src={molecule.image} alt={molecule.name} />
            <p>{molecule.formula}</p>
        </div>
    );
};

export default MoleculeCard;