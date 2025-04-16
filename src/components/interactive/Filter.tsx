import React from 'react';

interface FilterProps {
  label: string;
  options: Array<{value: string, label: string}>;
  onChange: (value: string) => void;
  value: string;
}

const Filter: React.FC<FilterProps> = ({ label, options, onChange, value }) => {
  return (
    <div className="filter-container">
      <label className="filter-label">{label}</label>
      <select 
        className="filter-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
