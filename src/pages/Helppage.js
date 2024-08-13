// HelpPage.js

import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Architecture from '../images/Architecture_peptaloid.jpg';
import Interface from '../images/Interface_peptaloid.jpg';
import Methodology from '../images/Methodology_peptaloid.jpg';
import Statistics from '../images/Statistics_peptaloid.jpg';
import Supplementary from '../images/Supplementary_peptaloid.jpg';
import logo from '../images/logo2.png';

const HelpPage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="heading">Welcome to the Peptaloid Database Help Page</h1>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          This page provides a detailed description of the Peptaloid database, a comprehensive resource for peptide alkaloid molecules. Below you will find descriptions of various categories of data included in the database.
        </p>
        <h2 className="subheading">About the logo</h2>
        <img src={logo} alt="Database Architecture" className="image" style={{ width: '70%' }}/>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          The logo of the Peptaloid database visually represents the core concept of the platform. 
          The intersecting blobs symbolize the fusion of peptide and alkaloid properties, with one blob representing the unique characteristics of peptides and the other representing alkaloids. 
          Their intersection, shaped like a drug molecule, reflects the primary objective of the Peptaloid database: to explore and harness the combined potential of peptides and alkaloids for drug discovery and development.
        </p>
        {/* Basic Information */}
        <h3 className="subheading">Basic Information</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields provide fundamental information about the compounds, including:
          <ul>
            <li><strong>Peptaloid ID:</strong> Unique identifier within the Peptaloid database. (PT000001,PT000002....)</li>
            <li><strong>Compound Name:</strong> Common name of the compound.</li>
            <li><strong>IUPAC Name:</strong> Systematic chemical name.</li>
            <li><strong>Formula:</strong> Molecular formula.</li>
            <li><strong>SMILES:</strong> Simplified Molecular Input Line Entry System.</li>
            <li><strong>InChIKey:</strong> International Chemical Identifier Key.</li>
            <li><strong>Compound InChI:</strong> International Chemical Identifier.</li>
          </ul>
        </p>

        {/* Origin */}
        <h3 className="subheading">Origin</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields convey information about the origin and source of the compounds, including:
          <ul>
            <li><strong>Origin:</strong> Type of origin (Bacterium or Fungus...)</li>
            <li><strong>Genus:</strong> Genus of the organism from which the compound is derived.</li>
            <li><strong>Species:</strong> Species of the organism from which the compound is derived.</li>
          </ul>
        </p>

        {/* IDs */}
        <h3 className="subheading">Identifiers</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields provide database-specific identifiers for cross-referencing, including:
          <ul>
            <li><strong>Coconut ID:</strong> Identifier in the COCONUT database.</li>
            <li><strong>NPatlas ID:</strong> Identifier in the NPatlas database.</li>
            <li><strong>Supernatural ID:</strong> Identifier in the Supernatural database.</li>
            <li><strong>Zinc ID:</strong> Identifier in the ZINC database.</li>
            <li><strong>PubChem ID:</strong> Identifier in the PubChem database.</li>
          </ul>
        </p>

        {/* Molecular Properties */}
        <h3 className="subheading">Molecular Properties</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields describe the structural and physicochemical properties of the compounds, including:
          <ul>
            <li><strong>Num Atoms:</strong> Number of atoms.</li>
            <li><strong>Heavy Atoms:</strong> Number of heavy atoms.</li>
            <li><strong>Total Charge:</strong> Total charge of the molecule.</li>
            <li><strong>QED Score:</strong> Quantitative Estimate of Drug-likeness.</li>
            <li><strong>TPSA:</strong> Topological Polar Surface Area.</li>
            <li><strong>Exact MW:</strong> Exact molecular weight.</li>
          </ul>
        </p>

        {/* Lipinski's Rule of Five */}
        <h3 className="subheading">Lipinski's Rule of Five</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields indicate drug-likeness based on Lipinski's Rule of Five, including:
          <ul>
            <li><strong>Mol wt:</strong>Molecular weight.</li>
            <li><strong>logP:</strong> Octanol-water partition coefficient.</li>
            <li><strong>Num HBA:</strong> Number of hydrogen bond acceptors.</li>
            <li><strong>Num HBD:</strong> Number of hydrogen bond donors.</li>
          </ul>
        </p>

        {/* Additional Properties */}
        <h3 className="subheading">Additional Properties</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields provide additional structural and chemical properties, including:
          <ul>
            <li><strong>Num Rotatable Bonds:</strong> Number of rotatable bonds.</li>
            <li><strong>Num Amide Bonds:</strong> Number of amide bonds.</li>
            <li><strong>Num Hetero Atoms:</strong> Number of heteroatoms.</li>
            <li><strong>Num Heavy Atoms:</strong> Number of heavy atoms.</li>
            <li><strong>Num StereoCenters:</strong> Number of stereocenters.</li>
            <li><strong>Num Saturated Rings:</strong> Number of saturated rings.</li>
            <li><strong>Num Aliphatic Rings:</strong> Number of aliphatic rings.</li>
            <li><strong>CX LogP:</strong>Consensus LogP value.</li>
            <li><strong>CX LogD:</strong>Consensus  LogD value.</li>
          </ul>
        </p>

        {/* Functional Groups */}
        <h3 className="subheading">Functional Groups</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields indicate the presence of specific functional groups, including:
          <ul>
            <li><strong>Alcohol:</strong> Presence of alcohol groups.</li>
            <li><strong>Aldehyde:</strong> Presence of aldehyde groups.</li>
            <li><strong>Ketone:</strong> Presence of ketone groups.</li>
            <li><strong>Carboxylic Acid:</strong> Presence of carboxylic acid groups.</li>
            <li><strong>Amine:</strong> Presence of amine groups.</li>
            <li><strong>Thiol:</strong> Presence of thiol groups.</li>
          </ul>
        </p>

        {/* ADMET Properties */}
        <h3 className="subheading">ADMET Properties and Their Description</h3>
        <p className="paragraph" style={{ textAlign: 'justify' }}>
          These fields include properties related to the absorption, distribution, metabolism, excretion, and toxicity (ADMET) of the compounds, crucial for assessing their potential as drug candidates. Examples include:
          <ul>
            <li><strong>Absorption:</strong>
              <ul>
                <li><strong>AMES:</strong> Ames test for mutagenicity.</li>
                <li><strong>HIA Hou:</strong> Human intestinal absorption.</li>
                <li><strong>Bioavailability Ma:</strong> Oral bioavailability.</li>
                <li><strong>Solubility AqSolDB:</strong> Aqueous solubility.</li>
                <li><strong>CX LogP:</strong> Lipophilicity.</li>
                <li><strong>Hydration Free Energy FreeSolv:</strong> Hydration free energy.</li>
                <li><strong>Caco2 Wang:</strong> Cell effective permeability.</li>
                <li><strong>PAMPA NCATS:</strong> PAMPA permeability.</li>
                <li><strong>Pgp Broccatelli:</strong> P-glycoprotein inhibition.</li>
              </ul>
            </li>
            <li><strong>Distribution:</strong>
              <ul>
                <li><strong>BBB Martins:</strong> Blood-brain barrier penetration.</li>
                <li><strong>PPBR AZ:</strong> Plasma protein binding rate.</li>
                <li><strong>VDss Lombardo:</strong> Volume of distribution at steady state.</li>
              </ul>
            </li>
            <li><strong>Metabolism:</strong>
              <ul>
                <li><strong>CYP1A2 Veith:</strong> CYP1A2 inhibition.</li>
                <li><strong>CYP2C19 Veith:</strong> CYP2C19 inhibition.</li>
                <li><strong>CYP2C9 Substrate Carbon Mangels:</strong> CYP2C9 substrate.</li>
                <li><strong>CYP2C9 Veith:</strong> CYP2C9 inhibition.</li>
                <li><strong>CYP2D6 Substrate Carbon Mangels:</strong> CYP2D6 substrate.</li>
                <li><strong>CYP2D6 Veith:</strong> CYP2D6 inhibition.</li>
                <li><strong>CYP3A4 Substrate Carbon Mangels:</strong> CYP3A4 substrate.</li>
                <li><strong>CYP3A4 Veith:</strong> CYP3A4 inhibition.</li>
              </ul>
            </li>
            <li><strong>Excretion:</strong>
              <ul>
                <li><strong>Half Life Obach:</strong> Half life.</li>
                <li><strong>Clearance Hepatocyte AZ:</strong> Drug clearance (hepatocyte).</li>
                <li><strong>Clearance Microsome AZ:</strong> Drug clearance (microsome).</li>
              </ul>
            </li>
            <li><strong>Toxicity:</strong>
              <ul>
                <li><strong>Carcinogens Lagunin:</strong> Carcinogenicity.</li>
                <li><strong>ClinTox:</strong> Clinical toxicity.</li>
                <li><strong>DILI:</strong> Drug-induced liver injury.</li>
                <li><strong>NR AR LBD:</strong> Androgen receptor (ligand binding domain).</li>
                <li><strong>NR AR:</strong> Androgen receptor (full length).</li>
                <li><strong>NR AhR:</strong> Aryl hydrocarbon receptor.</li>
                <li><strong>NR Aromatase:</strong> Aromatase.</li>
                <li><strong>NR ER LBD:</strong> Estrogen receptor (ligand binding domain).</li>
                <li><strong>NR ER:</strong> Estrogen receptor (full length).</li>
                <li><strong>NR PPAR Gamma:</strong> Peroxisome proliferator-activated receptor gamma.</li>
                <li><strong>SR ARE:</strong> Nuclear factor (erythroid-derived 2)-like 2/antioxidant responsive element.</li>
                <li><strong>SR ATAD5:</strong> ATPase family AAA domain-containing protein 5 (ATAD5).</li>
                <li><strong>SR HSE:</strong> Heat shock factor response element.</li>
                <li><strong>SR MMP:</strong> Mitochondrial membrane potential.</li>
                <li><strong>SR p53:</strong> Tumor protein p53.</li>
                <li><strong>Skin Reaction:</strong> Skin reaction.</li>
                <li><strong>hERG:</strong> hERG blocking.</li>
                <li><strong>LD50 Zhu:</strong> Acute toxicity LD50.</li>
              </ul>
            </li>
          </ul>
        </p>

        <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> {/* Horizontal line */}
        

        {/* Images */}
        <div className="images">
        <h3 className="subheading">Peptaloid Architecture</h3>
          <img src={Architecture} alt="Database Architecture" className="image" style={{ width: '100%' }}/>
          <p className="paragraph" style={{ textAlign: 'justify' }}>
            This schematic diagram illustrates the architecture of the Peptaloid database, detailing its various modules and how they interact to support comprehensive data management and analysis.
          </p>



          <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> {/* Horizontal line */}
          <h3 className="subheading">Peptaloid Methodology</h3>
          <img src={Methodology} alt="Methodology" className="image" style={{ width: '70%' }}/>
          <p className="paragraph" style={{ textAlign: 'justify' }}>
            This flowchart outlines the Workflow used in the creation of the Peptaloid database, covering the entire process from data collection and preprocessing, through data generation and extraction, to the final stages of quality control and validation.
          </p>

          <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> {/* Horizontal line */}
          <h3 className="subheading">Peptaloid Interface</h3>
          <img src={Interface} alt="Database Interface" className="image" style={{ width: '100%' }}/>
          <p className="paragraph" style={{ textAlign: 'justify' }}>
            The interface of the Peptaloid database is designed to be user-friendly, offering intuitive navigation and functionality. (A) The homepage provides an overview of the database features. (B) The simple search page allows users to search by identifiers such as Peptaloid ID, InChIKey, IUPAC name, common name or other fields. (C) The results page includes a sidebar for refining search results based on various criteria. (D) The browse option enables users to explore the database by specific attributes such as Carbon count, Molecular weight, QED score, Lipinski's Rule, Amide count, and Data collection source. (E) Each molecule has a detailed page providing in-depth property analysis. (F) The tools page includes (i) a structure predictor for generating 2D structures from SMILES and (ii) a molecule screening tool based on ADMET filters. (H) The advanced search feature allows for complex queries across the database.
          </p>
          <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> {/* Horizontal line */}

          <h3 className="subheading">Peptaloid Statistics</h3>
          <img src={Statistics} alt="Database Statistics" className="image" style={{ width: '100%' }}/>
          <p className="paragraph" style={{ textAlign: 'justify' }}>
            The statistics provided offer a comprehensive overview of the Peptaloid database. (A) The distribution of peptide alkaloid molecules based on the source of data collection. (B) The distribution of Lipinski's Rule of Five properties including hydrogen bond acceptors (HBA), hydrogen bond donors (HBD), logP, and Molecular weight (mol. wt). (C) The distribution of Lipinski's Rule of Five violations (RO5). (D) The distribution of the total polar surface area (TPSA). (E) The distribution of the quantitative estimate of drug-likeness (QED). (F) The distribution of the number of amide bonds in the molecules. (G) The distribution of key functional groups including carboxylic acid, amine, ketone, and alcohol, note: on aldehyde and thiol groups which are less common across the dataset.
          </p>

          <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} /> {/* Horizontal line */}
          <h3 className="subheading">Peptaloid Supplementary Data</h3>
          <img src={Supplementary} alt="Supplementary Data" className="image" style={{ width: '100%' }}/>
          <p className="paragraph" style={{ textAlign: 'justify' }}>
            This figure presents the distribution of ADMET properties across the Peptaloid database. (A-B) illustrate the absorption properties. (C-E) depict the distribution properties. (F) shows the metabolism-related properties. (G) outlines the excretion properties. (H-J) display the distribution of various toxicity properties, providing a detailed view of the safety profiles of the molecules.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
