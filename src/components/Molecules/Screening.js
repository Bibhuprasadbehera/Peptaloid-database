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
      limit: 30,
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
                    <option value="AMES_drugbank_approved_percentile">AMES</option>
                    <option value="BBB_Martins_drugbank_approved_percentile">BBB Martins</option>
                    <option value="Bioavailability_Ma_drugbank_approved_percentile">Bioavailability Ma</option>
                    <option value="CYP1A2_Veith_drugbank_approved_percentile">CYP1A2 Veith</option>
                    <option value="CYP2C19_Veith_drugbank_approved_percentile">CYP2C19 Veith</option>
                    <option value="CYP2C9_Substrate_CarbonMangels_drugbank_approved_percentile">CYP2C9 Substrate CarbonMangels</option>
                    <option value="CYP2C9_Veith_drugbank_approved_percentile">CYP2C9 Veith</option>
                    <option value="CYP2D6_Substrate_CarbonMangels_drugbank_approved_percentile">CYP2D6 Substrate CarbonMangels</option>
                    <option value="CYP2D6_Veith_drugbank_approved_percentile">CYP2D6 Veith</option>
                    <option value="CYP3A4_Substrate_CarbonMangels_drugbank_approved_percentile">CYP3A4 Substrate CarbonMangels</option>
                    <option value="CYP3A4_Veith_drugbank_approved_percentile">CYP3A4 Veith</option>
                    <option value="Carcinogens_Lagunin_drugbank_approved_percentile">Carcinogens Lagunin</option>
                    <option value="ClinTox_drugbank_approved_percentile">ClinTox</option>
                    <option value="DILI_drugbank_approved_percentile">DILI</option>
                    <option value="HIA_Hou_drugbank_approved_percentile">HIA Hou</option>
                    <option value="NR_AR_LBD_drugbank_approved_percentile">NR AR LBD</option>
                    <option value="NR_AR_drugbank_approved_percentile">NR AR</option>
                    <option value="NR_AhR_drugbank_approved_percentile">NR AhR</option>
                    <option value="NR_Aromatase_drugbank_approved_percentile">NR Aromatase</option>
                    <option value="NR_ER_LBD_drugbank_approved_percentile">NR ER LBD</option>
                    <option value="NR_ER_drugbank_approved_percentile">NR ER</option>
                    <option value="NR_PPAR_gamma_drugbank_approved_percentile">NR PPAR gamma</option>
                    <option value="PAMPA_NCATS_drugbank_approved_percentile">PAMPA NCATS</option>
                    <option value="Pgp_Broccatelli_drugbank_approved_percentile">Pgp Broccatelli</option>
                    <option value="SR_ARE_drugbank_approved_percentile">SR ARE</option>
                    <option value="SR_ATAD5_drugbank_approved_percentile">SR ATAD5</option>
                    <option value="SR_HSE_drugbank_approved_percentile">SR HSE</option>
                    <option value="SR_MMP_drugbank_approved_percentile">SR MMP</option>
                    <option value="SR_p53_drugbank_approved_percentile">SR p53</option>
                    <option value="Skin_Reaction_drugbank_approved_percentile">Skin Reaction</option>
                    <option value="hERG_drugbank_approved_percentile">hERG</option>
                    <option value="Caco2_Wang_drugbank_approved_percentile">Caco2 Wang</option>
                    <option value="Clearance_Hepatocyte_AZ_drugbank_approved_percentile">Clearance Hepatocyte AZ</option>
                    <option value="Clearance_Microsome_AZ_drugbank_approved_percentile">Clearance Microsome AZ</option>
                    <option value="Half_Life_Obach_drugbank_approved_percentile">Half Life Obach</option>
                    <option value="HydrationFreeEnergy_FreeSolv_drugbank_approved_percentile">HydrationFreeEnergy FreeSolv</option>
                    <option value="LD50_Zhu_drugbank_approved_percentile">LD50 Zhu</option>
                    <option value="Lipophilicity_AstraZeneca_drugbank_approved_percentile">Lipophilicity AstraZeneca</option>
                    <option value="PPBR_AZ_drugbank_approved_percentile">PPBR AZ</option>
                    <option value="Solubility_AqSolDB_drugbank_approved_percentile">Solubility AqSolDB</option>
                    <option value="VDss_Lombardo_drugbank_approved_percentile">VDss Lombardo</option>
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
