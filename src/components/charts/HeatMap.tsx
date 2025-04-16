import React from 'react';

interface HeatMapProps {
  data: Array<{
    x: string;
    y: string;
    value: number;
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
  colorScale?: string[];
  minValue?: number;
  maxValue?: number;
}

const HeatMap: React.FC<HeatMapProps> = ({
  data,
  width = 800,
  height = 500,
  margin = { top: 20, right: 30, bottom: 50, left: 100 },
  xAxisLabel = 'X Axis',
  yAxisLabel = 'Y Axis',
  title,
  colorScale = ['#E5F5FF', '#CCE9FF', '#99D1FF', '#66BAFF', '#007AFF'],
  minValue = 0,
  maxValue = 10
}) => {
  // Get unique x and y values
  const xValues = Array.from(new Set(data.map(d => d.x)));
  const yValues = Array.from(new Set(data.map(d => d.y)));
  
  // Calculate cell dimensions
  const cellWidth = (width - margin.left - margin.right) / xValues.length;
  const cellHeight = (height - margin.top - margin.bottom) / yValues.length;
  
  return (
    <div className="heat-map-container" style={{ width, height }}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-placeholder" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        backgroundColor: '#f5f5f7',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        position: 'relative'
      }}>
        <div className="chart-info" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <p>Heat Map: {title || 'Untitled'}</p>
          <p>X-Axis: {xAxisLabel} ({xValues.length} categories)</p>
          <p>Y-Axis: {yAxisLabel} ({yValues.length} categories)</p>
          <p>Data Points: {data.length}</p>
          <p>Value Range: {minValue} to {maxValue}</p>
        </div>
        
        {/* Y-axis labels */}
        <div className="y-axis-labels" style={{ position: 'absolute', left: -90, top: 0, height: '100%' }}>
          {yValues.map((y, i) => (
            <div 
              key={i} 
              style={{
                position: 'absolute',
                left: 0,
                top: i * cellHeight + cellHeight / 2,
                transform: 'translateY(-50%)',
                fontSize: '12px',
                color: '#1D1D1F',
                textAlign: 'right',
                width: '80px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {y}
            </div>
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="x-axis-labels" style={{ position: 'absolute', bottom: -30, left: 0, width: '100%' }}>
          {xValues.map((x, i) => (
            <div 
              key={i} 
              style={{
                position: 'absolute',
                bottom: 0,
                left: i * cellWidth + cellWidth / 2,
                transform: 'translateX(-50%)',
                fontSize: '12px',
                color: '#1D1D1F',
                textAlign: 'center',
                width: cellWidth,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {x}
            </div>
          ))}
        </div>
        
        {/* Color legend */}
        <div className="color-legend" style={{ position: 'absolute', top: -15, right: 0, display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', marginRight: '5px' }}>{minValue}</span>
          <div style={{ display: 'flex', height: '10px', width: '100px' }}>
            {colorScale.map((color, i) => (
              <div key={i} style={{ backgroundColor: color, height: '100%', flex: 1 }}></div>
            ))}
          </div>
          <span style={{ fontSize: '10px', marginLeft: '5px' }}>{maxValue}</span>
        </div>
      </div>
      <div className="axis-labels">
        <div className="x-axis-label" style={{ 
          textAlign: 'center', 
          marginTop: '30px',
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

export default HeatMap;
