// AdvancedSearch.js
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './search.css'; // Import the new CSS file

const AdvancedSearch = () => {
    const [criteria, setCriteria] = useState([
        { field: 'Peptide Name', condition: '=', query: '', operator: 'AND' },
    ]);

    const addCriterion = () => {
        setCriteria([...criteria, { field: '', condition: '=', query: '', operator: 'AND' }]);
    };

    const removeCriterion = (index) => {
        const newCriteria = [...criteria];
        newCriteria.splice(index, 1);
        setCriteria(newCriteria);
    };

    const handleCriteriaChange = (index, field, value) => {
        const newCriteria = [...criteria];
        newCriteria[index][field] = value;
        setCriteria(newCriteria);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
    };

    return (
        <div>
            <div className="container-search">
                <h2 className="heading">Advanced Search</h2>
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
                                    <td>{index + 1}</td>
                                    <td>
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
                                    <td>
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
                                    <td>
                                        <input
                                            type="text"
                                            value={criterion.query}
                                            onChange={(e) => handleCriteriaChange(index, 'query', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <select
                                            value={criterion.operator}
                                            onChange={(e) => handleCriteriaChange(index, 'operator', e.target.value)}
                                        >
                                            <option value="AND">AND</option>
                                            <option value="OR">OR</option>
                                            <option value="NOT">NOT</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button type="button" onClick={addCriterion} className="add-remove-button">+</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => removeCriterion(index)} className="add-remove-button">-</button>
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
