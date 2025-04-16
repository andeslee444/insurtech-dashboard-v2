import React from 'react';
import { opportunityData } from '../../data/mockData';
import gapAnalysis from '../../utils/gapAnalysis';

interface InvestmentTimingAnalyzerProps {
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

const InvestmentTimingAnalyzer: React.FC<InvestmentTimingAnalyzerProps> = ({
  width = 800,
  height = 500,
  margin = { top: 50, right: 50, bottom: 50, left: 200 },
  title = 'Investment Timing Analysis',
  onOpportunitySelect
}) => {
  // Get all opportunities and analyze their timing
  const opportunities = opportunityData.map(opp => ({
    ...opp,
    timing: gapAnalysis.analyzeInvestmentTiming(opp.category)
  }));
  
  // Sort by recommended stage and then by timing score
  const sortedOpportunities = [...opportunities].sort((a, b) => {
    // First sort by stage (Early -> Mid -> Late)
    const stageOrder = {
      'Early Stage (Seed, Series A)': 1,
      'Mid Stage (Series B, C)': 2,
      'Late Stage (Series D+)': 3
    };
    
    const stageA = stageOrder[a.timing.recommendedStage as keyof typeof stageOrder] || 0;
    const stageB = stageOrder[b.timing.recommendedStage as keyof typeof stageOrder] || 0;
    
    if (stageA !== stageB) {
      return stageA - stageB;
    }
    
    // Then sort by timing score (descending)
    return b.timing.timingScore - a.timing.timingScore;
  });
  
  // Calculate bar dimensions
  const barHeight = 30;
  const barSpacing = 15;
  const totalBarHeight = barHeight + barSpacing;
  const contentHeight = sortedOpportunities.length * totalBarHeight;
  
  // Adjust container height if needed
  const containerHeight = Math.max(height, contentHeight + margin.top + margin.bottom);
  
  // Calculate max bar width
  const maxBarWidth = width - margin.left - margin.right;
  
  // Define stage colors
  const stageColors = {
    'Early Stage (Seed, Series A)': '#34C759', // Green
    'Mid Stage (Series B, C)': '#007AFF',      // Blue
    'Late Stage (Series D+)': '#5856D6'        // Purple
  };
  
  return (
    <div className="investment-timing-analyzer-container" style={{ width, height: containerHeight }}>
      <h3 className="chart-title">{title}</h3>
      
      <div className="timing-chart-container" style={{ 
        width: width - margin.left - margin.right, 
        height: containerHeight - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative',
        backgroundColor: '#f5f5f7',
        borderRadius: '4px',
        padding: '20px'
      }}>
        {/* Stage labels */}
        <div className="stage-labels" style={{ 
          position: 'absolute', 
          top: -30, 
          left: 0, 
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{ fontSize: '12px', color: '#34C759', fontWeight: 'bold' }}>Early Stage</div>
          <div style={{ fontSize: '12px', color: '#007AFF', fontWeight: 'bold' }}>Mid Stage</div>
          <div style={{ fontSize: '12px', color: '#5856D6', fontWeight: 'bold' }}>Late Stage</div>
        </div>
        
        {/* Bars */}
        {sortedOpportunities.map((opp, index) => {
          const barWidth = (opp.timing.timingScore / 10) * maxBarWidth;
          const color = stageColors[opp.timing.recommendedStage as keyof typeof stageColors] || '#8E8E93';
          
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
                {opp.timing.timingScore.toFixed(1)}
              </div>
              
              {/* Stage label */}
              <div style={{
                position: 'absolute',
                left: barWidth + 10,
                top: barHeight / 2,
                transform: 'translateY(-50%)',
                fontSize: '12px',
                color: '#8E8E93'
              }}>
                {opp.timing.recommendedStage}
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
          <span>Timing Score:</span>
          <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>Higher is better</span>
          <span style={{ marginLeft: '15px' }}>Recommended investment stage based on market maturity</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTimingAnalyzer;
