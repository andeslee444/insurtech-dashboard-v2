import React from 'react';

interface PillSelectorProps {
  options: Array<{value: string, label: string}>;
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

const PillSelector: React.FC<PillSelectorProps> = ({ options, selectedValues, onChange }) => {
  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="pill-selector-container">
      {options.map((option) => (
        <button
          key={option.value}
          className={`pill-button ${selectedValues.includes(option.value) ? 'selected' : ''}`}
          onClick={() => toggleOption(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default PillSelector;
