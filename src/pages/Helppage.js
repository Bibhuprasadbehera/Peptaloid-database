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
      <h2 className="heading">Welcome to the Alkaloid Database Help Page</h2>
        <p className="paragraph-left">
          This page provides a detailed description of the columns available in our
          Alkaloid Database. The columns are categorized into six sections:
          Identification Columns, Origin and Source Columns, Structural and
          Physicochemical Properties, Molecular Properties, ADMET Properties, and
          Percentile Ranks (for Comparison).
        </p>

        {/* Identification Columns */}
        <h3 className="subheading">Identification Columns and their description</h3>
        <table className="help-table">
        <thead>
            <tr>
              <th>Column Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>peptaloid_id</td>
              <td>Unique identifier for each peptaloid entry.</td>
            </tr>
            <tr>
              <td>coconut_id</td>
              <td>Identifier linking to the COlleCtion of Open Natural prodUcTs (COCONUT) database.</td>
            </tr>
            <tr>
              <td>npatlas_id</td>
              <td>Identifier linking to the Natural Products Atlas (NPAtlas) database.</td>
            </tr>
            <tr>
              <td>supernatural_id</td>
              <td>Identifier linking to the SuperNatural II database.</td>
            </tr>
            <tr>
              <td>zinc_id</td>
              <td>Identifier linking to the ZINC database, a free database of commercially available compounds.</td>
            </tr>
            <tr>
              <td>InChIKey</td>
              <td>Standardized identifier for chemical substances, used for unique identification.</td>
            </tr>
            <tr>
              <td>Compound_InChI</td>
              <td>International Chemical Identifier (InChI) of the compound, providing structural information.</td>
            </tr>
            <tr>
              <td>smiles</td>
              <td>Simplified Molecular Input Line Entry System (SMILES) notation of the compound.</td>
            </tr>
            <tr>
              <td>MolecularFormula</td>
              <td>Chemical formula representing the number and types of atoms in the molecule.</td>
            </tr>
            <tr>
              <td>IUPAC Name</td>
              <td>International Union of Pure and Applied Chemistry (IUPAC) name of the compound.</td>
            </tr>
            <tr>
              <td>Compound Name</td>
              <td>Common name of the compound.</td>
            </tr>
          </tbody>
        </table>

        {/* Origin and Source Columns */}
        <h3 className="subheading">Origin and Source Columns and their description</h3>
        <table className="help-table">
        <thead>
            <tr>
              <th>Column Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
        <tr>
              <td>origin_type</td>
              <td>Type of origin (e.g., natural, synthetic).</td>
            </tr>
            <tr>
              <td>genus</td>
              <td>Genus of the organism from which the compound was derived.</td>
            </tr>
            <tr>
              <td>origin_species</td>
              <td>Species of the organism from which the compound was derived.</td>
            </tr>
            </tbody>
        </table>

        {/* Structural and Physicochemical Properties */}
        <h3 className="subheading">Structural and Physicochemical Properties and their description</h3>
        <table className="help-table">
        <thead>
            <tr>
              <th>Column Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>

          <tr>
              <td>carbon_count</td>
              <td>Number of carbon atoms in the compound.</td>
            </tr>
            <tr>
              <td>SlogP</td>
              <td>Logarithm of the partition coefficient between n-octanol and water.</td>
            </tr>
            <tr>
              <td>TPSA</td>
              <td>Topological Polar Surface Area, indicating the polarity of the molecule.</td>
            </tr>
            <tr>
              <td>Exact_MW</td>
              <td>Exact molecular weight of the compound.</td>
            </tr>
            <tr>
              <td>Num_Rotatable_Bonds</td>
              <td>Number of rotatable bonds in the compound.</td>
            </tr>
            <tr>
              <td>Num_HBD</td>
              <td>Number of hydrogen bond donors in the compound.</td>
            </tr>
            <tr>
              <td>Num_HBA</td>
              <td>Number of hydrogen bond acceptors in the compound.</td>
            </tr>
            <tr>
              <td>Num_Amide_Bonds</td>
              <td>Number of amide bonds in the compound.</td>
            </tr>
            <tr>
              <td>Num_Hetero_Atoms</td>
              <td>Number of heteroatoms (atoms other than carbon and hydrogen) in the compound.</td>
            </tr>
            <tr>
              <td>Num_Heavy_Atoms</td>
              <td>Number of heavy atoms (non-hydrogen atoms) in the compound.</td>
            </tr>
            <tr>
              <td>Num_Atoms</td>
              <td>Total number of atoms in the compound.</td>
            </tr>
            <tr>
              <td>Num_StereoCenters</td>
              <td>Number of stereocenters (chiral centers) in the compound.</td>
            </tr>
            <tr>
              <td>Num_Aromatic_Rings</td>
              <td>Number of aromatic rings in the compound.</td>
            </tr>
            <tr>
              <td>Num_Saturated_Rings</td>
              <td>Number of saturated rings in the compound.</td>
            </tr>
            <tr>
              <td>Num_Aliphatic_Rings</td>
              <td>Number of aliphatic rings in the compound.</td>
            </tr>
            <tr>
              <td>CX_LogP</td>
              <td>Computational estimate of LogP value.</td>
            </tr>
            <tr>
              <td>CX_LogD</td>
              <td>Computational estimate of LogD value.</td>
            </tr>
            <tr>
              <td>Heavy_Atoms</td>
              <td>Number of heavy atoms in the compound.</td>
            </tr>
            <tr>
              <td>total_charge</td>
              <td>Total charge of the compound.</td>
            </tr>
            <tr>
              <td>qed_score</td>
              <td>Quantitative estimate of drug-likeness (QED) score.</td>
            </tr>
            </tbody>
        </table>

        {/* Molecular Properties */}
        <h3 className="subheading">Molecular Properties and their description</h3>
        <table className="help-table">
        <thead>
            <tr>
              <th>Column Name</th>
              <th>Description</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>Alcohol</td>
              <td>Presence of alcohol functional group.</td>
            </tr>
            <tr>
              <td>Aldehyde</td>
              <td>Presence of aldehyde functional group.</td>
            </tr>
            <tr>
              <td>Ketone</td>
              <td>Presence of ketone functional group.</td>
            </tr>
            <tr>
              <td>Carboxylic Acid</td>
              <td>Presence of carboxylic acid functional group.</td>
            </tr>
            <tr>
              <td>Amine</td>
              <td>Presence of amine functional group.</td>
            </tr>
            <tr>
              <td>Thiol</td>
              <td>Presence of thiol functional group.</td>
            </tr>
            </tbody>
        </table>

        {/* ADMET Properties */}
        <h3 className="subheading">ADMET Properties and their description</h3>
        <table className="help-table">
        <thead>
            <tr>
              <th>Column Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Lipinski</td>
              <td>Lipinski's rule of five compliance.</td>
            </tr>
            
            <tr>
              <td>AMES</td>
              <td>Ames test result for mutagenicity.</td>
            </tr>
            <tr>
              <td>BBB_Martins</td>
              <td>Blood-brain barrier permeability prediction (Martins method).</td>
            </tr>
            <tr>
              <td>Bioavailability_Ma</td>
              <td>Bioavailability prediction (Ma method).</td>
            </tr>
            <tr>
              <td>CYP1A2_Veith</td>
              <td>CYP1A2 inhibition prediction (Veith method).</td>
            </tr>
            <tr>
              <td>CYP2C19_Veith</td>
              <td>CYP2C19 inhibition prediction (Veith method).</td>
            </tr>
            <tr>
              <td>CYP2C9_Substrate_CarbonMangels</td>
              <td>CYP2C9 substrate prediction (CarbonMangels method).</td>
            </tr>
            <tr>
              <td>CYP2C9_Veith</td>
              <td>CYP2C9 inhibition prediction (Veith method).</td>
            </tr>
            <tr>
              <td>CYP2D6_Substrate_CarbonMangels</td>
              <td>CYP2D6 substrate prediction (CarbonMangels method).</td>
            </tr>
            <tr>
              <td>CYP2D6_Veith</td>
              <td>CYP2D6 inhibition prediction (Veith method).</td>
            </tr>
            <tr>
              <td>CYP3A4_Substrate_CarbonMangels</td>
              <td>CYP3A4 substrate prediction (CarbonMangels method).</td>
            </tr>
            <tr>
              <td>CYP3A4_Veith</td>
              <td>CYP3A4 inhibition prediction (Veith method).</td>
            </tr>
            <tr>
              <td>Carcinogens_Lagunin</td>
              <td>Carcinogenicity prediction (Lagunin method).</td>
            </tr>
            <tr>
              <td>ClinTox</td>
              <td>Clinical toxicity prediction.</td>
            </tr>
            <tr>
              <td>DILI</td>
              <td>Drug-induced liver injury prediction.</td>
            </tr>
            <tr>
              <td>HIA_Hou</td>
              <td>Human intestinal absorption prediction (Hou method).</td>
            </tr>
            <tr>
              <td>NR-AR-LBD</td>
              <td>Nuclear receptor AR LBD binding prediction.</td>
            </tr>
            <tr>
              <td>NR-AR</td>
              <td>Nuclear receptor AR binding prediction.</td>
            </tr>
            <tr>
              <td>NR-AhR</td>
              <td>Nuclear receptor AhR binding prediction.</td>
            </tr>
            <tr>
              <td>NR-Aromatase</td>
              <td>Nuclear receptor aromatase binding prediction.</td>
            </tr>
            <tr>
              <td>NR-ER-LBD</td>
              <td>Nuclear receptor ER LBD binding prediction.</td>
            </tr>
            <tr>
              <td>NR-ER</td>
              <td>Nuclear receptor ER binding prediction.</td>
            </tr>
            <tr>
              <td>NR-PPAR-gamma</td>
              <td>Nuclear receptor PPAR-gamma binding prediction.</td>
            </tr>
            <tr>
              <td>PAMPA_NCATS</td>
              <td>PAMPA permeability prediction (NCATS method).</td>
            </tr>
            <tr>
              <td>Pgp_Broccatelli</td>
              <td>P-glycoprotein substrate prediction (Broccatelli method).</td>
            </tr>
            <tr>
              <td>SR-ARE</td>
              <td>Stress response element ARE activation prediction.</td>
            </tr>
            <tr>
              <td>SR-ATAD5</td>
              <td>Stress response element ATAD5 activation prediction.</td>
            </tr>
            <tr>
              <td>SR-HSE</td>
              <td>Stress response element HSE activation prediction.</td>
            </tr>
            <tr>
              <td>SR-MMP</td>
              <td>Stress response element MMP activation prediction.</td>
            </tr>
            <tr>
              <td>SR-p53</td>
              <td>Stress response element p53 activation prediction.</td>
            </tr>
            <tr>
              <td>Skin_Reaction</td>
              <td>Skin reaction prediction.</td>
            </tr>
            <tr>
              <td>hERG</td>
              <td>hERG channel inhibition prediction.</td>
            </tr>
            <tr>
              <td>Caco2_Wang</td>
              <td>Caco-2 permeability prediction (Wang method).</td>
            </tr>
            <tr>
              <td>Clearance_Hepatocyte_AZ</td>
              <td>Hepatocyte clearance prediction (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>Clearance_Microsome_AZ</td>
              <td>Microsome clearance prediction (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>Half_Life_Obach</td>
              <td>Half-life prediction (Obach method).</td>
            </tr>
            <tr>
              <td>HydrationFreeEnergy_FreeSolv</td>
              <td>Hydration free energy prediction (FreeSolv method).</td>
            </tr>
            <tr>
              <td>LD50_Zhu</td>
              <td>LD50 toxicity prediction (Zhu method).</td>
            </tr>
            <tr>
              <td>Lipophilicity_AstraZeneca</td>
              <td>Lipophilicity prediction (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>PPBR_AZ</td>
              <td>Plasma protein binding rate prediction (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>Solubility_AqSolDB</td>
              <td>Aqueous solubility prediction (AqSolDB method).</td>
            </tr>
            <tr>
              <td>VDss_Lombardo</td>
              <td>Volume of distribution prediction (Lombardo method).</td>
            </tr>
            </tbody>
        </table>

        {/* Percentile Ranks (for Comparison) */}
        <h3 className="subheading">Percentile Ranks (for Comparison) and their description</h3>
        <table className="help-table">
        <thead>
            <tr>
              <th>Column Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Lipinski_drugbank_approved_percentile</td>
              <td>Lipinski's rule of five compliance percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>AMES_drugbank_approved_percentile</td>
              <td>Ames test mutagenicity prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>BBB_Martins_drugbank_approved_percentile</td>
              <td>Blood-brain barrier permeability prediction percentile among drugbank approved compounds (Martins method).</td>
            </tr>
            <tr>
              <td>Bioavailability_Ma_drugbank_approved_percentile</td>
              <td>Bioavailability prediction percentile among drugbank approved compounds (Ma method).</td>
            </tr>
            <tr>
              <td>CYP1A2_Veith_drugbank_approved_percentile</td>
              <td>CYP1A2 inhibition prediction percentile among drugbank approved compounds (Veith method).</td>
            </tr>
            <tr>
              <td>CYP2C19_Veith_drugbank_approved_percentile</td>
              <td>CYP2C19 inhibition prediction percentile among drugbank approved compounds (Veith method).</td>
            </tr>
            <tr>
              <td>CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile</td>
              <td>CYP2C9 substrate prediction percentile among drugbank approved compounds (CarbonMangels method).</td>
            </tr>
            <tr>
              <td>CYP2C9_Veith_drugbank_approved_percentile</td>
              <td>CYP2C9 inhibition prediction percentile among drugbank approved compounds (Veith method).</td>
            </tr>
            <tr>
              <td>CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile</td>
              <td>CYP2D6 substrate prediction percentile among drugbank approved compounds (CarbonMangels method).</td>
            </tr>
            <tr>
              <td>CYP2D6_Veith_drugbank_approved_percentile</td>
              <td>CYP2D6 inhibition prediction percentile among drugbank approved compounds (Veith method).</td>
            </tr>
            <tr>
              <td>CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile</td>
              <td>CYP3A4 substrate prediction percentile among drugbank approved compounds (CarbonMangels method).</td>
            </tr>
            <tr>
              <td>CYP3A4_Veith_drugbank_approved_percentile</td>
              <td>CYP3A4 inhibition prediction percentile among drugbank approved compounds (Veith method).</td>
            </tr>
            <tr>
              <td>Carcinogens_Lagunin_drugbank_approved_percentile</td>
              <td>Carcinogenicity prediction percentile among drugbank approved compounds (Lagunin method).</td>
            </tr>
            <tr>
              <td>ClinTox_drugbank_approved_percentile</td>
              <td>Clinical toxicity prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>DILI_drugbank_approved_percentile</td>
              <td>Drug-induced liver injury prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>HIA_Hou_drugbank_approved_percentile</td>
              <td>Human intestinal absorption prediction percentile among drugbank approved compounds (Hou method).</td>
            </tr>
            <tr>
              <td>NR-AR-LBD_drugbank_approved_percentile</td>
              <td>Nuclear receptor AR LBD binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>NR-AR_drugbank_approved_percentile</td>
              <td>Nuclear receptor AR binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>NR-AhR_drugbank_approved_percentile</td>
              <td>Nuclear receptor AhR binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>NR-Aromatase_drugbank_approved_percentile</td>
              <td>Nuclear receptor aromatase binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>NR-ER-LBD_drugbank_approved_percentile</td>
              <td>Nuclear receptor ER LBD binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>NR-ER_drugbank_approved_percentile</td>
              <td>Nuclear receptor ER binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>NR-PPAR-gamma_drugbank_approved_percentile</td>
              <td>Nuclear receptor PPAR-gamma binding prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>PAMPA_NCATS_drugbank_approved_percentile</td>
              <td>PAMPA permeability prediction percentile among drugbank approved compounds (NCATS method).</td>
            </tr>
            <tr>
              <td>Pgp_Broccatelli_drugbank_approved_percentile</td>
              <td>P-glycoprotein substrate prediction percentile among drugbank approved compounds (Broccatelli method).</td>
            </tr>
            <tr>
              <td>SR-ARE_drugbank_approved_percentile</td>
              <td>Stress response element ARE activation prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>SR-ATAD5_drugbank_approved_percentile</td>
              <td>Stress response element ATAD5 activation prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>SR-HSE_drugbank_approved_percentile</td>
              <td>Stress response element HSE activation prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>SR-MMP_drugbank_approved_percentile</td>
              <td>Stress response element MMP activation prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>SR-p53_drugbank_approved_percentile</td>
              <td>Stress response element p53 activation prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>Skin_Reaction_drugbank_approved_percentile</td>
              <td>Skin reaction prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>hERG_drugbank_approved_percentile</td>
              <td>hERG channel inhibition prediction percentile among drugbank approved compounds.</td>
            </tr>
            <tr>
              <td>Caco2_Wang_drugbank_approved_percentile</td>
              <td>Caco-2 permeability prediction percentile among drugbank approved compounds (Wang method).</td>
            </tr>
            <tr>
              <td>Clearance_Hepatocyte_AZ_drugbank_approved_percentile</td>
              <td>Hepatocyte clearance prediction percentile among drugbank approved compounds (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>Clearance_Microsome_AZ_drugbank_approved_percentile</td>
              <td>Microsome clearance prediction percentile among drugbank approved compounds (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>Half_Life_Obach_drugbank_approved_percentile</td>
              <td>Half-life prediction percentile among drugbank approved compounds (Obach method).</td>
            </tr>
            <tr>
              <td>HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile</td>
              <td>Hydration free energy prediction percentile among drugbank approved compounds (FreeSolv method).</td>
            </tr>
            <tr>
              <td>LD50_Zhu_drugbank_approved_percentile</td>
              <td>LD50 toxicity prediction percentile among drugbank approved compounds (Zhu method).</td>
            </tr>
            <tr>
              <td>Lipophilicity_AstraZeneca_drugbank_approved_percentile</td>
              <td>Lipophilicity prediction percentile among drugbank approved compounds (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>PPBR_AZ_drugbank_approved_percentile</td>
              <td>Plasma protein binding rate prediction percentile among drugbank approved compounds (AstraZeneca method).</td>
            </tr>
            <tr>
              <td>Solubility_AqSolDB_drugbank_approved_percentile</td>
              <td>Aqueous solubility prediction percentile among drugbank approved compounds (AqSolDB method).</td>
            </tr>
            <tr>
              <td>VDss_Lombardo_drugbank_approved_percentile</td>
              <td>Volume of distribution prediction percentile among drugbank approved compounds (Lombardo method).</td>
            </tr>
            </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};


export default HelpPage;
