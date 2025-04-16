import React from 'react';

interface BubbleChartProps {
  data: Array<{
    id: string;
    x: number;
    y: number;
    size: number;
    label: string;
    category?: string;
    color?: string;
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
  sizeScale?: [number, number]; // [min, max] bubble size in pixels
  colorScheme?: string[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({
  data,
  width = 800,
  height = 500,
  margin = { top: 20, right: 20, bottom: 50, left: 60 },
  xAxisLabel = 'X Axis',
  yAxisLabel = 'Y Axis',
  title,
  sizeScale = [10, 50],
  colorScheme = ['#007AFF', '#5AC8FA', '#34C759', '#FF9500', '#FF2D55']
}) => {
  // In a real implementation, this would use D3.js or another charting library
  // For now, we'll create a placeholder component
  
  return (
    <div className="bubble-chart-container" style={{ width, height }}>
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
        borderRadius: '4px',
        position: 'relative'
      }}>
        <div className="chart-info">
          <p>Bubble Chart: {title || 'Untitled'}</p>
          <p>X-Axis: {xAxisLabel}</p>
          <p>Y-Axis: {yAxisLabel}</p>
          <p>Data Points: {data.length}</p>
          <p>Bubble Size Range: {sizeScale[0]}px - {sizeScale[1]}px</p>
        </div>
        
        {/* Simulate a few bubbles */}
        {data.slice(0, 5).map((item, i) => {
          // Calculate relative positions
          const xPos = margin.left + (item.x / 100) * (width - margin.left - margin.right);
          const yPos = margin.top + (item.y / 100) * (height - margin.top - margin.bottom);
          const size = sizeScale[0] + (item.size / 100) * (sizeScale[1] - sizeScale[0]);
          const color = colorScheme[i % colorScheme.length];
          
          return (
            <div 
              key={item.id}
              style={{
                position: 'absolute',
                left: `${xPos}px`,
                top: `${yPos}px`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: `${color}33`, // Add transparency
                border: `1px solid ${color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: `${Math.max(10, size / 4)}px`,
                color: '#1D1D1F',
                transform: 'translate(-50%, -50%)',
                zIndex: Math.floor(item.size)
              }}
            >
              {size > 30 ? item.label : ''}
            </div>
          );
        })}
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

export default BubbleChart;
