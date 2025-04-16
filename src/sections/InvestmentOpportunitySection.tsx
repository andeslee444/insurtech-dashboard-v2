import React from 'react';
import styled from 'styled-components';
import { opportunityData } from '../data/mockData';
import gapAnalysis from '../utils/gapAnalysis';

// Define type for ScoreIndicator props
interface ScoreIndicatorProps {
  score: number;
}

// Styled component for the row
const ScorecardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
  // border-bottom applied conditionally via style prop below

  &:hover {
    background-color: #48484A;
  }
`;

const InvestmentOpportunitySection: React.FC = () => {
  const topOpportunities = gapAnalysis.getTopOpportunities(5);
  
  return (
    <div className="investment-opportunity-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Investment Opportunity Scorecard</h3>
          <div className="chart-area" style={{ backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <div className="scorecard-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #5E5E5E',
              paddingBottom: '15px',
              marginBottom: '15px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              <div style={{ flex: 3 }}>Opportunity</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Market Size</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Growth</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Tech Gap</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Competition</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Regulatory</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Overall</div>
            </div>
            
            {topOpportunities.map((opp, index) => {
              // Calculate the competition and regulatory scores (inverted)
              const competitionScore = 10 - opp.competitiveIntensityScore;
              const regulatoryScore = 10 - opp.regulatoryComplexityScore;
              
              return (
                <ScorecardRow 
                  key={opp.category} 
                  style={{ borderBottom: index < topOpportunities.length - 1 ? '1px solid #5E5E5E' : 'none' }}
                >
                  <div style={{ flex: 3 }}>
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
                  
                  <div style={{ flex: 1, fontSize: '14px', textAlign: 'center', fontWeight: 'bold', color: '#0A84FF' }}>
                    {opp.overallScore.toFixed(1)}
                  </div>
                </ScorecardRow>
              );
            })}
            
            <div className="scorecard-footer" style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#48484A',
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
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Gap Analysis Matrix</h3>
          <div className="chart-area" style={{ height: '400px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '50px', 
              left: '50px', 
              right: '50px', 
              bottom: '50px', 
              border: '1px solid #5E5E5E',
              borderRadius: '4px',
              background: 'linear-gradient(to right top, rgba(10, 132, 255, 0.1), rgba(48, 209, 88, 0.1))'
            }}>
              {opportunityData.map((item, index) => {
                // Calculate position based on technology gap (x) and market size (y)
                const xPos = `${(item.technologyGapScore / 10) * 100}%`;
                const yPos = `${100 - (item.marketSizeScore / 10) * 100}%`;
                
                // Determine bubble size based on growth potential
                const bubbleSize = Math.max(30, (item.growthPotential / 10) * 60);
                
                // Determine color based on overall score
                const color = getScoreColor(item.overallScore);
                
                return (
                  <div 
                    key={index}
                    style={{
                      position: 'absolute',
                      left: xPos,
                      top: yPos,
                      transform: 'translate(-50%, -50%)',
                      width: `${bubbleSize}px`,
                      height: `${bubbleSize}px`,
                      borderRadius: '50%',
                      backgroundColor: color,
                      opacity: 0.8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      color: 'white',
                      zIndex: 2,
                      cursor: 'pointer',
                      boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                    }}
                    title={`${item.category}: Market Size ${item.marketSizeScore.toFixed(1)}, Tech Gap ${item.technologyGapScore.toFixed(1)}, Growth ${item.growthPotential.toFixed(1)}`}
                  >
                    {item.overallScore.toFixed(1)}
                  </div>
                );
              })}
              
              {/* Axis labels */}
              <div style={{ position: 'absolute', left: '50%', bottom: '-30px', transform: 'translateX(-50%)', fontSize: '12px', color: '#8E8E93' }}>Technology Gap</div>
              <div style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '12px', color: '#8E8E93' }}>Market Size</div>
              
              {/* Quadrant labels */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', color: '#8E8E93' }}>Small Market / Low Tech Gap</div>
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '10px', color: '#8E8E93' }}>Small Market / High Tech Gap</div>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '10px', color: '#8E8E93' }}>Large Market / Low Tech Gap</div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#8E8E93', fontWeight: 'bold' }}>Large Market / High Tech Gap</div>
            </div>
            
            {/* Legend */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '12px' }}>
              <div style={{ marginBottom: '5px' }}>Bubble Size = Growth Potential</div>
              <div style={{ marginBottom: '5px' }}>Color = Overall Score</div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '10px', left: '20px', fontSize: '14px', color: '#8E8E93' }}>
              The bottom-right quadrant (Large Market / High Tech Gap) represents the highest investment opportunity areas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for score visualization - Add typing
const ScoreIndicator: React.FC<ScoreIndicatorProps> = ({ score }) => {
  // Determine color based on score
  const color = getScoreColor(score);
  
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

// Helper function to get color based on score - Add typing
const getScoreColor = (score: number): string => {
  if (score >= 8) return '#30D158'; // Green for high scores
  if (score >= 7) return '#0A84FF'; // Blue for medium-high scores
  if (score >= 6) return '#FF9F0A'; // Orange for medium scores
  return '#FF453A'; // Red for low scores
};

export default InvestmentOpportunitySection;
