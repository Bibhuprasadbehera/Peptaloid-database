// HomePage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import molecule1 from '../images/molecule1.jpg'; // Sample image
import molecule2 from '../images/molecule2.jpg'; // Sample image
import molecule3 from '../images/molecule3.jpg'; // Sample image

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="heading">Welcome to the Peptaloid Database Home Page</h2>
        <p className="paragraph">
          Peptaloid is a unique database containing over 160,000 natural molecules known as peptide alkaloids. These molecules combine the characteristics of peptides and alkaloids, offering exciting prospects for drug development, ecological research, and biotechnological applications.
        </p>
        <Carousel images={[molecule1, molecule2, molecule3]} />
        <div className="section">
          <h2 className="section-heading">Molecule of the Month</h2>
          <div className="section-content">
            <p>Discover the featured molecule of the month and explore its unique properties, biological activities, and potential applications.</p>
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">News about Peptaloid</h2>
          <div className="section-content">
            <p>Stay updated with the latest news, events, and developments related to peptide alkaloids, drug discovery, and scientific research.</p>
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">Featured Research</h2>
          <div className="section-content">
            <p>Explore groundbreaking research articles, publications, and studies highlighting the therapeutic potential and ecological significance of peptide alkaloids.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
