// SmilesPropertyPredictor.jsx

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

  const renderPropertiesTable = () => {
    return (
      <div className="properties-table">
        <table>
          <tbody>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>SlogP</td>
              <td>{properties.SlogP || '-' || '-'}</td>
            </tr>
            <tr>
              <td>TPSA</td>
              <td>{properties.TPSA || '-' || '-'}</td>
            </tr>
            <tr>
              <td>Exact MW</td>
              <td>{properties.Exact_MW || '-' || '-'}</td>
            </tr>
            <tr>
              <td>Num Rotatable Bonds</td>
              <td>{properties.Num_Rotatable_Bonds || '-' || '-'}</td>
            </tr>
            <tr>
              <td>Num HBD</td>
              <td>{properties.Num_HBD || '-' || '-'}</td>
            </tr>
            <tr>
              <td>Num HBA</td>
              <td>{properties.Num_HBA || '-' || '-'}</td>
            </tr>
            <tr>
              <td>Num Amide Bonds</td>
              <td>{properties.Num_Amide_Bonds || '-'}</td>
            </tr>
            <tr>
              <td>Num Hetero Atoms</td>
              <td>{properties.Num_Hetero_Atoms || '-'}</td>
            </tr>
            <tr>
              <td>Num Heavy Atoms</td>
              <td>{properties.Num_Heavy_Atoms || '-'}</td>
            </tr>
            <tr>
              <td>Num Atoms</td>
              <td>{properties.Num_Atoms || '-'}</td>
            </tr>
            <tr>
              <td>Num StereoCenters</td>
              <td>{properties.Num_StereoCenters || '-'}</td>
            </tr>
            <tr>
              <td>Num Aromatic Rings</td>
              <td>{properties.Num_Aromatic_Rings || '-'}</td>
            </tr>
            <tr>
              <td>Num Saturated Rings</td>
              <td>{properties.Num_Saturated_Rings || '-'}</td>
            </tr>
            <tr>
              <td>Num Aliphatic Rings</td>
              <td>{properties.Num_Aliphatic_Rings || '-'}</td>
            </tr>
            <tr>
              <td>InChIKey</td>
              <td>{properties.InChIKey || '-'}</td>
            </tr>
            <tr>
              <td>Molecular Formula</td>
              <td>{properties.MolecularFormula || '-'}</td>
            </tr>
            <tr>
              <td>Carbon Count</td>
              <td>{properties.carbon_count || '-'}</td>
            </tr>
            <tr>
              <td>CX LogP</td>
              <td>{properties.CX_LogP || '-'}</td>
            </tr>
            <tr>
              <td>CX LogD</td>
              <td>{properties.CX_LogD || '-'}</td>
            </tr>
            <tr>
              <td>Heavy Atoms</td>
              <td>{properties.Heavy_Atoms || '-'}</td>
            </tr>
            <tr>
              <td>QED Score</td>
              <td>{properties.qed_score || '-'}</td>
            </tr>
            <tr>
              <td>Alcohol</td>
              <td>{properties.Alcohol || '-'}</td>
            </tr>
            <tr>
              <td>Aldehyde</td>
              <td>{properties.Aldehyde || '-'}</td>
            </tr>
            <tr>
              <td>Carboxylic Acid</td>
              <td>{properties.Carboxylic_Acid || '-'}</td>
            </tr>
            <tr>
              <td>Amine</td>
              <td>{properties.Amine || '-'}</td>
            </tr>
            <tr>
              <td>Thiol</td>
              <td>{properties.Thiol || '-'}</td>
            </tr>
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
      {renderPropertiesTable()}
    </div>
  );
};

export default SmilesPropertyPredictor;
