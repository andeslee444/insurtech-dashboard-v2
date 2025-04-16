import React from 'react';
import { opportunityData } from '../../data/mockData';
import gapAnalysis from '../../utils/gapAnalysis';

interface WhiteSpaceIdentifierProps {
  width?: number;
  height?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  title?: string;
  onOpportunitySelect?: (opportunity: string) => void;
}

const WhiteSpaceIdentifier: React.FC<WhiteSpaceIdentifierProps> = ({
  width = 800,
  height = 600,
  margin = { top: 50, right: 50, bottom: 50, left: 150 },
  title = 'White Space Identifier',
  onOpportunitySelect
}) => {
  // Get white spaces data
  const whiteSpaces = gapAnalysis.identifyWhiteSpaces();
  
  // Calculate cell dimensions
  const cellWidth = (width - margin.left - margin.right) / 5; // 5 technology solution categories
  const cellHeight = (height - margin.top - margin.bottom) / whiteSpaces.length;
  
  // Define market needs and technology solutions
  const marketNeeds = whiteSpaces.map(ws => ws.marketNeed);
  const techSolutions = ['AI/ML', 'Data Analytics', 'API Integration', 'Blockchain', 'Cloud Infrastructure'];
  
  return (
    <div className="white-space-identifier-container" style={{ width, height }}>
      <h3 className="chart-title">{title}</h3>
      
      <div className="matrix-container" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative',
        backgroundColor: '#f5f5f7',
        borderRadius: '4px'
      }}>
        {/* Market needs (rows) labels */}
        <div className="market-needs-labels" style={{ position: 'absolute', left: -140, top: 0, height: '100%' }}>
          {marketNeeds.map((need, i) => (
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
                width: '130px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {need}
            </div>
          ))}
        </div>
        
        {/* Technology solutions (columns) labels */}
        <div className="tech-solutions-labels" style={{ position: 'absolute', top: -30, left: 0, width: '100%' }}>
          {techSolutions.map((solution, i) => (
            <div 
              key={i} 
              style={{
                position: 'absolute',
                top: 0,
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
              {solution}
            </div>
          ))}
        </div>
        
        {/* Matrix cells */}
        {whiteSpaces.map((whiteSpace, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {techSolutions.map((solution, colIndex) => {
              // Calculate opportunity size for this cell
              // In a real implementation, this would be based on actual data
              // For now, we'll use a formula based on the row and column
              const opportunitySize = whiteSpace.opportunitySize * (1 - (colIndex * 0.15));
              const intensity = Math.max(0, Math.min(1, opportunitySize / 10));
              
              return (
                <div 
                  key={`${rowIndex}-${colIndex}`}
                  style={{
                    position: 'absolute',
                    top: rowIndex * cellHeight,
                    left: colIndex * cellWidth,
                    width: cellWidth,
                    height: cellHeight,
                    backgroundColor: `rgba(0, 122, 255, ${intensity})`,
                    border: '1px solid white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: intensity > 0.5 ? 'white' : '#1D1D1F',
                    fontSize: '12px'
                  }}
                  onClick={() => onOpportunitySelect && onOpportunitySelect(whiteSpace.category)}
                >
                  {opportunitySize.toFixed(1)}
                </div>
              );
            })}
          </React.Fragment>
        ))}
        
        {/* Legend */}
        <div className="legend" style={{ position: 'absolute', bottom: -40, right: 0, display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', marginRight: '5px' }}>Opportunity Size:</span>
          <div style={{ display: 'flex', height: '10px', width: '100px' }}>
            <div style={{ backgroundColor: 'rgba(0, 122, 255, 0.1)', height: '100%', flex: 1 }}></div>
            <div style={{ backgroundColor: 'rgba(0, 122, 255, 0.3)', height: '100%', flex: 1 }}></div>
            <div style={{ backgroundColor: 'rgba(0, 122, 255, 0.5)', height: '100%', flex: 1 }}></div>
            <div style={{ backgroundColor: 'rgba(0, 122, 255, 0.7)', height: '100%', flex: 1 }}></div>
            <div style={{ backgroundColor: 'rgba(0, 122, 255, 0.9)', height: '100%', flex: 1 }}></div>
          </div>
          <span style={{ fontSize: '12px', marginLeft: '5px' }}>Small</span>
          <span style={{ fontSize: '12px', marginLeft: '5px' }}>Large</span>
        </div>
      </div>
    </div>
  );
};

export default WhiteSpaceIdentifier;
