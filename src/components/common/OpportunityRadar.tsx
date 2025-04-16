import React from 'react';
import { opportunityData } from '../../data/mockData';
import gapAnalysis from '../../utils/gapAnalysis';

interface OpportunityRadarProps {
  width?: number;
  height?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  title?: string;
  selectedOpportunity?: string;
  onOpportunitySelect?: (opportunity: string) => void;
}

const OpportunityRadar: React.FC<OpportunityRadarProps> = ({
  width = 600,
  height = 600,
  margin = { top: 50, right: 50, bottom: 50, left: 50 },
  title = 'Investment Opportunity Radar',
  selectedOpportunity,
  onOpportunitySelect
}) => {
  // Get the selected opportunity data or default to the first one
  const opportunity = selectedOpportunity 
    ? opportunityData.find(o => o.category === selectedOpportunity) 
    : opportunityData[0];
  
  // Define the dimensions we want to display
  const dimensions = [
    { key: 'marketSizeScore', label: 'Market Size' },
    { key: 'growthPotential', label: 'Growth Potential' },
    { key: 'technologyGapScore', label: 'Technology Gap' },
    { key: 'competitiveIntensityScore', label: 'Competitive Intensity (Inverted)', invert: true },
    { key: 'regulatoryComplexityScore', label: 'Regulatory Complexity (Inverted)', invert: true }
  ];
  
  // Calculate the angle for each dimension
  const angleStep = (Math.PI * 2) / dimensions.length;
  
  // Calculate the overall score
  const overallScore = opportunity ? opportunity.overallScore : 0;
  
  // Calculate investment timing
  const timing = opportunity 
    ? gapAnalysis.analyzeInvestmentTiming(opportunity.category) 
    : { recommendedStage: 'Unknown', timingScore: 0 };
  
  // Calculate valuation premium
  const premium = opportunity 
    ? gapAnalysis.calculateValuationPremium(opportunity.category) 
    : { expectedPremium: 0 };
  
  // Calculate exit pathways
  const exit = opportunity 
    ? gapAnalysis.analyzeExitPathways(opportunity.category) 
    : { recommendedPathway: 'Unknown', expectedMultiple: 0 };
  
  return (
    <div className="opportunity-radar-container" style={{ width, height }}>
      <h3 className="chart-title">{title}</h3>
      
      <div className="radar-chart-container" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom - 150, // Extra space for metrics
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative'
      }}>
        {/* Placeholder for radar chart */}
        <div className="radar-placeholder" style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f7',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div className="radar-info">
            <p>Opportunity Radar: {opportunity?.category || 'No selection'}</p>
            <p>Overall Score: {overallScore.toFixed(1)}/10</p>
          </div>
          
          {/* Dimension labels */}
          {dimensions.map((dimension, i) => {
            const angle = i * angleStep - Math.PI / 2; // Start from top
            const x = Math.cos(angle) * ((width - margin.left - margin.right) / 2 - 20);
            const y = Math.sin(angle) * ((height - margin.top - margin.bottom - 150) / 2 - 20);
            
            return (
              <div 
                key={dimension.key}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  fontSize: '12px',
                  color: '#1D1D1F',
                  textAlign: 'center',
                  width: '100px'
                }}
              >
                {dimension.label}
              </div>
            );
          })}
        </div>
        
        {/* Opportunity selector */}
        <div className="opportunity-selector" style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <label style={{ marginBottom: '5px', fontSize: '14px' }}>Select Opportunity:</label>
          <select 
            value={selectedOpportunity || opportunityData[0].category}
            onChange={(e) => onOpportunitySelect && onOpportunitySelect(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #D1D1D6',
              backgroundColor: 'white',
              fontSize: '14px',
              width: '250px'
            }}
          >
            {opportunityData.map(opp => (
              <option key={opp.category} value={opp.category}>
                {opp.category} ({opp.overallScore.toFixed(1)}/10)
              </option>
            ))}
          </select>
        </div>
        
        {/* Investment metrics */}
        <div className="investment-metrics" style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <div className="metric-card" style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            width: '30%'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Recommended Stage</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#007AFF' }}>{timing.recommendedStage}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#8E8E93' }}>Timing Score: {timing.timingScore}/10</p>
          </div>
          
          <div className="metric-card" style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            width: '30%'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Valuation Premium</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#007AFF' }}>{premium.expectedPremium.toFixed(1)}%</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#8E8E93' }}>Above Industry Average</p>
          </div>
          
          <div className="metric-card" style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            width: '30%'
          }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Exit Pathway</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#007AFF' }}>{exit.recommendedPathway}</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#8E8E93' }}>Expected Multiple: {exit.expectedMultiple.toFixed(1)}x</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityRadar;
