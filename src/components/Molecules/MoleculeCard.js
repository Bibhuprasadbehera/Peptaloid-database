// MoleculeCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoleculeCard.css';
import molecule4 from '../../images/molecule4.jpg';

const MoleculeCard = ({ molecule }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/molecule-details', { state: { molecule } });
  };

  return (
    <div className="molecule-card" onClick={handleCardClick}>
      <img src={molecule4} alt="Molecule"/>
      <div className="molecule-card-content">
        <h2>{molecule.CompoundName}</h2>
        <p><strong>Peptaloid ID:</strong> {molecule.peptaloid_id}</p>
        <p><strong>SMILES:</strong> {molecule.smiles}</p>
        <p><strong>Formula:</strong> {molecule.MolecularFormula}</p>
        <p><strong>Exact MW:</strong> {molecule.Exact_MW}</p>
        <p><strong>IUPAC Name:</strong> {molecule.IUPACName}</p>
      </div>
    </div>
  );
};

export default MoleculeCard;
