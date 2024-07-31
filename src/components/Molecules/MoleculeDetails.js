import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './MoleculeDetails.css';
import molecule4 from '../../images/molecule4.jpg';

const MoleculeDetails = () => {
  const { peptaloid_id } = useParams();
  const location = useLocation();
  const [molecule, setMolecule] = useState(location.state?.molecule || null);
  const [imageUrl, setImageUrl] = useState(molecule4);
  const [error, setError] = useState('');
  const [showADMET, setShowADMET] = useState(false);
  const [showPercentiles, setShowPercentiles] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(true);
  const [pubchemId, setPubchemId] = useState(null);

  const contentRef = useRef(null);

  const getPubchemIdFromInchiKey = async (inchiKey) => {
    const base_url = "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/inchikey";
    const url = `${base_url}/${inchiKey}/cids/TXT`;
    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const id = await response.text();
        return id.trim();
      } else {
        console.error('Failed to fetch PubChem ID');
        return null;
      }
    } catch (error) {
      console.error('Error fetching PubChem ID:', error);
      return null;
    }
  };

  useEffect(() => {
    if (molecule && molecule.InChIKey) {
      getPubchemIdFromInchiKey(molecule.InChIKey)
        .then(id => setPubchemId(id));
    }
  }, [molecule]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = document.documentElement.clientHeight;
      if (contentRef.current.scrollTop > viewportHeight) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!molecule) {
      const fetchMolecule = async () => {
        try {
          const payload = {
            skip: 0,
            limit: 1,
            conditions: [
              {
                field: "peptaloid_id",
                value: peptaloid_id,
                operation: "equal",
                operator: "and"
              }
            ],
            source: [],
            functional_group: []
          };

          const response = await fetch('http://127.0.0.1:8000/api/molecules/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch molecule data');
          }

          const data = await response.json();
          if (data.length > 0) {
            setMolecule(data[0]);
          } else {
            throw new Error('Molecule not found');
          }
        } catch (error) {
          console.error('Error fetching molecule:', error);
          setError('Failed to load molecule data. Please try again later.');
        }
      };

      fetchMolecule();
    }
  }, [peptaloid_id, molecule]);

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

  const generateFile = (fileType) => {
    if (!molecule) return;
    const headers = ["Category", "Property", "Value"];  

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
      ["Lipinski's Rule of Five", "logP", molecule.SlogP],
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
      ...rows.map(row => row.map(cell => (cell === undefined ? '' : `"${cell}"`)).join(fileType === 'csv' ? ',' : '\t'))
    ].join('\n');
  
    const blob = new Blob([content], { type: fileType === 'csv' ? 'text/csv;charset=utf-8;' : 'text/tab-separated-values;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", `molecule_details.${fileType}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  if (!molecule) {
    return <div>Loading...</div>;
  }

    
  return (
    <div className="md-container">
      <div className="md-sidebar">
        <img src={imageUrl} alt="Molecule" className="md-molecule-image" />
        <div className="md-sidebar-links">
          <a href="#basic-information" onClick={(e) => handleLinkClick(e, 'basic-information')}>Basic Information</a>
          <a href="#origin" onClick={(e) => handleLinkClick(e, 'origin')}>Origin</a>
          <a href="#ids" onClick={(e) => handleLinkClick(e, 'ids')}>IDs</a>
          <a href="#molecular-properties" onClick={(e) => handleLinkClick(e, 'molecular-properties')}>Molecular Properties</a>
          <a href="#lipinskis-rule" onClick={(e) => handleLinkClick(e, 'lipinskis-rule')}>Lipinski's Rule of Five</a>
          <a href="#additional-properties" onClick={(e) => handleLinkClick(e, 'additional-properties')}>Additional Properties</a>
          <a href="#functional-groups" onClick={(e) => handleLinkClick(e, 'functional-groups')}>Functional Groups</a>
          <a href="#admet-properties" onClick={(e) => handleLinkClick(e, 'admet-properties')}>ADMET Properties</a>
          <a href="#percentile-data" onClick={(e) => handleLinkClick(e, 'percentile-data')}>Percentile Data</a>
        </div>
      </div>
      <div className="md-content-container" ref={contentRef}>
        <div className="md-content">
          <div className="md-download-dropdown">
            <button className="md-download-button">Download</button>
            <div className="md-download-content">
              <a href="#" onClick={() => generateFile('csv')}>CSV</a>
              <a href="#" onClick={() => generateFile('tsv')}>TSV</a>
            </div>
          </div>
      
        <h3 id="basic-information">Basic Information</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Peptaloid ID:</strong></td>
              <td>{molecule.peptaloid_id || '-'}</td>
            </tr>
            <tr>
              <td><strong>Compound Name:</strong></td>
              <td>{molecule.Compound_Name || '-'}</td>
            </tr>
            <tr>
              <td><strong>IUPAC Name:</strong></td>
              <td>{molecule.IUPAC_Name || '-'}</td>
            </tr>
            <tr>
              <td><strong>Molecular Formula:</strong></td>
              <td>{molecule.MolecularFormula || '-'}</td>
            </tr>
            <tr>
              <td><strong>SMILES:</strong></td>
              <td>{molecule.smiles || '-'}</td>
            </tr>
            <tr>
              <td><strong>InChIKey:</strong></td>
              <td>{molecule.InChIKey || '-'}</td>
            </tr>
            <tr>
              <td><strong>Compound InChI:</strong></td>
              <td>{molecule.Compound_InChI || '-'}</td>
            </tr>
          </tbody>
        </table>

        <h3 id="origin">Origin</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Origin (Bacterium or Fungus...) :</strong></td>
              <td>{molecule.origin_type || '-'}</td>
            </tr>
            <tr>
              <td><strong>Genus:</strong></td>
              <td>{molecule.genus || '-'}</td>
            </tr>
            <tr>
              <td><strong>Species:</strong></td>
              <td>{molecule.origin_species || '-'}</td>
            </tr>
          </tbody>
        </table>

        <h3 id="ids">IDs</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Coconut ID:</strong></td>
              <td>{molecule.coconut_id ? (<a href={`https://coconut.naturalproducts.net/compound/coconut_id/${molecule.coconut_id}`} target="_blank" rel="noopener noreferrer">{molecule.coconut_id}</a>) : ('-')}</td>
            </tr>
            <tr>
              <td><strong>NPatlas ID:</strong></td>
              <td>{molecule.npatlas_id || '-'}</td>
            </tr>
            <tr>
              <td><strong>Supernatural ID:</strong></td>
              <td>{molecule.supernatural_id || '-'}</td>
            </tr>
            <tr>
              <td><strong>Zinc ID:</strong></td>
              <td>{molecule.zinc_id ? (<a href={`https://zinc.docking.org/substances/${molecule.zinc_id}/`} target="_blank" rel="noopener noreferrer"> {molecule.zinc_id}</a>) : ('-')}</td>
            </tr>
            <tr>
              <td><strong>PubChem ID:</strong></td>
              <td>{pubchemId ? (<a href={`https://pubchem.ncbi.nlm.nih.gov/compound/${pubchemId}`} target="_blank" rel="noopener noreferrer">{pubchemId}</a>) : ('-')}</td>
            </tr>
          </tbody>
        </table>

        <h3 id="molecular-properties">Molecular Properties</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Number of Atoms:</strong></td>
              <td>{molecule.Num_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Number of Heavy Atoms:</strong></td>
              <td>{molecule.Heavy_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Total Charge:</strong></td>
              <td>{molecule.total_charge}</td>
            </tr>
            <tr>
              <td><strong>Quantitative estimate of drug-likeness score(QED) Score:</strong></td>
              <td>{molecule.qed_score ? molecule.qed_score.toFixed(2) : '-'}</td>
            </tr>
            <tr>
              <td><strong>Topological polar surface area:</strong></td>
              <td>{molecule.TPSA ? `${molecule.TPSA.toFixed(2)} Å²` : '-'}</td>
            </tr>
            <tr>
              <td><strong>Molecular Weight:</strong></td>
              <td>{molecule.Exact_MW ? molecule.Exact_MW.toFixed(2) + ' Dalton' : '-'}</td>
            </tr>
          </tbody>
        </table>

        <h3 id="lipinskis-rule">Lipinski's Rule of Five</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Number of Lipinski rule violation:</strong></td>
              <td>{molecule.Lipinski}</td>
            </tr>
            <tr>
              <td><strong>octanol-water partition coefficient (LogP):</strong></td>
              <td>{molecule.SlogP ? molecule.SlogP.toFixed(2) + ' log-ratio' : '-'}</td>
            </tr>
            <tr>
              <td><strong>Exact Molecular Weight:</strong></td>
              <td>{molecule.Exact_MW ? `${molecule.Exact_MW} Dalton` : '-'}</td>
            </tr>
            <tr>
              <td><strong>Number of hydrogen bond acceptors:</strong></td>
              <td>{molecule.Num_HBA}</td>
            </tr>
            <tr>
              <td><strong>Number of hydrogen bond donors:</strong></td>
              <td>{molecule.Num_HBD}</td>
            </tr>
          </tbody>
        </table>

        <h3 id="additional-properties">Additional Properties</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Number of Rotatable Bonds:</strong></td>
              <td>{molecule.Num_Rotatable_Bonds}</td>
            </tr>
            <tr>
              <td><strong>Number of Amide Bonds:</strong></td>
              <td>{molecule.Num_Amide_Bonds}</td>
            </tr>
            <tr>
              <td><strong>Number of Hetero Atoms:</strong></td>
              <td>{molecule.Num_Hetero_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Number of Heavy Atoms:</strong></td>
              <td>{molecule.Num_Heavy_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Number of Atoms:</strong></td>
              <td>{molecule.Num_Atoms}</td>
            </tr>
            <tr>
              <td><strong>Number of StereoCenters:</strong></td>
              <td>{molecule.Num_StereoCenters}</td>
            </tr>
            <tr>
              <td><strong>Number of Saturated Rings:</strong></td>
              <td>{molecule.Num_Saturated_Rings}</td>
            </tr>
            <tr>
              <td><strong>Number of Aliphatic Rings:</strong></td>
              <td>{molecule.Num_Aliphatic_Rings}</td>
            </tr>
            <tr>
              <td><strong>Consensus LogP:</strong></td>
              <td>{molecule.CX_LogP ? molecule.CX_LogP.toFixed(2) : '-'}</td>
            </tr>
            <tr>
              <td><strong>Consensus LogD:</strong></td>
              <td>{molecule.CX_LogD ? molecule.CX_LogD.toFixed(2) : '-'}</td>
            </tr>
          </tbody>
        </table>

        <h3 id="functional-groups">Number of Functional Groups</h3>
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

        <h3 id="admet-properties">ADMET Properties</h3>
        <table className="md-table">
            <tbody>
              <tr>
                <td><strong>Number of Lipinski rule violation:</strong></td>
                <td>{molecule.Lipinski}</td>
              </tr>
              <tr>
                <th colspan="3"><strong>Absorption:</strong></th>
              </tr>
              <tr>
                <td><strong>Mutagenicity:</strong></td>
                <td>{molecule.AMES != null ? molecule.AMES.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Human Intestinal Absorption:</strong></td>
                <td>{molecule.HIA_Hou != null ? molecule.HIA_Hou.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Oral Bioavailability:</strong></td>
                <td>{molecule.Bioavailability_Ma != null ? molecule.Bioavailability_Ma.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Aqueous Solubility:</strong></td>
                <td>{molecule.Solubility_AqSolDB != null ? molecule.Solubility_AqSolDB.toFixed(3) + ' log(mol/L)' : '-'}</td>
              </tr>
              <tr>
                <td><strong>Lipophilicity:</strong></td>
                <td>{molecule.Lipophilicity_AstraZeneca != null ? molecule.Lipophilicity_AstraZeneca.toFixed(3) + ' log-ratio' : '-'}</td>
              </tr>
              <tr>
                <td><strong>Hydration Free Energy:</strong></td>
                <td>{molecule.HydrationFreeEnergy_FreeSolv != null ? molecule.HydrationFreeEnergy_FreeSolv.toFixed(3) + ' kcal/mol' : '-'}</td>
              </tr>
              <tr>
                <td><strong>Cell Effective Permeability:</strong></td>
                <td>{molecule.Caco2_Wang != null ? molecule.Caco2_Wang.toFixed(3) + ' log(10⁻⁶ cm/s)' : '-'}</td>
              </tr>
              <tr>
                <td><strong>PAMPA Permeability:</strong></td>
                <td>{molecule.PAMPA_NCATS != null ? molecule.PAMPA_NCATS.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>P-glycoprotein Inhibition:</strong></td>
                <td>{molecule.Pgp_Broccatelli != null ? molecule.Pgp_Broccatelli.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <th colspan="2"><strong>Distribution:</strong></th>
              </tr>
              <tr>
                <td><strong>Blood-Brain Barrier Penetration:</strong></td>
                <td>{molecule.BBB_Martins != null ? molecule.BBB_Martins.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Plasma Protein Binding Rate:</strong></td>
                <td>{molecule.PPBR_AZ != null ? molecule.PPBR_AZ.toFixed(3) + ' %' : '-'}</td>
              </tr>
              <tr>
                <td><strong>Volume of Distribution at Steady State:</strong></td>
                <td>{molecule.VDss_Lombardo != null ? molecule.VDss_Lombardo.toFixed(3) + ' L/kg' : '-'}</td>
              </tr>
              <tr>
                <th colspan="2"><strong>Metabolism:</strong></th>
              </tr>
              <tr>
                <td><strong>CYP1A2 Inhibition:</strong></td>
                <td>{molecule.CYP1A2_Veith != null ? molecule.CYP1A2_Veith.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP2C19 Inhibition:</strong></td>
                <td>{molecule.CYP2C19_Veith != null ? molecule.CYP2C19_Veith.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP2C9 Substrate:</strong></td>
                <td>{molecule.CYP2C9_Substrate_CarbonMangels != null ? molecule.CYP2C9_Substrate_CarbonMangels.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP2C9 Inhibition:</strong></td>
                <td>{molecule.CYP2C9_Veith != null ? molecule.CYP2C9_Veith.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP2D6 Substrate:</strong></td>
                <td>{molecule.CYP2D6_Substrate_CarbonMangels != null ? molecule.CYP2D6_Substrate_CarbonMangels.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP2D6 Inhibition:</strong></td>
                <td>{molecule.CYP2D6_Veith != null ? molecule.CYP2D6_Veith.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP3A4 Substrate:</strong></td>
                <td>{molecule.CYP3A4_Substrate_CarbonMangels != null ? molecule.CYP3A4_Substrate_CarbonMangels.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>CYP3A4 Inhibition:</strong></td>
                <td>{molecule.CYP3A4_Veith != null ? molecule.CYP3A4_Veith.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <th colspan="2"><strong>Excretion:</strong></th>
              </tr>
              <tr>
                <td><strong>Half Life:</strong></td>
                <td>{molecule.Half_Life_Obach != null ? molecule.Half_Life_Obach.toFixed(3) + ' hr' : '-'}</td>
              </tr>
              <tr>
                <td><strong>Drug Clearance (Hepatocyte):</strong></td>
                <td>{molecule.Clearance_Hepatocyte_AZ != null ? molecule.Clearance_Hepatocyte_AZ.toFixed(3) + ' uL/min/10⁶ cells' : '-'}</td>
              </tr>
              <tr>
                <td><strong>Drug Clearance (Microsome):</strong></td>
                <td>{molecule.Clearance_Microsome_AZ != null ? molecule.Clearance_Microsome_AZ.toFixed(3) + ' uL/min/mg' : '-'}</td>
              </tr>
              <tr>
                <th colspan="2"><strong>Toxicity:</strong></th>
              </tr>
              
              
              
              
              <tr>
                <td><strong>Carcinogenicity:</strong></td>
                <td>{molecule.Carcinogens_Lagunin != null ? molecule.Carcinogens_Lagunin.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Clinical Toxicity:</strong></td>
                <td>{molecule.ClinTox != null ? molecule.ClinTox.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Drug Induced Liver Injury:</strong></td>
                <td>{molecule.DILI != null ? molecule.DILI.toFixed(3) : '-'}</td>
              </tr>
              
              <tr>
                <td><strong>Androgen Receptor (Ligand Binding Domain):</strong></td>
                <td>{molecule.NR_AR_LBD != null ? molecule.NR_AR_LBD.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Androgen Receptor (Full Length):</strong></td>
                <td>{molecule.NR_AR != null ? molecule.NR_AR.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Aryl Hydrocarbon Receptor:</strong></td>
                <td>{molecule.NR_AhR != null ? molecule.NR_AhR.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Aromatase:</strong></td>
                <td>{molecule.NR_Aromatase != null ? molecule.NR_Aromatase.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Estrogen Receptor (Ligand Binding Domain):</strong></td>
                <td>{molecule.NR_ER_LBD != null ? molecule.NR_ER_LBD.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Estrogen Receptor (Full Length):</strong></td>
                <td>{molecule.NR_ER != null ? molecule.NR_ER.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Peroxisome Proliferator-Activated Receptor Gamma:</strong></td>
                <td>{molecule.NR_PPAR_gamma != null ? molecule.NR_PPAR_gamma.toFixed(3) : '-'}</td>
              </tr>
              
              <tr>
                <td><strong>Nuclear Factor (Erythroid-Derived 2)-Like 2/Antioxidant Responsive Element:</strong></td>
                <td>{molecule.SR_ARE != null ? molecule.SR_ARE.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>ATPase Family AAA Domain-Containing Protein 5 (ATAD5):</strong></td>
                <td>{molecule.SR_ATAD5 != null ? molecule.SR_ATAD5.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Heat Shock Factor Response Element:</strong></td>
                <td>{molecule.SR_HSE != null ? molecule.SR_HSE.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Mitochondrial Membrane Potential:</strong></td>
                <td>{molecule.SR_MMP != null ? molecule.SR_MMP.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Tumor Protein p53:</strong></td>
                <td>{molecule.SR_p53 != null ? molecule.SR_p53.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Skin Reaction:</strong></td>
                <td>{molecule.Skin_Reaction != null ? molecule.Skin_Reaction.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>hERG Blocking:</strong></td>
                <td>{molecule.hERG != null ? molecule.hERG.toFixed(3) : '-'}</td>
              </tr>
              <tr>
                <td><strong>Acute Toxicity LD50:</strong></td>
                <td>{molecule.LD50_Zhu != null ? molecule.LD50_Zhu.toFixed(3) + ' log (1/(mol/kg))' : '-'}</td>
              </tr>
              
              
              
              
            </tbody>
        </table>   

        <h3 id="percentile-data">Drugbank Approved Percentile Data</h3>
        <table className="md-table">
              <tbody>
                <tr>
                  <td><strong>Lipinski:</strong></td>
                  <td>{molecule.Lipinski_drugbank_approved_percentile != null ? molecule.Lipinski_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <th colspan="2"><strong>Absorption:</strong></th>
                </tr>
                <tr>
                  <td><strong>Mutagenicity:</strong></td>
                  <td>{molecule.AMES_drugbank_approved_percentile != null ? molecule.AMES_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Human Intestinal Absorption:</strong></td>
                  <td>{molecule.HIA_Hou_drugbank_approved_percentile != null ? molecule.HIA_Hou_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Oral Bioavailability:</strong></td>
                  <td>{molecule.Bioavailability_Ma_drugbank_approved_percentile != null ? molecule.Bioavailability_Ma_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Aqueous Solubility:</strong></td>
                  <td>{molecule.Solubility_AqSolDB_drugbank_approved_percentile != null ? molecule.Solubility_AqSolDB_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Lipophilicity:</strong></td>
                  <td>{molecule.Lipophilicity_AstraZeneca_drugbank_approved_percentile != null ? molecule.Lipophilicity_AstraZeneca_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Hydration Free Energy:</strong></td>
                  <td>{molecule.HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile != null ? molecule.HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Cell Effective Permeability:</strong></td>
                  <td>{molecule.Caco2_Wang_drugbank_approved_percentile != null ? molecule.Caco2_Wang_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>PAMPA Permeability:</strong></td>
                  <td>{molecule.PAMPA_NCATS_drugbank_approved_percentile != null ? molecule.PAMPA_NCATS_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>P-glycoprotein Inhibition:</strong></td>
                  <td>{molecule.Pgp_Broccatelli_drugbank_approved_percentile != null ? molecule.Pgp_Broccatelli_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <th colspan="2"><strong>Distribution:</strong></th>
                </tr>
                <tr>
                  <td><strong>Blood-Brain Barrier Penetration:</strong></td>
                  <td>{molecule.BBB_Martins_drugbank_approved_percentile != null ? molecule.BBB_Martins_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Plasma Protein Binding Rate:</strong></td>
                  <td>{molecule.PPBR_AZ_drugbank_approved_percentile != null ? molecule.PPBR_AZ_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Volume of Distribution at Steady State:</strong></td>
                  <td>{molecule.VDss_Lombardo_drugbank_approved_percentile != null ? molecule.VDss_Lombardo_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <th colspan="2"><strong>Metabolism:</strong></th>
                </tr>
                <tr>
                  <td><strong>CYP1A2 Inhibition:</strong></td>
                  <td>{molecule.CYP1A2_Veith_drugbank_approved_percentile != null ? molecule.CYP1A2_Veith_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP2C19 Inhibition:</strong></td>
                  <td>{molecule.CYP2C19_Veith_drugbank_approved_percentile != null ? molecule.CYP2C19_Veith_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP2C9 Inhibition:</strong></td>
                  <td>{molecule.CYP2C9_Veith_drugbank_approved_percentile != null ? molecule.CYP2C9_Veith_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP2D6 Inhibition:</strong></td>
                  <td>{molecule.CYP2D6_Veith_drugbank_approved_percentile != null ? molecule.CYP2D6_Veith_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP3A4 Inhibition:</strong></td>
                  <td>{molecule.CYP3A4_Veith_drugbank_approved_percentile != null ? molecule.CYP3A4_Veith_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP2C9 Substrate:</strong></td>
                  <td>{molecule.CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile != null ? molecule.CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP2D6 Substrate:</strong></td>
                  <td>{molecule.CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile != null ? molecule.CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>CYP3A4 Substrate:</strong></td>
                  <td>{molecule.CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile != null ? molecule.CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <th colspan="2"><strong>Excretion:</strong></th>
                </tr>
                <tr>
                  <td><strong>Half Life:</strong></td>
                  <td>{molecule.Half_Life_Obach_drugbank_approved_percentile != null ? molecule.Half_Life_Obach_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Drug Clearance (Hepatocyte):</strong></td>
                  <td>{molecule.Clearance_Hepatocyte_AZ_drugbank_approved_percentile != null ? molecule.Clearance_Hepatocyte_AZ_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Drug Clearance (Microsome):</strong></td>
                  <td>{molecule.Clearance_Microsome_AZ_drugbank_approved_percentile != null ? molecule.Clearance_Microsome_AZ_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <th colspan="2"><strong>Toxicity:</strong></th>
                </tr>
                <tr>
                  <td><strong>hERG Blocking:</strong></td>
                  <td>{molecule.hERG_drugbank_approved_percentile != null ? molecule.hERG_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Clinical Toxicity:</strong></td>
                  <td>{molecule.ClinTox_drugbank_approved_percentile != null ? molecule.ClinTox_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Carcinogenicity:</strong></td>
                  <td>{molecule.Carcinogens_Lagunin_drugbank_approved_percentile != null ? molecule.Carcinogens_Lagunin_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Drug Induced Liver Injury:</strong></td>
                  <td>{molecule.DILI_drugbank_approved_percentile != null ? molecule.DILI_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Acute Toxicity LD50:</strong></td>
                  <td>{molecule.LD50_Zhu_drugbank_approved_percentile != null ? molecule.LD50_Zhu_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Skin Reaction:</strong></td>
                  <td>{molecule.Skin_Reaction_drugbank_approved_percentile != null ? molecule.Skin_Reaction_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Androgen Receptor (Full Length):</strong></td>
                  <td>{molecule.NR_AR_drugbank_approved_percentile != null ? molecule.NR_AR_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Androgen Receptor (Ligand Binding Domain):</strong></td>
                  <td>{molecule.NR_AR_LBD_drugbank_approved_percentile != null ? molecule.NR_AR_LBD_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Aryl Hydrocarbon Receptor:</strong></td>
                  <td>{molecule.NR_AhR_drugbank_approved_percentile != null ? molecule.NR_AhR_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Aromatase:</strong></td>
                  <td>{molecule.NR_Aromatase_drugbank_approved_percentile != null ? molecule.NR_Aromatase_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Estrogen Receptor (Full Length):</strong></td>
                  <td>{molecule.NR_ER_drugbank_approved_percentile != null ? molecule.NR_ER_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Estrogen Receptor (Ligand Binding Domain):</strong></td>
                  <td>{molecule.NR_ER_LBD_drugbank_approved_percentile != null ? molecule.NR_ER_LBD_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Peroxisome Proliferator-Activated Receptor Gamma:</strong></td>
                  <td>{molecule.NR_PPAR_gamma_drugbank_approved_percentile != null ? molecule.NR_PPAR_gamma_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Nuclear Factor (Erythroid-Derived 2)-Like 2/Antioxidant Responsive Element:</strong></td>
                  <td>{molecule.SR_ARE_drugbank_approved_percentile != null ? molecule.SR_ARE_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>ATPase Family AAA Domain-Containing Protein 5 (ATAD5):</strong></td>
                  <td>{molecule.SR_ATAD5_drugbank_approved_percentile != null ? molecule.SR_ATAD5_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Heat Shock Factor Response Element:</strong></td>
                  <td>{molecule.SR_HSE_drugbank_approved_percentile != null ? molecule.SR_HSE_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Mitochondrial Membrane Potential:</strong></td>
                  <td>{molecule.SR_MMP_drugbank_approved_percentile != null ? molecule.SR_MMP_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
                <tr>
                  <td><strong>Tumor Protein p53:</strong></td>
                  <td>{molecule.SR_p53_drugbank_approved_percentile != null ? molecule.SR_p53_drugbank_approved_percentile.toFixed(3) + ' %' : '-'}</td>
                </tr>
              </tbody>
        </table>

            {error && <p className="md-error-message">{error}</p>}
        </div>
        {showGoToTop && (
          <button className="go-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default MoleculeDetails;