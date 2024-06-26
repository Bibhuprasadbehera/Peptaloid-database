import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sample1 from '../Downloads/sample01.csv';
import sample2 from '../Downloads/sample02.csv';
import sample3 from '../Downloads/sample03.csv';

const Downloadpage = () => {
  const files = [
    { name: 'Sample 1', url: sample1, description: 'This is a sample CSV file containing data for sample 1.' },
    { name: 'Sample 2', url: sample2, description: 'This is a sample CSV file containing data for sample 2.' },
    { name: 'Sample 3', url: sample3, description: 'This is a sample CSV file containing data for sample 3.' },
  ];

  const handleDownload = (file) => {
    // Download the file
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1>Download Page</h1>
      <ul>
        {files.map(file => (
          <li key={file.name}>
            <h3>{file.name}</h3>
            <p>{file.description}</p>
            <a href="#" onClick={() => handleDownload(file)}>
              Download {file.name}
            </a>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Downloadpage;
