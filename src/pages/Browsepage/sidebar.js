import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const AdvancedSearchSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    molwt: { min: 0, max: 1000 },
    logp: { min: -5, max: 10 },
    hba: { min: 0, max: 20 },
    hbd: { min: 0, max: 10 },
    carbon_count: { min: 0, max: 100 },
    amide_count: { min: 0, max: 20 },
    qed_score: { min: 0, max: 1 },
    TPSA: { min: 0, max: 500 },
    source: {
      Coconut: false,
      NPAtlas: false,
      ZINC: false,
      SuperNatural: false,
    },
    functional_groups: {
      Alcohol: false,
      Aldehyde: false,
      Ketone: false,
      Carboxylic_Acid: false,
      Amine: false,
      Thiol: false,
    },
  });

  const rangeConfigs = {
    molwt: { min: 0, max: 1000 },
    logp: { min: -5, max: 10 },
    hba: { min: 0, max: 20 },
    hbd: { min: 0, max: 10 },
    carbon_count: { min: 0, max: 100 },
    amide_count: { min: 0, max: 20 },
    qed_score: { min: 0, max: 1 },
    TPSA: { min: 0, max: 500 },
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleRangeChange = (name, minOrMax, value) => {
    const { min: rangeMin, max: rangeMax } = rangeConfigs[name];
    const totalRange = rangeMax - rangeMin;
    const minDistance = totalRange * 0.05; // 5% of the total range

    setFilters(prevFilters => {
      let newMin = minOrMax === 'min' ? parseFloat(value) : prevFilters[name].min;
      let newMax = minOrMax === 'max' ? parseFloat(value) : prevFilters[name].max;

      // Ensure the new value is within the allowed range
      newMin = Math.max(rangeMin, Math.min(newMin, rangeMax));
      newMax = Math.max(rangeMin, Math.min(newMax, rangeMax));

      // Enforce minimum distance
      if (newMax - newMin < minDistance) {
        if (minOrMax === 'min') {
          newMin = newMax - minDistance;
        } else {
          newMax = newMin + minDistance;
        }
      }

      return {
        ...prevFilters,
        [name]: { min: newMin, max: newMax },
      };
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const category = event.target.getAttribute('data-category');
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [name]: checked,
      },
    }));
  };

  const renderRangeSlider = (name, label, step = 1) => {
    const { min: rangeMin, max: rangeMax } = rangeConfigs[name];
    const totalRange = rangeMax - rangeMin;
    const minPercentage = ((filters[name].min - rangeMin) / totalRange) * 100;
    const maxPercentage = ((filters[name].max - rangeMin) / totalRange) * 100;

    return (
      <div className="filter-group">
        <label>{label}:</label>
        <div className="range-slider">
          <div className="slider-container">
            <input
              type="range"
              className="slider"
              min={rangeMin}
              max={rangeMax}
              step={step}
              value={filters[name].min}
              onChange={(e) => handleRangeChange(name, 'min', e.target.value)}
              style={{ zIndex: 2 }}
            />
            <input
              type="range"
              className="slider"
              min={rangeMin}
              max={rangeMax}
              step={step}
              value={filters[name].max}
              onChange={(e) => handleRangeChange(name, 'max', e.target.value)}
              style={{ zIndex: 2 }}
            />
            <div 
              className="slider-track" 
              style={{
                left: `${minPercentage}%`,
                width: `${maxPercentage - minPercentage}%`
              }}
            ></div>
          </div>
          <div className="range-values">
            <span className="range-value">{filters[name].min.toFixed(2)}</span>
            <span className="range-value">{filters[name].max.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  const applyFilters = () => {
    console.log('Filters applied:', filters);
    // Additional logic to apply filters
  };

  return (
    <div className="sidebar-container">
      <h2>Advanced Filters</h2>
      <div className="filter-group">
        <h3>Source</h3>
        {Object.keys(filters.source).map((source) => (
          <label key={source} className="select-all-checkbox">
            <input
              type="checkbox"
              name={source}
              data-category="source"
              checked={filters.source[source]}
              onChange={handleCheckboxChange}
            />
            {source}
          </label>
        ))}
      </div>
      
      <div className="filter-group">
        <h4>Lipinski Rule of Five</h4>
        {renderRangeSlider('molwt', 'Molecular Weight')}
        {renderRangeSlider('logp', 'LogP', 0.1)}
        {renderRangeSlider('hba', 'HBA')}
        {renderRangeSlider('hbd', 'HBD')}
      </div>
      
      <div className="filter-group">
        <h3>Functional Groups</h3>
        {Object.keys(filters.functional_groups).map((group) => (
          <label key={group} className="select-all-checkbox">
            <input
              type="checkbox"
              name={group}
              data-category="functional_groups"
              checked={filters.functional_groups[group]}
              onChange={handleCheckboxChange}
            />
            {group.replace('_', ' ')}
          </label>
        ))}
      </div>
       
      <div className="filter-group">
        <h3>Other filters</h3>
        {renderRangeSlider('carbon_count', 'Number of Carbon')}
        {renderRangeSlider('amide_count', 'Number of Amide Bonds')}
        {renderRangeSlider('qed_score', 'QED Score', 0.01)}
        {renderRangeSlider('TPSA', 'TPSA')}
      </div>
      <button onClick={applyFilters} className="filter-button">Apply Filters</button>
    </div>
  );
};

export default AdvancedSearchSidebar;
