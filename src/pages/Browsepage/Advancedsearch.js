import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import './advsearch.css';

const AdvancedSearch = () => {
    const [criteria, setCriteria] = useState([
        { field: 'carbon_count', condition: '>', query: '', operator: 'and' },
    ]);
    const navigate = useNavigate();

    const addCriterion = () => {
        setCriteria([...criteria, { field: 'carbon_count', condition: '>', query: '', operator: 'and' }]);
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
        console.log(payload);
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
        <div>
            <div className="container-search">
                <h2 className="heading">Advanced Search</h2>
                <p>Use the advanced search feature to refine your search results. You can add multiple search criteria and specify the logical operator between them.</p>
                <form onSubmit={handleSubmit}>
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
                                            <optgroup label="Physical Properties">
                                                <option value="carbon_count">Carbon Count</option>
                                                <option value="Exact_MW">Exact MW</option>
                                                <option value="Num_Atoms">Number of Atoms</option>
                                                <option value="Num_Heavy_Atoms">Number of Heavy Atoms</option>
                                                <option value="Num_Hetero_Atoms">Number of Hetero Atoms</option>
                                                <option value="Num_StereoCenters">Number of StereoCenters</option>
                                            </optgroup>
                                            <optgroup label="Chemical Properties">
                                                <option value="SlogP">SlogP</option>
                                                <option value="TPSA">TPSA</option>
                                                <option value="CX_LogP">CX LogP</option>
                                                <option value="CX_LogD">CX LogD</option>
                                                <option value="Heavy_Atoms">Heavy Atoms</option>
                                                <option value="Lipinski">Lipinski</option>
                                                <option value="total_charge">Total Charge</option>
                                                <option value="qed_score">QED Score</option>
                                            </optgroup>
                                            <optgroup label="Functional Groups">
                                                <option value="Alcohol">Alcohol</option>
                                                <option value="Aldehyde">Aldehyde</option>
                                                <option value="Ketone">Ketone</option>
                                                <option value="Carboxylic_Acid">Carboxylic Acid</option>
                                                <option value="Amine">Amine</option>
                                                <option value="Thiol">Thiol</option>
                                            </optgroup>
                                            <optgroup label="Bond Types">
                                                <option value="Num_Rotatable_Bonds">Number of Rotatable Bonds</option>
                                                <option value="Num_HBD">Number of HBD</option>
                                                <option value="Num_HBA">Number of HBA</option>
                                                <option value="Num_Amide_Bonds">Number of Amide Bonds</option>
                                            </optgroup>
                                            <optgroup label="Ring Types">
                                                <option value="Num_Aromatic_Rings">Number of Aromatic Rings</option>
                                                <option value="Num_Saturated_Rings">Number of Saturated Rings</option>
                                                <option value="Num_Aliphatic_Rings">Number of Aliphatic Rings</option>
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
                    <button type="submit" className="search-button">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AdvancedSearch;