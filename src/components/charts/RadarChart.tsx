import React from 'react';

interface RadarChartProps {
  data: Array<{
    axis: string;
    value: number;
    category?: string;
  }>;
  width?: number;
  height?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  title?: string;
  maxValue?: number;
  fillColor?: string;
  strokeColor?: string;
}

const RadarChart: React.FC<RadarChartProps> = ({
  data,
  width = 500,
  height = 500,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
  title,
  maxValue = 10,
  fillColor = 'rgba(0, 122, 255, 0.2)',
  strokeColor = '#007AFF'
}) => {
  // In a real implementation, this would use D3.js or another charting library
  // For now, we'll create a placeholder component
  
  return (
    <div className="radar-chart-container" style={{ width, height }}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-placeholder" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        backgroundColor: '#f5f5f7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        position: 'relative'
      }}>
        <div className="chart-info">
          <p>Radar Chart: {title || 'Untitled'}</p>
          <p>Axes: {data.map(d => d.axis).join(', ')}</p>
          <p>Max Value: {maxValue}</p>
          <p>Data Points: {data.length}</p>
        </div>
        
        {/* Simulate axis labels around the radar chart */}
        {data.map((d, i) => {
          const angle = (Math.PI * 2 * i) / data.length;
          const x = Math.cos(angle - Math.PI / 2) * (width / 2 - 50) + width / 2;
          const y = Math.sin(angle - Math.PI / 2) * (height / 2 - 50) + height / 2;
          
          return (
            <div 
              key={i}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)',
                fontSize: '12px',
                color: '#1D1D1F',
                textAlign: 'center',
                width: '80px'
              }}
            >
              {d.axis}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadarChart;
