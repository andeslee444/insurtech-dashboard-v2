import React from 'react';

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  title?: string;
  color?: string;
  historicalValues?: number[];
  historicalLabels?: string[];
}

const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  min = 0,
  max = 100,
  width = 300,
  height = 200,
  title,
  color = '#007AFF',
  historicalValues = [],
  historicalLabels = []
}) => {
  // Calculate percentage for the gauge
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="gauge-chart-container" style={{ width, height }}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="gauge-placeholder" style={{ 
        width: '100%',
        height: height - 40,
        backgroundColor: '#f5f5f7',
        borderRadius: '100px 100px 0 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="gauge-value" style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          fontWeight: 'medium',
          color: '#1D1D1F'
        }}>
          {value.toFixed(1)}%
        </div>
        
        <div className="gauge-arc" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '100px 100px 0 0',
          background: `conic-gradient(
            ${color} 0% ${percentage / 2}%, 
            transparent ${percentage / 2}% 100%
          )`,
          transformOrigin: 'bottom center',
          transform: 'rotate(-90deg)'
        }} />
        
        {/* Historical reference points */}
        {historicalValues.map((histValue, index) => {
          const histPercentage = ((histValue - min) / (max - min)) * 100;
          const angle = (histPercentage / 100) * 180 - 90;
          const radians = (angle * Math.PI) / 180;
          const radius = height - 60;
          const x = radius * Math.cos(radians) + width / 2;
          const y = radius * Math.sin(radians) + height - 30;
          
          return (
            <div key={index} style={{
              position: 'absolute',
              left: `${x}px`,
              top: `${y}px`,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#8E8E93',
              transform: 'translate(-50%, -50%)'
            }}>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '10px',
                color: '#8E8E93',
                whiteSpace: 'nowrap'
              }}>
                {historicalLabels[index] || histValue.toFixed(1)}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="gauge-info" style={{
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '12px',
        color: '#8E8E93'
      }}>
        <span style={{ marginRight: '10px' }}>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default GaugeChart;
