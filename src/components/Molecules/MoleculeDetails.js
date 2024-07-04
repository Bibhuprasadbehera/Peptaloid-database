import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoleculeDetails.css';
import molecule4 from '../../images/molecule4.jpg';

const MoleculeDetails = () => {
  const location = useLocation();
  const { molecule } = location.state || {};

  const [imageUrl, setImageUrl] = useState(molecule4);
  const [error, setError] = useState('');

  useEffect(() => {
    if (molecule && molecule.smiles) {
      const fetchMoleculeImage = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/generate-molecule/?smiles=${encodeURIComponent(molecule.smiles)}`);
          if (!response.ok) {
            throw new Error('Error generating image');
          }
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } catch (error) {
          setError('Error generating image: ' + error.message);
          setImageUrl(molecule4);  // Fallback to molecule4 image
        }
      };

      fetchMoleculeImage();
    }
  }, [molecule]);

  const [showADMET, setShowADMET] = useState(false);
  const [showPercentiles, setShowPercentiles] = useState(false);

  const generateFile = (fileType) => {
    const headers = [
      "Category", "Property", "Value"
    ];

    const rows = [
      ["Basic Information", "Peptaloid ID", molecule.peptaloid_id],
      ["Basic Information", "Compound Name", molecule.Compound_Name],
      ["Basic Information", "IUPAC Name", molecule.IUPAC_Name],
      ["Basic Information", "Formula", molecule.MolecularFormula],
      ["Basic Information", "SMILES", molecule.smiles],
      ["Basic Information", "InChIKey", molecule.InChIKey],
      ["Basic Information", "Compound InChI", molecule.Compound_InChI],
      ["Origin", "Origin", molecule.origin_type],
      ["Origin", "Genus", molecule.genus],
      ["Origin", "Species", molecule.origin_species],
      ["IDs", "Coconut ID", molecule.coconut_id],
      ["IDs", "NPatlas ID", molecule.npatlas_id],
      ["IDs", "Supernatural ID", molecule.supernatural_id],
      ["IDs", "Zinc ID", molecule.zinc_id],
      ["Molecular Properties", "Num Atoms", molecule.Num_Atoms],
      ["Molecular Properties", "Heavy Atoms", molecule.Heavy_Atoms],
      ["Molecular Properties", "Total Charge", molecule.total_charge],
      ["Molecular Properties", "QED Score", molecule.qed_score],
      ["Molecular Properties", "TPSA", molecule.TPSA],
      ["Molecular Properties", "Exact MW", molecule.Exact_MW],
      ["Lipinski's Rule of Five", "Lipinski", molecule.Lipinski],
      ["Lipinski's Rule of Five", "SlogP", molecule.SlogP],
      ["Lipinski's Rule of Five", "Num HBA", molecule.Num_HBA],
      ["Lipinski's Rule of Five", "Num HBD", molecule.Num_HBD],
      ["Additional Properties", "Num Rotatable Bonds", molecule.Num_Rotatable_Bonds],
      ["Additional Properties", "Num Amide Bonds", molecule.Num_Amide_Bonds],
      ["Additional Properties", "Num Hetero Atoms", molecule.Num_Hetero_Atoms],
      ["Additional Properties", "Num Heavy Atoms", molecule.Num_Heavy_Atoms],
      ["Additional Properties", "Num StereoCenters", molecule.Num_StereoCenters],
      ["Additional Properties", "Num Saturated Rings", molecule.Num_Saturated_Rings],
      ["Additional Properties", "Num Aliphatic Rings", molecule.Num_Aliphatic_Rings],
      ["Additional Properties", "CX LogP", molecule.CX_LogP],
      ["Additional Properties", "CX LogD", molecule.CX_LogD],
      ["Functional Groups", "Alcohol", molecule.Alcohol],
      ["Functional Groups", "Aldehyde", molecule.Aldehyde],
      ["Functional Groups", "Ketone", molecule.Ketone],
      ["Functional Groups", "Carboxylic Acid", molecule.Carboxylic_Acid],
      ["Functional Groups", "Amine", molecule.Amine],
      ["Functional Groups", "Thiol", molecule.Thiol],
      ["ADMET Properties", "AMES", molecule.AMES],
      ["ADMET Properties", "BBB Martins", molecule.BBB_Martins],
      ["ADMET Properties", "Bioavailability Ma", molecule.Bioavailability_Ma],
      ["ADMET Properties", "CYP1A2 Veith", molecule.CYP1A2_Veith],
      ["ADMET Properties", "CYP2C19 Veith", molecule.CYP2C19_Veith],
      ["ADMET Properties", "CYP2C9 Substrate Carbon Mangels", molecule.CYP2C9_Substrate_CarbonMangels],
      ["ADMET Properties", "CYP2C9 Veith", molecule.CYP2C9_Veith],
      ["ADMET Properties", "CYP2D6 Substrate Carbon Mangels", molecule.CYP2D6_Substrate_CarbonMangels],
      ["ADMET Properties", "CYP2D6 Veith", molecule.CYP2D6_Veith],
      ["ADMET Properties", "CYP3A4 Substrate Carbon Mangels", molecule.CYP3A4_Substrate_CarbonMangels],
      ["ADMET Properties", "CYP3A4 Veith", molecule.CYP3A4_Veith],
      ["ADMET Properties", "Carcinogens Lagunin", molecule.Carcinogens_Lagunin],
      ["ADMET Properties", "ClinTox", molecule.ClinTox],
      ["ADMET Properties", "DILI", molecule.DILI],
      ["ADMET Properties", "HIA Hou", molecule.HIA_Hou],
      ["ADMET Properties", "NR AR LBD", molecule.NR_AR_LBD],
      ["ADMET Properties", "NR AR", molecule.NR_AR],
      ["ADMET Properties", "NR AhR", molecule.NR_AhR],
      ["ADMET Properties", "NR Aromatase", molecule.NR_Aromatase],
      ["ADMET Properties", "NR ER LBD", molecule.NR_ER_LBD],
      ["ADMET Properties", "NR ER", molecule.NR_ER],
      ["ADMET Properties", "NR PPAR Gamma", molecule.NR_PPAR_gamma],
      ["ADMET Properties", "PAMPA NCATS", molecule.PAMPA_NCATS],
      ["ADMET Properties", "Pgp Broccatelli", molecule.Pgp_Broccatelli],
      ["ADMET Properties", "SR ARE", molecule.SR_ARE],
      ["ADMET Properties", "SR ATAD5", molecule.SR_ATAD5],
      ["ADMET Properties", "SR HSE", molecule.SR_HSE],
      ["ADMET Properties", "SR MMP", molecule.SR_MMP],
      ["ADMET Properties", "SR p53", molecule.SR_p53],
      ["ADMET Properties", "Skin Reaction", molecule.Skin_Reaction],
      ["ADMET Properties", "hERG", molecule.hERG],
      ["ADMET Properties", "Caco2 Wang", molecule.Caco2_Wang],
      ["ADMET Properties", "Clearance Hepatocyte AZ", molecule.Clearance_Hepatocyte_AZ],
      ["ADMET Properties", "Clearance Microsome AZ", molecule.Clearance_Microsome_AZ],
      ["ADMET Properties", "Half Life Obach", molecule.Half_Life_Obach],
      ["ADMET Properties", "Hydration Free Energy FreeSolv", molecule.HydrationFreeEnergy_FreeSolv],
      ["ADMET Properties", "LD50 Zhu", molecule.LD50_Zhu],
      ["ADMET Properties", "Lipophilicity AstraZeneca", molecule.Lipophilicity_AstraZeneca],
      ["ADMET Properties", "PPBR AZ", molecule.PPBR_AZ],
      ["ADMET Properties", "Solubility AqSolDB", molecule.Solubility_AqSolDB],
      ["ADMET Properties", "VDss Lombardo", molecule.VDss_Lombardo],
      ["Percentile Data", "Lipinski DrugBank Approved Percentile", molecule.Lipinski_drugbank_approved_percentile],
      ["Percentile Data", "AMES DrugBank Approved Percentile", molecule.AMES_drugbank_approved_percentile],
      ["Percentile Data", "BBB Martins DrugBank Approved Percentile", molecule.BBB_Martins_drugbank_approved_percentile],
      ["Percentile Data", "Bioavailability Ma DrugBank Approved Percentile", molecule.Bioavailability_Ma_drugbank_approved_percentile],
      ["Percentile Data", "CYP1A2 Veith DrugBank Approved Percentile", molecule.CYP1A2_Veith_drugbank_approved_percentile],
      ["Percentile Data", "CYP2C19 Veith DrugBank Approved Percentile", molecule.CYP2C19_Veith_drugbank_approved_percentile],
      ["Percentile Data", "CYP2C9 Substrate Carbon Mangels DrugBank Approved Percentile", molecule.CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile],
      ["Percentile Data", "CYP2C9 Veith DrugBank Approved Percentile", molecule.CYP2C9_Veith_drugbank_approved_percentile],
      ["Percentile Data", "CYP2D6 Substrate Carbon Mangels DrugBank Approved Percentile", molecule.CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile],
      ["Percentile Data", "CYP2D6 Veith DrugBank Approved Percentile", molecule.CYP2D6_Veith_drugbank_approved_percentile],
      ["Percentile Data", "CYP3A4 Substrate Carbon Mangels DrugBank Approved Percentile", molecule.CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile],
      ["Percentile Data", "CYP3A4 Veith DrugBank Approved Percentile", molecule.CYP3A4_Veith_drugbank_approved_percentile],
      ["Percentile Data", "Carcinogens Lagunin DrugBank Approved Percentile", molecule.Carcinogens_Lagunin_drugbank_approved_percentile],
      ["Percentile Data", "ClinTox DrugBank Approved Percentile", molecule.ClinTox_drugbank_approved_percentile],
      ["Percentile Data", "DILI DrugBank Approved Percentile", molecule.DILI_drugbank_approved_percentile],
      ["Percentile Data", "HIA Hou DrugBank Approved Percentile", molecule.HIA_Hou_drugbank_approved_percentile],
      ["Percentile Data", "NR AR LBD DrugBank Approved Percentile", molecule.NR_AR_LBD_drugbank_approved_percentile],
      ["Percentile Data", "NR AR DrugBank Approved Percentile", molecule.NR_AR_drugbank_approved_percentile],
      ["Percentile Data", "NR AhR DrugBank Approved Percentile", molecule.NR_AhR_drugbank_approved_percentile],
      ["Percentile Data", "NR Aromatase DrugBank Approved Percentile", molecule.NR_Aromatase_drugbank_approved_percentile],
      ["Percentile Data", "NR ER LBD DrugBank Approved Percentile", molecule.NR_ER_LBD_drugbank_approved_percentile],
      ["Percentile Data", "NR ER DrugBank Approved Percentile", molecule.NR_ER_drugbank_approved_percentile],
      ["Percentile Data", "NR PPAR Gamma DrugBank Approved Percentile", molecule.NR_PPAR_gamma_drugbank_approved_percentile],
      ["Percentile Data", "PAMPA NCATS DrugBank Approved Percentile", molecule.PAMPA_NCATS_drugbank_approved_percentile],
      ["Percentile Data", "Pgp Broccatelli DrugBank Approved Percentile", molecule.Pgp_Broccatelli_drugbank_approved_percentile],
      ["Percentile Data", "SR ARE DrugBank Approved Percentile", molecule.SR_ARE_drugbank_approved_percentile],
      ["Percentile Data", "SR ATAD5 DrugBank Approved Percentile", molecule.SR_ATAD5_drugbank_approved_percentile],
      ["Percentile Data", "SR HSE DrugBank Approved Percentile", molecule.SR_HSE_drugbank_approved_percentile],
      ["Percentile Data", "SR MMP DrugBank Approved Percentile", molecule.SR_MMP_drugbank_approved_percentile],
      ["Percentile Data", "SR p53 DrugBank Approved Percentile", molecule.SR_p53_drugbank_approved_percentile],
      ["Percentile Data", "Skin Reaction DrugBank Approved Percentile", molecule.Skin_Reaction_drugbank_approved_percentile],
      ["Percentile Data", "hERG DrugBank Approved Percentile", molecule.hERG_drugbank_approved_percentile],
      ["Percentile Data", "Caco2 Wang DrugBank Approved Percentile", molecule.Caco2_Wang_drugbank_approved_percentile],
      ["Percentile Data", "Clearance Hepatocyte AZ DrugBank Approved Percentile", molecule.Clearance_Hepatocyte_AZ_drugbank_approved_percentile],
      ["Percentile Data", "Clearance Microsome AZ DrugBank Approved Percentile", molecule.Clearance_Microsome_AZ_drugbank_approved_percentile],
      ["Percentile Data", "Half Life Obach DrugBank Approved Percentile", molecule.Half_Life_Obach_drugbank_approved_percentile],
      ["Percentile Data", "Hydration Free Energy FreeSolv DrugBank Approved Percentile", molecule.HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile],
      ["Percentile Data", "LD50 Zhu DrugBank Approved Percentile", molecule.LD50_Zhu_drugbank_approved_percentile],
      ["Percentile Data", "Lipophilicity AstraZeneca DrugBank Approved Percentile", molecule.Lipophilicity_AstraZeneca_drugbank_approved_percentile],
      ["Percentile Data", "PPBR AZ DrugBank Approved Percentile", molecule.PPBR_AZ_drugbank_approved_percentile],
      ["Percentile Data", "Solubility AqSolDB DrugBank Approved Percentile", molecule.Solubility_AqSolDB_drugbank_approved_percentile],
      ["Percentile Data", "VDss Lombardo DrugBank Approved Percentile", molecule.VDss_Lombardo_drugbank_approved_percentile],
    ];

    const content = [
      headers.join(fileType === 'csv' ? ',' : '\t'), 
      ...rows.map(row => row.map(cell => cell === undefined ? '' : `"${cell}"`).join(fileType === 'csv' ? ',' : '\t'))
    ].join('\n');

    const blob = new Blob([content], { type: fileType === 'csv' ? 'text/csv;charset=utf-8;' : 'text/tab-separated-values;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `molecule_details.${fileType}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="molecule-container">
      <img src={molecule4} alt="Molecule" className="molecule-image" />
      <div className="molecule-details">
      <div className="download-dropdown">
          <button className="download-button">Download</button>
          <div className="download-content">
            <a href="#" onClick={() => generateFile('csv')}>CSV</a>
            <a href="#" onClick={() => generateFile('tsv')}>TSV</a>
          </div>
        </div>
      
        <h3>Basic Information</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Peptaloid ID:</strong></td>
              <td>{molecule.peptaloid_id}</td>
            </tr>
            <tr>
              <td><strong>Compound Name:</strong></td>
              <td>{molecule.Compound_Name}</td>
            </tr>
            <tr>
              <td><strong>IUPAC Name:</strong></td>
              <td>{molecule.IUPAC_Name}</td>
            </tr>
            <tr>
              <td><strong>Formula:</strong></td>
              <td>{molecule.MolecularFormula}</td>
            </tr>
            <tr>
              <td><strong>SMILES:</strong></td>
              <td>{molecule.smiles}</td>
            </tr>
            <tr>
              <td><strong>InChIKey:</strong></td>
              <td>{molecule.InChIKey}</td>
            </tr>
            <tr>
              <td><strong>Compound InChI:</strong></td>
              <td>{molecule.Compound_InChI}</td>
            </tr>
          </tbody>
        </table>

        <h3>Origin</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Origin:</strong></td>
              <td>{molecule.origin_type}</td>
            </tr>
            <tr>
              <td><strong>Genus:</strong></td>
              <td>{molecule.genus}</td>
            </tr>
            <tr>
              <td><strong>Species:</strong></td>
              <td>{molecule.origin_species}</td>
            </tr>
          </tbody>
        </table>

        <h3>IDs</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Coconut ID:</strong></td>
              <td>{molecule.coconut_id}</td>
            </tr>
            <tr>
              <td><strong>NPatlas ID:</strong></td>
              <td>{molecule.npatlas_id}</td>
            </tr>
            <tr>
              <td><strong>Supernatural ID:</strong></td>
              <td>{molecule.supernatural_id}</td>
            </tr>
            <tr>
              <td><strong>Zinc ID:</strong></td>
              <td>{molecule.zinc_id}</td>
            </tr>
          </tbody>
        </table>

        <h3>Molecular Properties</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Num Atoms:</strong></td>
              <td>{molecule.Num_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Heavy Atoms:</strong></td>
              <td>{molecule.Heavy_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Total Charge:</strong></td>
              <td>{molecule.total_charge}</td>
            </tr>
            <tr>
              <td><strong>QED Score:</strong></td>
              <td>{molecule.qed_score}</td>
            </tr>
            <tr>
              <td><strong>TPSA:</strong></td>
              <td>{molecule.TPSA}</td>
            </tr>
            <tr>
              <td><strong>Exact MW:</strong></td>
              <td>{molecule.Exact_MW}</td>
            </tr>
          </tbody>
        </table>

        <h3>Lipinski's Rule of Five</h3>
        <table>
          <tbody>
          <tr>
              <td><strong>Lipinski:</strong></td>
              <td>{molecule.Lipinski}</td>
            </tr>
            <tr>
              <td><strong>SlogP:</strong></td>
              <td>{molecule.SlogP}</td>
            </tr>
            <tr>
              <td><strong>Exact MW:</strong></td>
              <td>{molecule.Exact_MW}</td>
            </tr>
            <tr>
              <td><strong>Num HBA:</strong></td>
              <td>{molecule.Num_HBA}</td>
            </tr>
            <tr>
              <td><strong>Num HBD:</strong></td>
              <td>{molecule.Num_HBD}</td>
            </tr>
          </tbody>
        </table>

        <h3>Additional Properties</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Num Rotatable Bonds:</strong></td>
              <td>{molecule.Num_Rotatable_Bonds}</td>
            </tr>
            <tr>
              <td><strong>Num Amide Bonds:</strong></td>
              <td>{molecule.Num_Amide_Bonds}</td>
            </tr>
            <tr>
              <td><strong>Num Hetero Atoms:</strong></td>
              <td>{molecule.Num_Hetero_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Num Heavy Atoms:</strong></td>
              <td>{molecule.Num_Heavy_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Num Atoms:</strong></td>
              <td>{molecule.Num_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Num StereoCenters:</strong></td>
              <td>{molecule.Num_StereoCenters}</td>
            </tr>
            <tr>
              <td><strong>Num Saturated Rings:</strong></td>
              <td>{molecule.Num_Saturated_Rings}</td>
            </tr>
            <tr>
              <td><strong>Num Aliphatic Rings:</strong></td>
              <td>{molecule.Num_Aliphatic_Rings}</td>
            </tr>
            <tr>
              <td><strong>CX LogP:</strong></td>
              <td>{molecule.CX_LogP}</td>
            </tr>
            <tr>
              <td><strong>CX LogD:</strong></td>
              <td>{molecule.CX_LogD}</td>
            </tr>
          </tbody>
        </table>

        <h3>Functional Groups</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Alcohol:</strong></td>
              <td>{molecule.Alcohol}</td>
            </tr>
            <tr>
              <td><strong>Aldehyde:</strong></td>
              <td>{molecule.Aldehyde}</td>
            </tr>
            <tr>
              <td><strong>Ketone:</strong></td>
              <td>{molecule.Ketone}</td>
            </tr>
            <tr>
              <td><strong>Carboxylic Acid:</strong></td>
              <td>{molecule.Carboxylic_Acid}</td>
            </tr>
            <tr>
              <td><strong>Amine:</strong></td>
              <td>{molecule.Amine}</td>
            </tr>
            <tr>
              <td><strong>Thiol:</strong></td>
              <td>{molecule.Thiol}</td>
            </tr>
          </tbody>
        </table>

        <h3 className="dropdown-header" onClick={() => setShowADMET(!showADMET)}>
          ADMET Properties {showADMET ? '▲' : '▼'}
        </h3>
        {showADMET && (
          <table>
            <tbody>
              <tr>
                <td><strong>AMES:</strong></td>
                <td>{molecule.AMES}</td>
              </tr>
              <tr>
                <td><strong>BBB Martins:</strong></td>
                <td>{molecule.BBB_Martins}</td>
              </tr>
              <tr>
                <td><strong>Bioavailability Ma:</strong></td>
                <td>{molecule.Bioavailability_Ma}</td>
              </tr>
              <tr>
                <td><strong>CYP1A2 Veith:</strong></td>
                <td>{molecule.CYP1A2_Veith}</td>
              </tr>
              <tr>
                <td><strong>CYP2C19 Veith:</strong></td>
                <td>{molecule.CYP2C19_Veith}</td>
              </tr>
              <tr>
                <td><strong>CYP2C9 Substrate Carbon Mangels:</strong></td>
                <td>{molecule.CYP2C9_Substrate_CarbonMangels}</td>
              </tr>
              <tr>
                <td><strong>CYP2C9 Veith:</strong></td>
                <td>{molecule.CYP2C9_Veith}</td>
              </tr>
              <tr>
                <td><strong>CYP2D6 Substrate Carbon Mangels:</strong></td>
                <td>{molecule.CYP2D6_Substrate_CarbonMangels}</td>
              </tr>
              <tr>
                <td><strong>CYP2D6 Veith:</strong></td>
                <td>{molecule.CYP2D6_Veith}</td>
              </tr>
              <tr>
                <td><strong>CYP3A4 Substrate Carbon Mangels:</strong></td>
                <td>{molecule.CYP3A4_Substrate_CarbonMangels}</td>
              </tr>
              <tr>
                <td><strong>CYP3A4 Veith:</strong></td>
                <td>{molecule.CYP3A4_Veith}</td>
              </tr>
              <tr>
                <td><strong>Carcinogens Lagunin:</strong></td>
                <td>{molecule.Carcinogens_Lagunin}</td>
              </tr>
              <tr>
                <td><strong>ClinTox:</strong></td>
                <td>{molecule.ClinTox}</td>
              </tr>
              <tr>
                <td><strong>DILI:</strong></td>
                <td>{molecule.DILI}</td>
              </tr>
              <tr>
                <td><strong>HIA Hou:</strong></td>
                <td>{molecule.HIA_Hou}</td>
              </tr>
              <tr>
                <td><strong>NR AR LBD:</strong></td>
                <td>{molecule.NR_AR_LBD}</td>
              </tr>
              <tr>
                <td><strong>NR AR:</strong></td>
                <td>{molecule.NR_AR}</td>
              </tr>
              <tr>
                <td><strong>NR AhR:</strong></td>
                <td>{molecule.NR_AhR}</td>
              </tr>
              <tr>
                <td><strong>NR Aromatase:</strong></td>
                <td>{molecule.NR_Aromatase}</td>
              </tr>
              <tr>
                <td><strong>NR ER LBD:</strong></td>
                <td>{molecule.NR_ER_LBD}</td>
              </tr>
              <tr>
                <td><strong>NR ER:</strong></td>
                <td>{molecule.NR_ER}</td>
              </tr>
              <tr>
                <td><strong>NR PPAR Gamma:</strong></td>
                <td>{molecule.NR_PPAR_gamma}</td>
              </tr>
              <tr>
                <td><strong>PAMPA NCATS:</strong></td>
                <td>{molecule.PAMPA_NCATS}</td>
              </tr>
              <tr>
                <td><strong>Pgp Broccatelli:</strong></td>
                <td>{molecule.Pgp_Broccatelli}</td>
              </tr>
              <tr>
                <td><strong>SR ARE:</strong></td>
                <td>{molecule.SR_ARE}</td>
              </tr>
              <tr>
                <td><strong>SR ATAD5:</strong></td>
                <td>{molecule.SR_ATAD5}</td>
              </tr>
              <tr>
                <td><strong>SR HSE:</strong></td>
                <td>{molecule.SR_HSE}</td>
              </tr>
              <tr>
                <td><strong>SR MMP:</strong></td>
                <td>{molecule.SR_MMP}</td>
              </tr>
              <tr>
                <td><strong>SR p53:</strong></td>
                <td>{molecule.SR_p53}</td>
              </tr>
              <tr>
                <td><strong>Skin Reaction:</strong></td>
                <td>{molecule.Skin_Reaction}</td>
              </tr>
              <tr>
                <td><strong>hERG:</strong></td>
                <td>{molecule.hERG}</td>
              </tr>
              <tr>
                <td><strong>Caco2 Wang:</strong></td>
                <td>{molecule.Caco2_Wang}</td>
              </tr>
              <tr>
                <td><strong>Clearance Hepatocyte AZ:</strong></td>
                <td>{molecule.Clearance_Hepatocyte_AZ}</td>
              </tr>
              <tr>
                <td><strong>Clearance Microsome AZ:</strong></td>
                <td>{molecule.Clearance_Microsome_AZ}</td>
              </tr>
              <tr>
                <td><strong>Half Life Obach:</strong></td>
                <td>{molecule.Half_Life_Obach}</td>
              </tr>
              <tr>
                <td><strong>Hydration Free Energy FreeSolv:</strong></td>
                <td>{molecule.HydrationFreeEnergy_FreeSolv}</td>
              </tr>
              <tr>
                <td><strong>LD50 Zhu:</strong></td>
                <td>{molecule.LD50_Zhu}</td>
              </tr>
              <tr>
                <td><strong>Lipophilicity AstraZeneca:</strong></td>
                <td>{molecule.Lipophilicity_AstraZeneca}</td>
              </tr>
              <tr>
                <td><strong>PPBR AZ:</strong></td>
                <td>{molecule.PPBR_AZ}</td>
              </tr>
              <tr>
                <td><strong>Solubility AqSolDB:</strong></td>
                <td>{molecule.Solubility_AqSolDB}</td>
              </tr>
              <tr>
                <td><strong>VDss Lombardo:</strong></td>
                <td>{molecule.VDss_Lombardo}</td>
              </tr>
            </tbody>
          </table>
        )}

        <h3 className="dropdown-header" onClick={() => setShowPercentiles(!showPercentiles)}>
          Percentile Data {showPercentiles ? '▲' : '▼'}
        </h3>
        {showPercentiles && (
          <table>
            <tbody>
              <tr>
                <td><strong>Lipinski DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Lipinski_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>AMES DrugBank Approved Percentile:</strong></td>
                <td>{molecule.AMES_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>BBB Martins DrugBank Approved Percentile:</strong></td>
                <td>{molecule.BBB_Martins_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Bioavailability Ma DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Bioavailability_Ma_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP1A2 Veith DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP1A2_Veith_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP2C19 Veith DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP2C19_Veith_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP2C9 Substrate Carbon Mangels DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP2C9 Veith DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP2C9_Veith_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP2D6 Substrate Carbon Mangels DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP2D6 Veith DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP2D6_Veith_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP3A4 Substrate Carbon Mangels DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>CYP3A4 Veith DrugBank Approved Percentile:</strong></td>
                <td>{molecule.CYP3A4_Veith_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Carcinogens Lagunin DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Carcinogens_Lagunin_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>ClinTox DrugBank Approved Percentile:</strong></td>
                <td>{molecule.ClinTox_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>DILI DrugBank Approved Percentile:</strong></td>
                <td>{molecule.DILI_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>HIA Hou DrugBank Approved Percentile:</strong></td>
                <td>{molecule.HIA_Hou_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR AR LBD DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_AR_LBD_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR AR DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_AR_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR AhR DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_AhR_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR Aromatase DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_Aromatase_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR ER LBD DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_ER_LBD_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR ER DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_ER_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>NR PPAR Gamma DrugBank Approved Percentile:</strong></td>
                <td>{molecule.NR_PPAR_gamma_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>PAMPA NCATS DrugBank Approved Percentile:</strong></td>
                <td>{molecule.PAMPA_NCATS_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Pgp Broccatelli DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Pgp_Broccatelli_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>SR ARE DrugBank Approved Percentile:</strong></td>
                <td>{molecule.SR_ARE_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>SR ATAD5 DrugBank Approved Percentile:</strong></td>
                <td>{molecule.SR_ATAD5_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>SR HSE DrugBank Approved Percentile:</strong></td>
                <td>{molecule.SR_HSE_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>SR MMP DrugBank Approved Percentile:</strong></td>
                <td>{molecule.SR_MMP_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>SR p53 DrugBank Approved Percentile:</strong></td>
                <td>{molecule.SR_p53_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Skin Reaction DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Skin_Reaction_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>hERG DrugBank Approved Percentile:</strong></td>
                <td>{molecule.hERG_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Caco2 Wang DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Caco2_Wang_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Clearance Hepatocyte AZ DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Clearance_Hepatocyte_AZ_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Clearance Microsome AZ DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Clearance_Microsome_AZ_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Half Life Obach DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Half_Life_Obach_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Hydration Free Energy FreeSolv DrugBank Approved Percentile:</strong></td>
                <td>{molecule.HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>LD50 Zhu DrugBank Approved Percentile:</strong></td>
                <td>{molecule.LD50_Zhu_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Lipophilicity AstraZeneca DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Lipophilicity_AstraZeneca_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>PPBR AZ DrugBank Approved Percentile:</strong></td>
                <td>{molecule.PPBR_AZ_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>Solubility AqSolDB DrugBank Approved Percentile:</strong></td>
                <td>{molecule.Solubility_AqSolDB_drugbank_approved_percentile}</td>
              </tr>
              <tr>
                <td><strong>VDss Lombardo DrugBank Approved Percentile:</strong></td>
                <td>{molecule.VDss_Lombardo_drugbank_approved_percentile}</td>
              </tr>
            </tbody>
          </table>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default MoleculeDetails;