// HelpPage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

const HelpPage = () => {
  return (
    <div>
      <div className="container">
      <h2 className="heading">Welcome to the Alkaloid Database About Page</h2>
        <p className="paragraph-left">
          This page provides a detailed description of the columns available in our
          Alkaloid Database. The columns are categorized into six sections:
          Identification Columns, Origin and Source Columns, Structural and
          Physicochemical Properties, Molecular Properties, ADMET Properties, and
          Percentile Ranks (for Comparison).
        </p>

        {/* Identification Columns */}
        <h3 className="subheading">Identification Columns and their description (write something about  this)</h3>
        <p className="paragraph-left">These columns provide unique identifiers and chemical representations that allow for the unambiguous identification and distinction of compounds.</p>
        
        {/* Origin and Source Columns */}
        <h3 className="subheading">Origin and Source Columns and their description (write something about  this)</h3>
        <p className="paragraph-left">These columns convey information about the origin and source of the compounds, such as whether they are natural or synthetic, and details about the genus and species from which they were derived or isolated.</p>
        
        {/* Structural and Physicochemical Properties */}
        <h3 className="subheading">Structural and Physicochemical Properties and their description (write something about  this)</h3>
        <p className="paragraph-left">This category encompasses various properties that describe the structure and physicochemical characteristics of the compounds, such as molecular size, lipophilicity, polarity, hydrogen bonding, flexibility, stereochemistry, and ring systems.</p>
        
        {/* Molecular Properties */}
        <h3 className="subheading">Molecular Properties and their description (write something about this)</h3>
        <p className="paragraph-left">These columns indicate the presence or absence of specific functional groups or molecular features within the compounds, which can influence their chemical reactivity and biological activity.</p>
        
        {/* ADMET Properties */}
        <h3 className="subheading">ADMET Properties and their description</h3>
        <p className="paragraph-left">This category includes properties related to the absorption, distribution, metabolism, excretion, and toxicity of the compounds, which are crucial for assessing their potential as drug candidates or understanding their biological effects.</p>
        
        {/* Percentile Ranks (for Comparison) */}
        <h3 className="subheading">Percentile Ranks (for Comparison) and their description</h3>
        <p className="paragraph-left">These columns provide percentile ranks that allow the compounds to be compared against a reference set, such as approved drugs, for various properties. This facilitates the evaluation of the compounds' drug-likeness and potential for further development by benchmarking their properties against known drugs.</p>
        </div>
      <Footer />
    </div>
  );
};


export default HelpPage;
