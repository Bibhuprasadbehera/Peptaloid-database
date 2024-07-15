// src/components/BrowsePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BrowsePage = ({ title, headers, data, browsingText, browseField, generatePayload }) => {
  const navigate = useNavigate();

  return (
    <div className="browse-container">
      <h1>{title}</h1>
      <table className="browse-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  data-label={headers[cellIndex]}
                  onClick={() => {
                    if (cellIndex === 1) {
                      const payload = generatePayload(row, cellIndex);
                      navigate('/pagination', { state: { payload } });
                    }
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowsePage;
