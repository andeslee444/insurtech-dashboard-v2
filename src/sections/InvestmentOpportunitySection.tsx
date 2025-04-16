import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { opportunityData } from '../data/mockData';
import gapAnalysis from '../utils/gapAnalysis';
import ChartContainer from '../components/common/ChartContainer';
import { colors } from '../components/common/ChartContainer';
import OpportunityRadar from '../components/common/OpportunityRadar';

// Define type for ScoreIndicator props
interface ScoreIndicatorProps {
  score: number;
  label?: string;
}

// Styled component for the row
const ScorecardRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px;
  padding: 12px 8px;
  margin: 4px 0;

  &:hover {
    background-color: rgba(72, 72, 74, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Define type for the selected opportunity
interface SelectedOpportunity {
  index: number;
  item: typeof opportunityData[0];
}

const InvestmentOpportunitySection: React.FC = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<SelectedOpportunity | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const topOpportunities = gapAnalysis.getTopOpportunities(5);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle opportunity selection
  const handleOpportunitySelect = (index: number, item: typeof opportunityData[0]) => {
    setSelectedOpportunity({ index, item });
  };
  
  return (
    <div className="investment-opportunity-section animate-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Investment Opportunity Scorecard"
            insight="Cyber Underwriting Tools and Climate Risk Modeling show the highest overall scores, indicating prime investment targets."
          >
            <div className="scorecard-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: `1px solid ${colors.border}`,
              paddingBottom: '15px',
              marginBottom: '15px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              <div style={{ flex: 3 }}>Opportunity</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Market Size</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Growth</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Tech Gap</div>
              <div style={{ flex: 1, textAlign: 'center' }}>Overall</div>
            </div>
            
            {topOpportunities.map((opp, index) => {
              // Calculate the competition and regulatory scores (inverted)
              const competitionScore = 10 - opp.competitiveIntensityScore;
              const regulatoryScore = 10 - opp.regulatoryComplexityScore;
              const isSelected = selectedOpportunity?.item.category === opp.category;
              
              return (
                <ScorecardRow 
                  key={opp.category} 
                  style={{ 
                    backgroundColor: isSelected ? 'rgba(10, 132, 255, 0.1)' : 'transparent',
                    border: isSelected ? `1px solid ${colors.blue.primary}` : 'none',
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.4s ease-out ${0.1 + index * 0.1}s`
                  }}
                  onClick={() => handleOpportunitySelect(index, opp)}
                >
                  <div style={{ flex: 3 }}>
                    <div style={{ fontWeight: 500, color: isSelected ? colors.blue.primary : colors.textPrimary }}>{opp.category}</div>
                    <div style={{ fontSize: '12px', color: colors.textSecondary, marginTop: '4px' }}>{opp.marketNeed}</div>
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
                  
                  <div style={{ flex: 1, fontSize: '14px', textAlign: 'center', fontWeight: 'bold', color: getScoreColor(opp.overallScore) }}>
                    {opp.overallScore.toFixed(1)}
                  </div>
                </ScorecardRow>
              );
            })}
            
            <div className="scorecard-footer" style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: 'rgba(72, 72, 74, 0.5)',
              borderRadius: '8px',
              fontSize: '12px',
              color: colors.textSecondary,
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out 0.6s'
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
              <div>
                <strong>Tech Gap:</strong> Degree of technology enablement opportunity
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer
            title="Selected Opportunity Analysis"
            insight={selectedOpportunity 
              ? `${selectedOpportunity.item.category}: ${selectedOpportunity.item.description}`
              : "Select an opportunity from the scorecard for detailed analysis."
            }
          >
            {selectedOpportunity ? (
              <div style={{ 
                height: '320px', 
                display: 'flex', 
                flexDirection: 'column',
                opacity: animateIn ? 1 : 0,
                transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.4s ease-out'
              }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '50%', 
                    backgroundColor: 'rgba(72, 72, 74, 0.5)', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginRight: '8px'
                  }}>
                    <h4 style={{ fontSize: '16px', margin: '0 0 12px 0', color: colors.textPrimary }}>
                      Investment Details
                    </h4>
                    <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: colors.textSecondary }}>Stage: </span>
                      <span style={{ color: colors.textPrimary, fontWeight: 500 }}>{selectedOpportunity.item.stage}</span>
                    </div>
                    <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: colors.textSecondary }}>Recommended Investment: </span>
                      <span style={{ color: colors.textPrimary, fontWeight: 500 }}>{selectedOpportunity.item.recommendedInvestment}</span>
                    </div>
                    <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: colors.textSecondary }}>Exit Pathway: </span>
                      <span style={{ color: colors.textPrimary, fontWeight: 500 }}>{selectedOpportunity.item.exitPathway}</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    width: '50%', 
                    backgroundColor: 'rgba(72, 72, 74, 0.5)', 
                    borderRadius: '8px', 
                    padding: '16px',
                    marginLeft: '8px'
                  }}>
                    <h4 style={{ fontSize: '16px', margin: '0 0 12px 0', color: colors.textPrimary }}>
                      Market Analysis
                    </h4>
                    <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: colors.textSecondary }}>Market Size ($B): </span>
                      <span style={{ color: colors.textPrimary, fontWeight: 500 }}>{selectedOpportunity.item.marketSize.toFixed(1)}</span>
                    </div>
                    <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: colors.textSecondary }}>Growth Potential (%): </span>
                      <span style={{ color: colors.green, fontWeight: 500 }}>{selectedOpportunity.item.growthPotential.toFixed(1)}</span>
                    </div>
                    <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                      <span style={{ color: colors.textSecondary }}>Competitive Intensity: </span>
                      <span style={{ color: colors.textPrimary, fontWeight: 500 }}>{selectedOpportunity.item.competitiveIntensityScore.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  flex: 1, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: 'rgba(72, 72, 74, 0.5)',
                  borderRadius: '8px',
                  padding: '16px'
                }}>
                  <OpportunityRadar 
                    selectedOpportunity={selectedOpportunity.item.category} 
                    width={500}
                    height={240}
                  />
                </div>
              </div>
            ) : (
              <div style={{ 
                height: '320px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'rgba(72, 72, 74, 0.3)',
                borderRadius: '8px',
                color: colors.textSecondary,
                fontStyle: 'italic'
              }}>
                Select an opportunity from the scorecard to view detailed analysis
              </div>
            )}
          </ChartContainer>
        </div>

        <ChartContainer 
          title="Investment Opportunity Matrix"
          insight="The bottom-right quadrant (Large Market / High Tech Gap) represents the highest investment opportunity areas."
        >
          <div style={{ 
            height: '450px', 
            position: 'relative',
            opacity: animateIn ? 1 : 0,
            transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.4s ease-out 0.3s'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '50px', 
              left: '50px', 
              right: '50px', 
              bottom: '50px', 
              border: `1px solid ${colors.border}`,
              borderRadius: '4px',
              background: 'linear-gradient(to right top, rgba(10, 132, 255, 0.05), rgba(48, 209, 88, 0.07))'
            }}>
              {opportunityData.map((item, index) => {
                // Calculate position based on technology gap (x) and market size (y)
                const xPos = `${(item.technologyGapScore / 10) * 100}%`;
                const yPos = `${100 - (item.marketSizeScore / 10) * 100}%`;
                
                // Determine bubble size based on growth potential
                const bubbleSize = Math.max(40, (item.growthPotential / 10) * 80);
                
                // Determine color based on overall score
                const color = getScoreColor(item.overallScore);
                const isSelected = selectedOpportunity?.item.category === item.category;
                
                // Calculate the transform and animation values
                const transformValue = isSelected 
                  ? 'translate(-50%, -50%) scale(1.1)' 
                  : 'translate(-50%, -50%) scale(1)';
                const animationStyle = animateIn 
                  ? `bubbleIn 0.6s ease-out ${0.3 + index * 0.15}s forwards` 
                  : 'none';
                
                return (
                  <div 
                    key={index}
                    style={{
                      position: 'absolute',
                      left: xPos,
                      top: yPos,
                      width: `${bubbleSize}px`,
                      height: `${bubbleSize}px`,
                      borderRadius: '50%',
                      backgroundColor: color,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isSelected ? '14px' : '12px',
                      fontWeight: 'bold',
                      color: 'white',
                      zIndex: isSelected ? 3 : 2,
                      cursor: 'pointer',
                      opacity: 0,
                      border: isSelected ? '2px solid white' : 'none',
                      boxShadow: isSelected ? `0 0 20px ${color}` : '0 0 10px rgba(0,0,0,0.3)',
                      transform: 'translate(-50%, -50%) scale(0.2)',
                      animation: animationStyle,
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => handleOpportunitySelect(index, item)}
                  >
                    <div>{item.overallScore.toFixed(1)}</div>
                    {isSelected && (
                      <div style={{ fontSize: '9px', maxWidth: '80%', textAlign: 'center', marginTop: '3px' }}>
                        {item.category}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Axis labels */}
              <div style={{ position: 'absolute', left: '50%', bottom: '-30px', transform: 'translateX(-50%)', fontSize: '13px', fontWeight: 500, color: colors.textSecondary }}>Technology Gap →</div>
              <div style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '13px', fontWeight: 500, color: colors.textSecondary }}>Market Size →</div>
              
              {/* Quadrant labels */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '11px', color: colors.textSecondary }}>Small Market / Low Tech Gap</div>
              <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '11px', color: colors.textSecondary }}>Small Market / High Tech Gap</div>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '11px', color: colors.textSecondary }}>Large Market / Low Tech Gap</div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '11px', fontWeight: 'bold', color: colors.green }}>Large Market / High Tech Gap</div>
            </div>
            
            {/* Legend */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '12px', backgroundColor: 'rgba(44, 44, 46, 0.7)', padding: '8px 12px', borderRadius: '6px' }}>
              <div style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))', marginRight: '8px' }}></div>
                <span>Bubble Size = Growth Potential</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '12px', height: '12px', background: 'linear-gradient(135deg, #30D158, #0A84FF)', marginRight: '8px', borderRadius: '2px' }}></div>
                <span>Color = Overall Score</span>
              </div>
            </div>
            
            <style>
              {`
                @keyframes bubbleIn {
                  from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.2);
                  }
                  to {
                    opacity: 0.7;
                    transform: translate(-50%, -50%) scale(1);
                  }
                }
              `}
            </style>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

// Helper component for score visualization
const ScoreIndicator: React.FC<ScoreIndicatorProps> = ({ score, label }) => {
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
      {label && <div style={{ fontSize: '10px', color: colors.textSecondary }}>{label}</div>}
    </div>
  );
};

// Helper function to get color based on score
const getScoreColor = (score: number): string => {
  if (score >= 8) return colors.green;
  if (score >= 7) return colors.blue.primary;
  if (score >= 6) return colors.orange;
  return colors.red;
};

export default InvestmentOpportunitySection;
