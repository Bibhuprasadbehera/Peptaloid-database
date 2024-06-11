// MoleculeDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoleculeDetails.css';

const MoleculeDetails = () => {
  const location = useLocation();
  const { molecule } = location.state || { molecule: {} };

  return (
    <div className="molecule-details">
      <h2>{molecule.CompoundName}</h2>
      <p><strong>Peptaloid ID:</strong> {molecule.peptaloid_id}</p>
      <p><strong>SMILES:</strong> {molecule.smiles}</p>
      <p><strong>Formula:</strong> {molecule.MolecularFormula}</p>
      <p><strong>Exact MW:</strong> {molecule.Exact_MW}</p>
      <p><strong>IUPAC Name:</strong> {molecule.IUPACName}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MoleculeDetails;
