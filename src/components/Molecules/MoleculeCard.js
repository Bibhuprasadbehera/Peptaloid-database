import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoleculeCard.css';
import molecule4 from '../../images/molecule4.jpg';

const MoleculeCard = ({ molecule, onSelect, isSelected, isBrowsing }) => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchMoleculeImage = async () => {
      if (molecule.smiles) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/generate-molecule/?smiles=${encodeURIComponent(molecule.smiles)}`);
          if (!response.ok) {
            throw new Error('Error generating image');
          }
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } catch (error) {
          setImageUrl(molecule4);  // Fallback to molecule4 image
        }
      } else {
        setImageUrl(molecule4);  // Fallback if SMILES string is not provided
      }
    };
    fetchMoleculeImage();
  }, [molecule.smiles]);

  const handleCardClick = () => {
    if (isBrowsing) {
      navigate(`/molecule-details/${molecule.peptaloid_id}`);
    } else {
      onSelect(molecule);
    }
  };

  const cardClassName = `molecule-card ${isSelected ? 'selected' : ''}`;

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      <img src={imageUrl} alt="Molecule" />
      <div className="molecule-info">
        <div className="molecule-card-content">
          <h2><strong>Peptaloid ID:</strong> {molecule.peptaloid_id || 'N/A'}</h2>
          <p><strong>Common name:</strong> {molecule.Compound_Name ? (molecule.Compound_Name.length > 100 ? molecule.Compound_Name.slice(0, 50) + '...' : molecule.Compound_Name) : 'Unknown'}</p>
          <p><strong>IUPAC Name:</strong> {molecule.IUPAC_Name ? (molecule.IUPAC_Name.length > 100 ? molecule.IUPAC_Name.slice(0, 70) + '...' : molecule.IUPAC_Name) : 'N/A'}</p>
          <p><strong>SMILES:</strong> {molecule.smiles ? (molecule.smiles.length > 100 ? molecule.smiles.slice(0, 60) + '...' : molecule.smiles) : 'N/A'}</p>
          <p><strong>Formula:</strong> {molecule.MolecularFormula || 'N/A'}</p>
          <p><strong>Exact MW:</strong> {molecule.Exact_MW ? molecule.Exact_MW.toFixed(2) : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default MoleculeCard;