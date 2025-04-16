import React from 'react';

interface SliderFilterProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const SliderFilter: React.FC<SliderFilterProps> = ({ 
  label, 
  min, 
  max, 
  step, 
  value, 
  onChange 
}) => {
  return (
    <div className="slider-filter-container">
      <label className="slider-label">{label}</label>
      <div className="slider-control">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input"
        />
        <div className="slider-value">{value}</div>
      </div>
    </div>
  );
};

export default SliderFilter;
