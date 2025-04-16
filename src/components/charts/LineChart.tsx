import React from 'react';

interface LineChartProps {
  data: Array<{
    time: string;
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
  xAxisLabel?: string;
  yAxisLabel?: string;
  title?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  width = 800,
  height = 400,
  margin = { top: 20, right: 30, bottom: 50, left: 60 },
  xAxisLabel = 'Time',
  yAxisLabel = 'Value',
  title
}) => {
  // In a real implementation, this would use D3.js or another charting library
  // For now, we'll create a placeholder component
  
  return (
    <div className="line-chart-container" style={{ width, height }}>
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
        borderRadius: '4px'
      }}>
        <div className="chart-info">
          <p>Line Chart: {title || 'Untitled'}</p>
          <p>X-Axis: {xAxisLabel}</p>
          <p>Y-Axis: {yAxisLabel}</p>
          <p>Data Points: {data.length}</p>
        </div>
      </div>
      <div className="axis-labels">
        <div className="x-axis-label" style={{ 
          textAlign: 'center', 
          marginTop: '10px',
          fontSize: '12px',
          fontWeight: 'normal',
          color: '#1D1D1F'
        }}>
          {xAxisLabel}
        </div>
        <div className="y-axis-label" style={{ 
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'rotate(-90deg) translateX(50%)',
          transformOrigin: 'left top',
          fontSize: '12px',
          fontWeight: 'normal',
          color: '#1D1D1F'
        }}>
          {yAxisLabel}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
