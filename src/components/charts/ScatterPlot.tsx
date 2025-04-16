import React from 'react';

interface ScatterPlotProps {
  data: Array<{
    x: number;
    y: number;
    size?: number;
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
  quadrants?: boolean;
  quadrantLabels?: [string, string, string, string]; // [top-right, top-left, bottom-left, bottom-right]
}

const ScatterPlot: React.FC<ScatterPlotProps> = ({
  data,
  width = 800,
  height = 400,
  margin = { top: 20, right: 30, bottom: 50, left: 60 },
  xAxisLabel = 'X Axis',
  yAxisLabel = 'Y Axis',
  title,
  quadrants = false,
  quadrantLabels = ['High Growth / High Penetration', 'Low Growth / High Penetration', 'Low Growth / Low Penetration', 'High Growth / Low Penetration']
}) => {
  // In a real implementation, this would use D3.js or another charting library
  // For now, we'll create a placeholder component
  
  return (
    <div className="scatter-plot-container" style={{ width, height }}>
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
          <p>Scatter Plot: {title || 'Untitled'}</p>
          <p>X-Axis: {xAxisLabel}</p>
          <p>Y-Axis: {yAxisLabel}</p>
          <p>Data Points: {data.length}</p>
          {quadrants && <p>Quadrants: Enabled</p>}
        </div>
        
        {quadrants && (
          <div className="quadrant-labels" style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: '10%', right: '10%', fontSize: '10px', color: '#1D1D1F', opacity: 0.7 }}>
              {quadrantLabels[0]}
            </div>
            <div style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '10px', color: '#1D1D1F', opacity: 0.7 }}>
              {quadrantLabels[1]}
            </div>
            <div style={{ position: 'absolute', bottom: '10%', left: '10%', fontSize: '10px', color: '#1D1D1F', opacity: 0.7 }}>
              {quadrantLabels[2]}
            </div>
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', fontSize: '10px', color: '#1D1D1F', opacity: 0.7 }}>
              {quadrantLabels[3]}
            </div>
          </div>
        )}
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

export default ScatterPlot;
