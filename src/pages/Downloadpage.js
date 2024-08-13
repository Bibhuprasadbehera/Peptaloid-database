import React from 'react';
import './styles.css';
import Footer from '../components/Footer';
import sample1 from '../Downloads/sample01.csv';
import sample2 from '../Downloads/sample02.csv';
import sample3 from '../Downloads/sample03.csv';
import csv1 from '../Downloads/csv1.csv';
import csv2 from '../Downloads/csv2.csv';
import csv3 from '../Downloads/csv3.csv';
import csv4 from '../Downloads/csv4.csv';
import csv5 from '../Downloads/csv5.csv';

const DownloadPage = () => {
  const files = [
    {
      name: 'CSV 1',
      url: csv1,
      description: 'This CSV file contains basic information for the first 100 peptide alkaloids in the Peptaloid database.'
    },
    {
      name: 'CSV 2',
      url: csv2,
      description: 'This CSV file contains basic information, identifiers, and Lipinski\'s rule of five for the first 100 peptide alkaloids in the Peptaloid database.'
    },
    {
      name: 'CSV 3',
      url: csv3,
      description: 'This CSV file contains basic information, identifiers, Lipinski\'s rule of five, and molecular properties for the first 100 peptide alkaloids in the Peptaloid database.'
    },
    {
      name: 'CSV 4',
      url: csv4,
      description: 'This CSV file contains basic information, identifiers, Lipinski\'s rule of five, molecular properties, and additional properties for the first 100 peptide alkaloids in the Peptaloid database.'
    },
    {
      name: 'CSV 5',
      url: csv5,
      description: 'This CSV file contains basic information, identifiers, Lipinski\'s rule of five, molecular properties, additional properties, and functional groups for the first 100 peptide alkaloids in the Peptaloid database.'
    },
    {
      name: 'Sample 01',
      url: sample1,
      description: 'This sample CSV file contains basic information, identifiers, Lipinski\'s rule of five, molecular properties, additional properties, and functional groups.'
    },
    {
      name: 'Sample 02',
      url: sample2,
      description: 'This sample CSV file expands on Sample 01 by adding ADMET properties.'
    },
    {
      name: 'Sample 03',
      url: sample3,
      description: 'This CSV file contains the entire schema of the raw data for the Peptaloid database.'
    }
  ];

  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: 'left' }}>Download Page</h1>
        <table className="download-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>File Name</th>
              <th style={{ textAlign: 'left' }}>Description</th>
              <th style={{ textAlign: 'center' }}>Download</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.name}>
                <td style={{ padding: '10px', textAlign: 'left' }}>{file.name}</td>
                <td style={{ padding: '10px', textAlign: 'left' }}>{file.description}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                  <a href="#" onClick={() => handleDownload(file)} style={{ color: 'blue', textDecoration: 'none' }}>
                    📥 Download {file.name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h2>Access to the Whole Database</h2>
          <p>
            If you want to get access to the whole database, please contact us via the <a href="/contact" style={{ color: 'blue', textDecoration: 'none' }}>contact</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DownloadPage;
