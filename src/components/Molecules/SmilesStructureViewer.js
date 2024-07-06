import React, { useState } from 'react';
import './Tools.css';

const SmilesStructureViewer = () => {
  const [smiles, setSmiles] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!smiles) {
      setError('Please enter a SMILES string');
      return;
    }

    fetch(`http://127.0.0.1:8000/api/generate-molecule/?smiles=${encodeURIComponent(smiles)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error generating image');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch((error) => {
        setError('Error generating image: ' + error.message);
      });
  };

  return (
    <div className="smiles-structure-viewer">
      <h2 className="title">SMILES Structure Viewer</h2>
      <p className="description">
        Enter a SMILES string below to generate and view its molecular structure.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={smiles}
          onChange={(e) => setSmiles(e.target.value)}
          placeholder="Enter SMILES string"
          className="input-field"
        />
        <button type="submit" className="generate-button">
          Generate Structure
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="molecule-image-container">
        {imageUrl ? (
          <img src={imageUrl} alt="Molecule structure" className="molecule-image" />
        ) : (
          <div className="empty-image-box" />
        )}
      </div>
    </div>
  );
};

export default SmilesStructureViewer;
