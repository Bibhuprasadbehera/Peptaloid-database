import React, { useState } from 'react';
import './Tools.css';

const SmilesSimilarityIndex = () => {
  const [smilesInput, setSmilesInput] = useState('');
  const [similarityResults, setSimilarityResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSimilarityResults([]);
    setIsLoading(true);

    const smilesList = smilesInput.split('\n').filter(smiles => smiles.trim() !== '');

    if (smilesList.length < 2) {
      setError('Please enter at least two SMILES strings.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/compute-similarity-scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ smiles_list: smilesList }),
      });

      if (!response.ok) {
        throw new Error('Error computing similarity scores');
      }

      const data = await response.json();
      setSimilarityResults(data);
    } catch (error) {
      setError('Error computing similarity scores: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewStructure = (smiles) => {
    window.open(`http://127.0.0.1:8000/api/generate-molecule/?smiles=${encodeURIComponent(smiles)}`, '_blank');
  };

  const downloadCSV = () => {
    const header = 'SMILES,Similarity\n';
    const rows = similarityResults.map(result => `${result.smiles},${result.similarity.toFixed(4)}`).join('\n');
    const csvContent = header + rows;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'similarity_results.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="smiles-structure-viewer">
      <h2 className="title">SMILES Similarity Index</h2>
      <p className="description">
        Enter multiple SMILES strings (one per line) to compute similarity scores.
        The first SMILES string will be used as the reference compound.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={smilesInput}
          onChange={(e) => setSmilesInput(e.target.value)}
          placeholder="Enter SMILES strings (one per line)"
          className="input-field"
          style={{ height: '150px' }}
          required
        />
        <button type="submit" className="generate-button" disabled={isLoading}>
          {isLoading ? 'Computing...' : 'Compute Similarity'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {similarityResults.length > 0 && (
        <>
          <div className="properties-table">
            <table>
              <thead>
                <tr>
                  <th>SMILES</th>
                  <th>Similarity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {similarityResults.map((result, index) => (
                  <tr key={index}>
                    <td className="smiles-cell" title={result.smiles}>
                      {result.smiles}
                    </td>
                    <td>{result.similarity.toFixed(4)}</td>
                    <td>
                      <button 
                        onClick={() => handleViewStructure(result.smiles)}
                        className="generate-button"
                        style={{ padding: '4px 8px', fontSize: '14px' }}
                      >
                        View Structure
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={downloadCSV} className="generate-button" style={{ marginTop: '16px' }}>
            Download Results
          </button>
        </>
      )}
    </div>
  );
};

export default SmilesSimilarityIndex;