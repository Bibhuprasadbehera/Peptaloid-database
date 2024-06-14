import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoleculeDetails.css';
import molecule4 from '../../images/molecule4.jpg';

const MoleculeDetails = () => {
  const location = useLocation();
  const { molecule } = location.state || { molecule: {} };

  const [showADMET, setShowADMET] = useState(false);
  const [showPercentiles, setShowPercentiles] = useState(false);

  return (
    <div className="molecule-container">
      <img src={molecule4} alt="Molecule" className="molecule-image" />
      <div className="molecule-details">
        <h2>{molecule.CompoundName}</h2>

        <h3>Basic Information</h3>
        <table>
          <tbody>
            <tr>
              <td><strong>Peptaloid ID:</strong></td>
              <td>{molecule.peptaloid_id}</td>
            </tr>
            <tr>
              <td><strong>Compound Name:</strong></td>
              <td>{molecule.CompoundName}</td>
            </tr>
            <tr>
              <td><strong>IUPAC Name:</strong></td>
              <td>{molecule.IUPACName}</td>
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
              <td>{molecule.Lipinsk}</td>
            </tr>
            <tr>
              <td><strong>SlogP:</strong></td>
              <td>{molecule.slogp}</td>
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
      </div>
    </div>
  );
};

export default MoleculeDetails;
