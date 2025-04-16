import React from 'react';

interface USMapProps {
  data: Array<{
    state: string;
    value: number;
    label?: string;
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
  colorScale?: string[];
  minValue?: number;
  maxValue?: number;
  valueFormat?: (value: number) => string;
  onStateClick?: (state: string, value: number) => void;
}

const USMap: React.FC<USMapProps> = ({
  data,
  width = 900,
  height = 500,
  margin = { top: 20, right: 20, bottom: 20, left: 20 },
  title,
  colorScale = ['#E5F5FF', '#CCE9FF', '#99D1FF', '#66BAFF', '#007AFF'],
  minValue = 0,
  maxValue = 25,
  valueFormat = (value) => `${value.toFixed(1)}%`,
  onStateClick
}) => {
  // In a real implementation, this would use D3.js and a GeoJSON map of the US
  // For now, we'll create a placeholder component
  
  return (
    <div className="us-map-container" style={{ width, height }}>
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="map-placeholder" style={{ 
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
        <div className="map-info">
          <p>US Map: {title || 'Untitled'}</p>
          <p>States with data: {data.length}</p>
          <p>Value Range: {valueFormat(minValue)} to {valueFormat(maxValue)}</p>
        </div>
        
        {/* Color legend */}
        <div className="color-legend" style={{ position: 'absolute', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span style={{ fontSize: '10px', marginRight: '5px' }}>{valueFormat(minValue)}</span>
            <div style={{ display: 'flex', height: '10px', width: '100px' }}>
              {colorScale.map((color, i) => (
                <div key={i} style={{ backgroundColor: color, height: '100%', flex: 1 }}></div>
              ))}
            </div>
            <span style={{ fontSize: '10px', marginLeft: '5px' }}>{valueFormat(maxValue)}</span>
          </div>
          <div style={{ fontSize: '10px', color: '#8E8E93' }}>
            E&S Market Penetration
          </div>
        </div>
      </div>
    </div>
  );
};

export default USMap;
