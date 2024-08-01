import React, { useState } from 'react';
import './Tools.css';

const SmilesPropertyPredictor = () => {
  const [smiles, setSmiles] = useState('');
  const [properties, setProperties] = useState({});
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!smiles) {
      setError('Please enter a SMILES string');
      return;
    }

    fetch(`http://127.0.0.1:8000/api/generate-properties/?smiles=${encodeURIComponent(smiles)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error generating properties');
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        setError('Error generating properties: ' + error.message);
      });
  };

  const downloadCSV = () => {
    const headers = 'Property,Value\n';
    const rows = Object.keys(properties).map(key => `${key},${properties[key]}`).join('\n');
    const csvContent = headers + rows;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'properties.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderPropertiesTable = () => {
    return (
      <div className="properties-table">
        <table>
          <tbody>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
            {Object.keys(properties).map((key, index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{properties[key] === '' ? '-' : properties[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="smiles-property-predictor">
      <h2 className="title">SMILES Property Predictor</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={smiles}
          onChange={(e) => setSmiles(e.target.value)}
          placeholder="Enter SMILES string"
          className="input-field"
        />
        <button type="submit" className="generate-button">
          Generate Properties
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {Object.keys(properties).length > 0 && (
        <>
          {renderPropertiesTable()}
          <button onClick={downloadCSV} className="generate-button" style={{ marginTop: '16px' }}>
            Download Properties
          </button>
        </>
      )}
    </div>
  );
};

export default SmilesPropertyPredictor;
