import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './search.css'; // Import the new CSS file

const AdvancedSearch = () => {
    const [criteria, setCriteria] = useState([
        { field: 'Peptide Name', condition: '=', query: '', operator: 'AND' },
    ]);

    const addCriterion = () => {
        setCriteria([...criteria, { field: 'Peptide Name', condition: '=', query: '', operator: 'AND' }]);
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
        // Handle form submission logic
        console.log(criteria);
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
                                            <option value="Peptide Name">Peptide Name</option>
                                            <option value="Peptide Sequence">Peptide Sequence</option>
                                            <option value="Length">Length</option>
                                            <option value="Linear/Cyclic">Linear/Cyclic</option>
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
                                            disabled={index === criteria.length - 1} // Disable operator for last row
                                        >
                                            <option value="AND">AND</option>
                                            <option value="OR">OR</option>
                                            <option value="NOT">NOT</option>
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
            <Footer />
        </div>
    );
};

export default AdvancedSearch;
