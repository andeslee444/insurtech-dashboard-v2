import React from 'react';
import { opportunityData } from '../../data/mockData';
import gapAnalysis from '../../utils/gapAnalysis';

interface ExitPathwayAnalyzerProps {
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

const ExitPathwayAnalyzer: React.FC<ExitPathwayAnalyzerProps> = ({
  width = 800,
  height = 500,
  margin = { top: 50, right: 50, bottom: 50, left: 200 },
  title = 'Exit Pathway Analysis',
  onOpportunitySelect
}) => {
  // Get all opportunities and analyze their exit pathways
  const opportunities = opportunityData.map(opp => ({
    ...opp,
    exit: gapAnalysis.analyzeExitPathways(opp.category)
  }));
  
  // Sort by expected multiple (descending)
  const sortedOpportunities = [...opportunities].sort((a, b) => 
    b.exit.expectedMultiple - a.exit.expectedMultiple
  );
  
  // Calculate bar dimensions
  const barHeight = 30;
  const barSpacing = 15;
  const totalBarHeight = barHeight + barSpacing;
  const contentHeight = sortedOpportunities.length * totalBarHeight;
  
  // Adjust container height if needed
  const containerHeight = Math.max(height, contentHeight + margin.top + margin.bottom);
  
  // Calculate max bar width
  const maxBarWidth = width - margin.left - margin.right;
  
  // Define pathway colors
  const pathwayColors = {
    'Strategic Acquisition': '#FF2D55', // Red
    'PE Acquisition': '#5856D6',        // Purple
    'IPO': '#FF9500'                    // Orange
  };
  
  return (
    <div className="exit-pathway-analyzer-container" style={{ width, height: containerHeight }}>
      <h3 className="chart-title">{title}</h3>
      
      <div className="exit-chart-container" style={{ 
        width: width - margin.left - margin.right, 
        height: containerHeight - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative',
        backgroundColor: '#f5f5f7',
        borderRadius: '4px',
        padding: '20px'
      }}>
        {/* Pathway labels */}
        <div className="pathway-labels" style={{ 
          position: 'absolute', 
          top: -30, 
          left: 0, 
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '12px', color: '#FF2D55', fontWeight: 'bold' }}>Strategic Acquisition</div>
          <div style={{ fontSize: '12px', color: '#5856D6', fontWeight: 'bold' }}>PE Acquisition</div>
          <div style={{ fontSize: '12px', color: '#FF9500', fontWeight: 'bold' }}>IPO</div>
        </div>
        
        {/* Bars */}
        {sortedOpportunities.map((opp, index) => {
          const barWidth = (opp.exit.expectedMultiple / 5) * maxBarWidth; // Assuming max multiple is 5x
          const color = pathwayColors[opp.exit.recommendedPathway as keyof typeof pathwayColors] || '#8E8E93';
          
          return (
            <div key={opp.category} style={{ position: 'relative', marginBottom: barSpacing }}>
              {/* Category label */}
              <div style={{
                position: 'absolute',
                right: maxBarWidth + 10,
                top: barHeight / 2,
                transform: 'translateY(-50%)',
                fontSize: '12px',
                color: '#1D1D1F',
                textAlign: 'right',
                width: '180px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}>
                {opp.category}
              </div>
              
              {/* Bar */}
              <div 
                style={{
                  height: barHeight,
                  width: barWidth,
                  backgroundColor: color,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '10px',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
                onClick={() => onOpportunitySelect && onOpportunitySelect(opp.category)}
              >
                {opp.exit.expectedMultiple.toFixed(1)}x
              </div>
              
              {/* Pathway label */}
              <div style={{
                position: 'absolute',
                left: barWidth + 10,
                top: barHeight / 2,
                transform: 'translateY(-50%)',
                fontSize: '12px',
                color: '#8E8E93'
              }}>
                {opp.exit.recommendedPathway}
              </div>
            </div>
          );
        })}
        
        {/* Legend */}
        <div className="legend" style={{ 
          position: 'absolute', 
          bottom: -40, 
          left: 0, 
          display: 'flex', 
          alignItems: 'center',
          fontSize: '12px',
          color: '#8E8E93'
        }}>
          <span>Expected Multiple:</span>
          <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Higher is better</span>
          <span style={{ marginLeft: '15px' }}>Recommended exit pathway based on opportunity characteristics</span>
        </div>
      </div>
    </div>
  );
};

export default ExitPathwayAnalyzer;
