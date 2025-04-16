import React from 'react';
import styled from 'styled-components';
import { opportunityData } from '../../data/mockData';
import gapAnalysis from '../../utils/gapAnalysis';

interface InvestmentOpportunityScorecardProps {
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

// Define styled component for the row
const ScorecardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #F2F2F7;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: #F2F2F7;
  }
`;

const InvestmentOpportunityScorecard: React.FC<InvestmentOpportunityScorecardProps> = ({
  width = 800,
  height = 600,
  margin = { top: 50, right: 50, bottom: 50, left: 50 },
  title = 'Investment Opportunity Scorecard',
  onOpportunitySelect
}) => {
  // Get top opportunities
  const topOpportunities = gapAnalysis.getTopOpportunities(5);
  
  return (
    <div className="investment-opportunity-scorecard-container" style={{ width, height }}>
      <h3 className="chart-title">{title}</h3>
      
      <div className="scorecard-container" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom,
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: '20px'
      }}>
        <div className="scorecard-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #E5E5EA',
          paddingBottom: '15px',
          marginBottom: '15px'
        }}>
          <div style={{ flex: 3, fontWeight: 'bold', fontSize: '14px' }}>Opportunity</div>
          <div style={{ flex: 1, fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>Market Size</div>
          <div style={{ flex: 1, fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>Growth</div>
          <div style={{ flex: 1, fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>Tech Gap</div>
          <div style={{ flex: 1, fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>Competition</div>
          <div style={{ flex: 1, fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>Regulatory</div>
          <div style={{ flex: 1, fontWeight: 'bold', fontSize: '14px', textAlign: 'center' }}>Overall</div>
        </div>
        
        {topOpportunities.map((opp, index) => {
          // Calculate the competition and regulatory scores (inverted)
          const competitionScore = 10 - opp.competitiveIntensityScore;
          const regulatoryScore = 10 - opp.regulatoryComplexityScore;
          
          return (
            <ScorecardRow 
              key={opp.category} 
              style={{ borderBottom: index < topOpportunities.length - 1 ? '1px solid #F2F2F7' : 'none' }}
              onClick={() => onOpportunitySelect && onOpportunitySelect(opp.category)}
            >
              <div style={{ flex: 3, fontSize: '14px' }}>
                <div style={{ fontWeight: 'medium' }}>{opp.category}</div>
                <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '4px' }}>{opp.marketNeed}</div>
              </div>
              
              <div style={{ flex: 1, fontSize: '14px', textAlign: 'center' }}>
                <ScoreIndicator score={opp.marketSizeScore} />
              </div>
              
              <div style={{ flex: 1, fontSize: '14px', textAlign: 'center' }}>
                <ScoreIndicator score={opp.growthPotential} />
              </div>
              
              <div style={{ flex: 1, fontSize: '14px', textAlign: 'center' }}>
                <ScoreIndicator score={opp.technologyGapScore} />
              </div>
              
              <div style={{ flex: 1, fontSize: '14px', textAlign: 'center' }}>
                <ScoreIndicator score={competitionScore} />
              </div>
              
              <div style={{ flex: 1, fontSize: '14px', textAlign: 'center' }}>
                <ScoreIndicator score={regulatoryScore} />
              </div>
              
              <div style={{ flex: 1, fontSize: '14px', textAlign: 'center', fontWeight: 'bold', color: '#007AFF' }}>
                {opp.overallScore.toFixed(1)}
              </div>
            </ScorecardRow>
          );
        })}
        
        <div className="scorecard-footer" style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#F2F2F7',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#8E8E93'
        }}>
          <div style={{ marginBottom: '5px' }}>
            <strong>Scoring Methodology:</strong> Opportunities are scored on a scale of 1-10 across multiple dimensions
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Market Size:</strong> Total addressable market in billions of dollars
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Growth:</strong> Projected annual growth rate percentage
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Tech Gap:</strong> Degree of technology enablement opportunity
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Competition:</strong> Inverse of competitive intensity (higher is better)
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>Regulatory:</strong> Inverse of regulatory complexity (higher is better)
          </div>
          <div>
            <strong>Overall:</strong> Weighted average of all factors
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for score visualization
const ScoreIndicator: React.FC<{ score: number }> = ({ score }) => {
  // Determine color based on score
  let color = '#8E8E93'; // Default gray
  
  if (score >= 8) {
    color = '#34C759'; // Green for high scores
  } else if (score >= 6) {
    color = '#007AFF'; // Blue for medium-high scores
  } else if (score >= 4) {
    color = '#FF9500'; // Orange for medium scores
  } else {
    color = '#FF3B30'; // Red for low scores
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ 
        width: '30px', 
        height: '6px', 
        backgroundColor: color,
        borderRadius: '3px',
        marginBottom: '4px'
      }} />
      <div style={{ fontSize: '12px' }}>{score.toFixed(1)}</div>
    </div>
  );
};

export default InvestmentOpportunityScorecard;
