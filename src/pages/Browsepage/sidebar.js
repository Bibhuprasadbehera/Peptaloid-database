import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const AdvancedSearchSidebar = ({ onFilterChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState({
    Exact_MW: { min: 0, max: 5000 },
    SlogP: { min: -5, max: 10 },
    Num_HBA: { min: 0, max: 90 },
    Num_HBD: { min: 0, max: 80 },
    carbon_count: { min: 0, max: 219 },
    Num_Amide_Bonds: { min: 0, max: 60 },
    qed_score: { min: 0, max: 1 },
    TPSA: { min: 0, max: 2200 },
    source: {
      coconut: false,
      npatlas: false,
      zinc: false,
      supernatural: false,
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

  useEffect(() => {
    // Retrieve filters from location state if available
    if (location.state && location.state.filters) {
      setFilters(location.state.filters);
    }
  }, [location.state]);

  const sourceDisplayNames = {
    coconut: 'COCONUT',
    npatlas: 'NP Atlas',
    supernatural: 'SuperNatural',
    zinc: 'ZINC',
  };

  const rangeConfigs = {
    Exact_MW: { min: 0, max: 5000, label: 'Molecular Weight (Mol. Wt.)' },
    SlogP: { min: -5, max: 10, label: 'Octanol-Water Partition Coefficient (SLogP)' },
    Num_HBA: { min: 0, max: 90, label: 'Hydrogen Bond Acceptors (HBA)' },
    Num_HBD: { min: 0, max: 80, label: 'Hydrogen Bond Donors (HBD)' },
    carbon_count: { min: 0, max: 219, label: 'Number of Carbon Atoms' },
    Num_Amide_Bonds: { min: 0, max: 60, label: 'Number of Amide Bonds' },
    qed_score: { min: 0, max: 1, label: 'Quantitative Estimate of Druglikeness (QED)' },
    TPSA: { min: 0, max: 2200, label: 'Topological Polar Surface Area (TPSA)' },
  };

  const handleRangeChange = (name, minOrMax, value) => {
    const { min: rangeMin, max: rangeMax } = rangeConfigs[name];
    const totalRange = rangeMax - rangeMin;
    const minDistance = totalRange * 0.05;

    setFilters(prevFilters => {
      let newMin = minOrMax === 'min' ? parseFloat(value) : prevFilters[name].min;
      let newMax = minOrMax === 'max' ? parseFloat(value) : prevFilters[name].max;

      newMin = Math.max(rangeMin, Math.min(newMin, rangeMax));
      newMax = Math.max(rangeMin, Math.min(newMax, rangeMax));

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

  const handleTextChange = (name, minOrMax, value) => {
    if (!isNaN(value)) {
      handleRangeChange(name, minOrMax, value);
    }
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

  const renderRangeSlider = (name, step = 1) => {
    const { min: rangeMin, max: rangeMax, label } = rangeConfigs[name];
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
            <input 
              type="text" 
              className="range-input" 
              value={filters[name].min} 
              onChange={(e) => handleTextChange(name, 'min', e.target.value)} 
            />
            <input 
              type="text" 
              className="range-input" 
              value={filters[name].max} 
              onChange={(e) => handleTextChange(name, 'max', e.target.value)} 
            />
          </div>
        </div>
      </div>
    );
  };

  const applyFilters = () => {
    const conditions = [];

    Object.entries(rangeConfigs).forEach(([key, config]) => {
      const { min, max } = filters[key];
      if (min > config.min) {
        conditions.push({
          field: key,
          value: min,
          operation: 'greater',
          operator: 'and'
        });
      }
      if (max < config.max) {
        conditions.push({
          field: key,
          value: max,
          operation: 'lesser',
          operator: 'and'
        });
      }
    });

    const selectedSources = Object.entries(filters.source)
      .filter(([_, isSelected]) => isSelected)
      .map(([source]) => source);

    const selectedFunctionalGroups = Object.entries(filters.functional_groups)
      .filter(([_, isSelected]) => isSelected)
      .map(([group]) => group);

    const payload = {
      skip: 0,
      limit: 300,
      conditions,
      source: selectedSources,
      functional_group: selectedFunctionalGroups
    };

    console.log('Payload:', payload);
    onFilterChange(filters);
    navigate('/pagination', { state: { payload, filters } });
  };

  return (
    <div className="sidebar-container">
      <h2 style={{ fontSize: '24px', color: '#eb567b' }}>Advanced Filters</h2>
      <hr style={{ border: '1px solid #5e4379' }} />
      <div className="filter-group">
        <h3>Data Collection</h3>
        {Object.keys(filters.source).map((source) => (
          <label key={source} className="select-all-checkbox">
            <input
              type="checkbox"
              name={source}
              data-category="source"
              checked={filters.source[source]}
              onChange={handleCheckboxChange}
            />
            {sourceDisplayNames[source]}
          </label>
        ))}
      </div>
      
      <div className="filter-group">
        <h3>Lipinski Rule of Five</h3>
        {renderRangeSlider('Exact_MW')}
        {renderRangeSlider('SlogP', 0.1)}
        {renderRangeSlider('Num_HBA')}
        {renderRangeSlider('Num_HBD')}
      </div>
      
      <div className="filter-group">
        <h3>Presence of Functional Groups</h3>
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
        {renderRangeSlider('carbon_count')}
        {renderRangeSlider('Num_Amide_Bonds')}
        {renderRangeSlider('qed_score', 0.01)}
        {renderRangeSlider('TPSA')}
      </div>
      <button onClick={applyFilters} className="filter-button">Apply Filters</button>
    </div>
  );
};

export default AdvancedSearchSidebar;