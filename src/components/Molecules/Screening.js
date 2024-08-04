import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tools.css';

const Screening = () => {
  const [criteria, setCriteria] = useState([
    { field: 'NR_ER_drugbank_approved_percentile', condition: '>', query: '', operator: 'and' },
  ]);
  const navigate = useNavigate();

  const addCriterion = () => {
    setCriteria([...criteria, { field: 'NR_ER_drugbank_approved_percentile', condition: '>', query: '', operator: 'and' }]);
  };

  const removeCriterion = (index) => {
    if (criteria.length > 1) {
      const newCriteria = [...criteria];
      newCriteria.splice(index, 1);
      setCriteria(newCriteria);
    }
  };

  const handleCriteriaChange = (index, field, value) => {
    const newCriteria = [...criteria];
    newCriteria[index][field] = value;
    setCriteria(newCriteria);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      skip: 0,
      limit: 300,
      conditions: criteria.map(criterion => ({
        field: criterion.field,
        value: isNaN(criterion.query) ? criterion.query.toLowerCase() : Number(criterion.query),
        operation: mapConditionToOperation(criterion.condition),
        operator: criterion.operator
      })),
      source: [],
      functional_group: []
    };
    console.log("Payload:", payload); // Debugging statement
    navigate('/pagination', { state: { payload } });
  };

  const mapConditionToOperation = (condition) => {
    switch (condition) {
      case '>': return 'greater';
      case '<': return 'lesser';
      case '=': return 'equal';
      case '!=': return 'notEqual';
      default: return 'equal';
    }
  };

  return (
    <div className="screening">
      <h2 className="title">Molecule Screening Tool</h2>
      <p className="description">
        Enter criteria for drugbank-approved percentile values to screen compounds. Please enter numbers from 0 to 100 since it is percentile data.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <table className="criteria-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Field</th>
              <th>Condition</th>
              <th>Query</th>
              <th>Operator</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, index) => (
              <tr key={index}>
                <td data-label="No.">{index + 1}</td>
                <td data-label="Field">
                  <select
                    value={criterion.field}
                    onChange={(e) => handleCriteriaChange(index, 'field', e.target.value)}
                  >
                    <option value="Lipinski_drugbank_approved_percentile">Lipinski</option>
                    <optgroup label="Absorption">
                      <option value="HIA_Hou_drugbank_approved_percentile">Human Intestinal Absorption</option>
                      <option value="Bioavailability_Ma_drugbank_approved_percentile">Oral Bioavailability</option>
                      <option value="Solubility_AqSolDB_drugbank_approved_percentile">Aqueous Solubility</option>
                      <option value="Lipophilicity_AstraZeneca_drugbank_approved_percentile">Lipophilicity</option>
                      <option value="HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile">Hydration Free Energy</option>
                      <option value="Caco2_Wang_drugbank_approved_percentile">Cell Effective Permeability</option>
                      <option value="PAMPA_NCATS_drugbank_approved_percentile">PAMPA Permeability</option>
                      <option value="Pgp_Broccatelli_drugbank_approved_percentile">P-glycoprotein Inhibition</option>
                    </optgroup>
                    <optgroup label="Distribution">
                      <option value="BBB_Martins_drugbank_approved_percentile">Blood-Brain Barrier Penetration</option>
                      <option value="PPBR_AZ_drugbank_approved_percentile">Plasma Protein Binding Rate</option>
                      <option value="VDss_Lombardo_drugbank_approved_percentile">Volume of Distribution at Steady State</option>
                    </optgroup>
                    <optgroup label="Metabolism">
                      <option value="CYP1A2_Veith_drugbank_approved_percentile">CYP1A2 Inhibition</option>
                      <option value="CYP2C19_Veith_drugbank_approved_percentile">CYP2C19 Inhibition</option>
                      <option value="CYP2C9_Veith_drugbank_approved_percentile">CYP2C9 Inhibition</option>
                      <option value="CYP2D6_Veith_drugbank_approved_percentile">CYP2D6 Inhibition</option>
                      <option value="CYP3A4_Veith_drugbank_approved_percentile">CYP3A4 Inhibition</option>
                      <option value="CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile">CYP2C9 Substrate</option>
                      <option value="CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile">CYP2D6 Substrate</option>
                      <option value="CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile">CYP3A4 Substrate</option>
                    </optgroup>
                    <optgroup label="Excretion">
                      <option value="Half_Life_Obach_drugbank_approved_percentile">Half Life</option>
                      <option value="Clearance_Hepatocyte_AZ_drugbank_approved_percentile">Drug Clearance (Hepatocyte)</option>
                      <option value="Clearance_Microsome_AZ_drugbank_approved_percentile">Drug Clearance (Microsome)</option>
                    </optgroup>
                    <optgroup label="Toxicity">
                      <option value="hERG_drugbank_approved_percentile">hERG Blocking</option>
                      <option value="ClinTox_drugbank_approved_percentile">Clinical Toxicity</option>
                      <option value="AMES_drugbank_approved_percentile">Mutagenicity</option>
                      <option value="DILI_drugbank_approved_percentile">Drug Induced Liver Injury</option>
                      <option value="Carcinogens_Lagunin_drugbank_approved_percentile">Carcinogenicity</option>
                      <option value="LD50_Zhu_drugbank_approved_percentile">Acute Toxicity LD50</option>
                      <option value="Skin_Reaction_drugbank_approved_percentile">Skin Reaction</option>
                      <option value="NR_AR_drugbank_approved_percentile">Androgen Receptor (Full Length)</option>
                      <option value="NR_AR_LBD_drugbank_approved_percentile">Androgen Receptor (Ligand Binding Domain)</option>
                      <option value="NR_AhR_drugbank_approved_percentile">Aryl Hydrocarbon Receptor</option>
                      <option value="NR_Aromatase_drugbank_approved_percentile">Aromatase</option>
                      <option value="NR_ER_drugbank_approved_percentile">Estrogen Receptor (Full Length)</option>
                      <option value="NR_ER_LBD_drugbank_approved_percentile">Estrogen Receptor (Ligand Binding Domain)</option>
                      <option value="NR_PPAR_gamma_drugbank_approved_percentile">Peroxisome Proliferator-Activated Receptor Gamma</option>
                      <option value="SR_ARE_drugbank_approved_percentile">Nuclear Factor (Erythroid-Derived 2)-Like 2/Antioxidant Responsive Element</option>
                      <option value="SR_ATAD5_drugbank_approved_percentile">ATPase Family AAA Domain-Containing Protein 5 (ATAD5)</option>
                      <option value="SR_HSE_drugbank_approved_percentile">Heat Shock Factor Response Element</option>
                      <option value="SR_MMP_drugbank_approved_percentile">Mitochondrial Membrane Potential</option>
                      <option value="SR_p53_drugbank_approved_percentile">Tumor Protein p53</option>
                    </optgroup>
                    </select>
                </td>
                <td data-label="Condition">
                  <select
                    value={criterion.condition}
                    onChange={(e) => handleCriteriaChange(index, 'condition', e.target.value)}
                  >
                    <option value="=">=</option>
                    <option value=">">&gt;</option>
                    <option value="<">&lt;</option>
                    <option value="!=">!=</option>
                  </select>
                </td>
                <td data-label="Query">
                  <input
                    type="text"
                    value={criterion.query}
                    onChange={(e) => handleCriteriaChange(index, 'query', e.target.value)}
                    placeholder="Enter query"
                  />
                </td>
                <td data-label="Operator">
                  <select
                    value={criterion.operator}
                    onChange={(e) => handleCriteriaChange(index, 'operator', e.target.value)}
                    disabled={index === criteria.length - 1}
                  >
                    <option value="and">AND</option>
                    <option value="or">OR</option>
                    <option value="not">NOT</option>
                  </select>
                </td>
                <td data-label="Add">
                  {index === criteria.length - 1 && (
                    <button type="button" onClick={addCriterion} className="add-remove-button">+</button>
                  )}
                </td>
                <td data-label="Remove">
                  {criteria.length > 1 && (
                    <button type="button" onClick={() => removeCriterion(index)} className="add-remove-button">-</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Screening;
