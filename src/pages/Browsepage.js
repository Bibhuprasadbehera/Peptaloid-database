import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BrowsePage = ({ title, headers, data, browsingText, browseField }) => {
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
                      const payload = {
                        skip: 0,
                        limit: 30,
                        conditions: [
                          {
                            field: browseField,
                            value: row[0].split(' ')[0], // Assuming the range format is like "0 to 10"
                            operation: cellIndex === 1 ? "equal" : "greater", // Adjust based on your needs
                            operator: "and"
                          }
                        ],
                        source: [],
                        functional_group: []
                      };
                      navigate('/pagination', {
                        state: { payload }
                      });
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
