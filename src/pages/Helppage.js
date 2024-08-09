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
        <h2 className="heading">Welcome to the Peptaloid Database Help Page</h2>
        <p className="paragraph-left">
          This page provides a detailed description of the Peptaloid database, a comprehensive resource for peptide alkaloid molecules. Below you will find descriptions of various categories of data included in the database.
        </p>
        <img src={logo} alt="Database Architecture" className="image" style={{ width: '100%' }}/>
          <p>this is the logo of the database and it is a representation of the database</p>
        {/* Basic Information */}
        <h3 className="subheading">Basic Information</h3>
        <p className="paragraph-left">
          These fields provide fundamental information about the compounds, including:
          <ul>
            <li><strong>Peptaloid ID:</strong> Unique identifier within the Peptaloid database.</li>
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
        <p className="paragraph-left">
          These fields convey information about the origin and source of the compounds, including:
          <ul>
            <li><strong>Origin:</strong> Type of origin (natural, synthetic, etc.).</li>
            <li><strong>Genus:</strong> Genus of the organism from which the compound is derived.</li>
            <li><strong>Species:</strong> Species of the organism from which the compound is derived.</li>
          </ul>
        </p>

        {/* IDs */}
        <h3 className="subheading">IDs</h3>
        <p className="paragraph-left">
          These fields provide database-specific identifiers for cross-referencing, including:
          <ul>
            <li><strong>Coconut ID:</strong> Identifier in the COCONUT database.</li>
            <li><strong>NPatlas ID:</strong> Identifier in the NPatlas database.</li>
            <li><strong>Supernatural ID:</strong> Identifier in the Supernatural database.</li>
            <li><strong>Zinc ID:</strong> Identifier in the ZINC database.</li>
          </ul>
        </p>

        {/* Molecular Properties */}
        <h3 className="subheading">Molecular Properties</h3>
        <p className="paragraph-left">
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
        <p className="paragraph-left">
          These fields indicate drug-likeness based on Lipinski's Rule of Five, including:
          <ul>
            <li><strong>Lipinski:</strong> Overall Lipinski score.</li>
            <li><strong>logP:</strong> Octanol-water partition coefficient.</li>
            <li><strong>Num HBA:</strong> Number of hydrogen bond acceptors.</li>
            <li><strong>Num HBD:</strong> Number of hydrogen bond donors.</li>
          </ul>
        </p>

        {/* Additional Properties */}
        <h3 className="subheading">Additional Properties</h3>
        <p className="paragraph-left">
          These fields provide additional structural and chemical properties, including:
          <ul>
            <li><strong>Num Rotatable Bonds:</strong> Number of rotatable bonds.</li>
            <li><strong>Num Amide Bonds:</strong> Number of amide bonds.</li>
            <li><strong>Num Hetero Atoms:</strong> Number of heteroatoms.</li>
            <li><strong>Num Heavy Atoms:</strong> Number of heavy atoms.</li>
            <li><strong>Num StereoCenters:</strong> Number of stereocenters.</li>
            <li><strong>Num Saturated Rings:</strong> Number of saturated rings.</li>
            <li><strong>Num Aliphatic Rings:</strong> Number of aliphatic rings.</li>
            <li><strong>CX LogP:</strong> LogP value calculated by CX.</li>
            <li><strong>CX LogD:</strong> LogD value calculated by CX.</li>
          </ul>
        </p>

        {/* Functional Groups */}
        <h3 className="subheading">Functional Groups</h3>
        <p className="paragraph-left">
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
        <p className="paragraph-left">
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

        {/* Percentile Data */}
        <h3 className="subheading">Percentile Data</h3>
        <p className="paragraph-left">
          These fields provide percentile ranks that allow the compounds to be compared against a reference set, such as approved drugs, for various properties. This benchmarking facilitates the evaluation of the compounds' drug-likeness and potential for further development.
        </p>

        {/* Images */}
        <div className="images">
          <img src={Architecture} alt="Database Architecture" className="image" style={{ width: '100%' }}/>
          <p className="paragraph-left">This is the architecture of the database, illustrating the overall structure and organization of the Peptaloid database.</p>

          <img src={Interface} alt="Database Interface" className="image" style={{ width: '100%' }}/>
          <p className="paragraph-left">This is the interface of the database, showing the user-friendly design and navigation features of the Peptaloid database.</p>

          <img src={Methodology} alt="Methodology" className="image" style={{ width: '70%' }}/>
          <p className="paragraph-left">This is the methodology used in the Peptaloid database, outlining the processes and techniques employed for data collection and analysis.</p>

          <img src={Statistics} alt="Database Statistics" className="image" style={{ width: '100%' }}/>
          <p className="paragraph-left">These are the statistics of the database, providing insights into the quantity and diversity of the data contained within the Peptaloid database.</p>

          <img src={Supplementary} alt="Supplementary Data" className="image" style={{ width: '100%' }}/>
          <p className="paragraph-left">This is the supplementary data, offering additional information and resources related to the Peptaloid database.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
