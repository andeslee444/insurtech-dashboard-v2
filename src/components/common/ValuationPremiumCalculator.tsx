import React from 'react';
import { opportunityData } from '../../data/mockData';
import gapAnalysis from '../../utils/gapAnalysis';

interface ValuationPremiumCalculatorProps {
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

const ValuationPremiumCalculator: React.FC<ValuationPremiumCalculatorProps> = ({
  width = 800,
  height = 500,
  margin = { top: 50, right: 50, bottom: 50, left: 200 },
  title = 'Valuation Premium Analysis',
  onOpportunitySelect
}) => {
  // Get all opportunities and calculate their valuation premiums
  const opportunities = opportunityData.map(opp => ({
    ...opp,
    premium: gapAnalysis.calculateValuationPremium(opp.category)
  }));
  
  // Sort by expected premium (descending)
  const sortedOpportunities = [...opportunities].sort((a, b) => 
    b.premium.expectedPremium - a.premium.expectedPremium
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
  
  return (
    <div className="valuation-premium-calculator-container" style={{ width, height: containerHeight }}>
      <h3 className="chart-title">{title}</h3>
      
      <div className="premium-chart-container" style={{ 
        width: width - margin.left - margin.right, 
        height: containerHeight - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative',
        backgroundColor: '#f5f5f7',
        borderRadius: '4px',
        padding: '20px'
      }}>
        {/* Bars */}
        {sortedOpportunities.map((opp, index) => {
          const barWidth = (opp.premium.expectedPremium / 50) * maxBarWidth; // Assuming max premium is 50%
          
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
                  backgroundColor: '#FF9500', // Orange for premium
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
                {opp.premium.expectedPremium.toFixed(1)}%
              </div>
              
              {/* Premium factors */}
              <div style={{
                position: 'absolute',
                left: barWidth + 10,
                top: barHeight / 2,
                transform: 'translateY(-50%)',
                fontSize: '12px',
                color: '#8E8E93',
                display: 'flex'
              }}>
                <span style={{ marginRight: '10px' }}>
                  Tech: {opp.premium.premiumFactors.technologyEnabled.toFixed(1)}
                </span>
                <span style={{ marginRight: '10px' }}>
                  Growth: {opp.premium.premiumFactors.growthRate.toFixed(1)}
                </span>
                <span>
                  Market: {opp.premium.premiumFactors.marketPosition.toFixed(1)}
                </span>
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
          <span>Expected Valuation Premium:</span>
          <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>% above industry average</span>
          <span style={{ marginLeft: '15px' }}>Based on technology enablement, growth rate, and market position</span>
        </div>
      </div>
    </div>
  );
};

export default ValuationPremiumCalculator;
