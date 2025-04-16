import React, { useEffect, useState } from 'react';
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
  // State for animation
  const [animateIn, setAnimateIn] = useState(false);
  
  // Get the selected opportunity data or default to the first one
  const opportunity = selectedOpportunity 
    ? opportunityData.find(o => o.category === selectedOpportunity) 
    : opportunityData[0];
  
  // Define the dimensions we want to display
  const dimensions = [
    { key: 'marketSizeScore', label: 'Market Size' },
    { key: 'growthPotential', label: 'Growth Potential' },
    { key: 'technologyGapScore', label: 'Technology Gap' },
    { key: 'competitiveIntensityScore', label: 'Competitive Intensity', invert: true },
    { key: 'regulatoryComplexityScore', label: 'Regulatory Complexity', invert: true }
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
  
  // Exit pathways
  const exit = opportunity 
    ? gapAnalysis.analyzeExitPathways(opportunity.category) 
    : { recommendedPathway: 'Unknown', expectedMultiple: 0 };
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedOpportunity]);
  
  // Calculate the center point and radius of the radar chart
  const centerX = (width - margin.left - margin.right) / 2;
  const centerY = (height - margin.top - margin.bottom - 150) / 2;
  const radius = Math.min(centerX, centerY) - 30; // Reduced radius to leave more space for labels
  
  // Generate radar points for the opportunity
  const generateRadarPoints = () => {
    if (!opportunity) return "";
    
    return dimensions.map((dim, i) => {
      const angle = i * angleStep - Math.PI / 2; // Start from top
      
      // Get the score (and invert if needed)
      let score = opportunity[dim.key as keyof typeof opportunity] as number;
      if (dim.invert) {
        score = 10 - score;
      }
      
      // Calculate the position based on score (0-10)
      const distance = (score / 10) * radius;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      return `${x},${y}`;
    }).join(' ');
  };
  
  // Generate the grid lines for the radar
  const generateGridLines = () => {
    const gridLevels = [2, 4, 6, 8, 10]; // 5 grid levels (20%, 40%, 60%, 80%, 100%)
    
    return gridLevels.map(level => {
      const points = dimensions.map((_, i) => {
        const angle = i * angleStep - Math.PI / 2; // Start from top
        const distance = (level / 10) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        return `${x},${y}`;
      }).join(' ');
      
      return (
        <polygon 
          key={`grid-${level}`}
          points={points}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={1}
          opacity={animateIn ? 0.7 : 0}
          style={{
            transition: `opacity 0.5s ease-out ${0.1 + level * 0.1}s`
          }}
        />
      );
    });
  };
  
  // Generate axis lines
  const generateAxisLines = () => {
    return dimensions.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2; // Start from top
      const x2 = centerX + Math.cos(angle) * radius;
      const y2 = centerY + Math.sin(angle) * radius;
      
      return (
        <line
          key={`axis-${i}`}
          x1={centerX}
          y1={centerY}
          x2={x2}
          y2={y2}
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth={1}
          opacity={animateIn ? 1 : 0}
          style={{
            transition: `opacity 0.4s ease-out ${0.1 + i * 0.1}s`
          }}
        />
      );
    });
  };
  
  // Get the radar points
  const radarPoints = generateRadarPoints();
  
  return (
    <div className="opportunity-radar-container" style={{ width, height }}>
      <h3 className="chart-title" style={{ 
        margin: '0 0 15px 0', 
        fontSize: '16px', 
        textAlign: 'center',
        fontWeight: 500,
        color: '#F5F5F7'
      }}>
        {title}
      </h3>
      
      <div className="radar-chart-container" style={{ 
        width: width - margin.left - margin.right, 
        height: height - margin.top - margin.bottom - 150, // Extra space for metrics
        marginLeft: margin.left,
        marginTop: margin.top,
        position: 'relative',
        backgroundColor: 'rgba(28, 28, 30, 0.8)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
      }}>
        {/* Actual radar chart SVG */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox={`0 0 ${width - margin.left - margin.right} ${height - margin.top - margin.bottom - 150}`}
        >
          {/* Background circles */}
          {generateGridLines()}
          
          {/* Axes */}
          {generateAxisLines()}
          
          {/* Radar area */}
          {opportunity && (
            <>
              <polygon
                points={radarPoints}
                fill="rgba(10, 132, 255, 0.15)"
                stroke="#0A84FF"
                strokeWidth={2}
                opacity={animateIn ? 0.9 : 0}
                style={{
                  transition: 'opacity 0.6s ease-out 0.5s',
                  filter: 'drop-shadow(0px 0px 8px rgba(10, 132, 255, 0.4))'
                }}
              />
              
              {/* Radar points */}
              {dimensions.map((dim, i) => {
                const angle = i * angleStep - Math.PI / 2;
                let score = opportunity[dim.key as keyof typeof opportunity] as number;
                if (dim.invert) {
                  score = 10 - score;
                }
                
                const distance = (score / 10) * radius;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;
                
                return (
                  <circle
                    key={`point-${i}`}
                    cx={x}
                    cy={y}
                    r={5}
                    fill="#0A84FF"
                    strokeWidth={2}
                    stroke="#FFFFFF"
                    opacity={animateIn ? 1 : 0}
                    style={{
                      transition: `opacity 0.4s ease-out ${0.6 + i * 0.1}s, transform 0.4s ease-out ${0.6 + i * 0.1}s`,
                      transform: animateIn ? 'scale(1)' : 'scale(0.5)',
                      transformOrigin: `${x}px ${y}px`,
                      filter: 'drop-shadow(0px 0px 4px rgba(10, 132, 255, 0.6))'
                    }}
                  />
                );
              })}
            </>
          )}
          
          {/* Center point */}
          <circle 
            cx={centerX} 
            cy={centerY} 
            r={3} 
            fill="#FFFFFF" 
            opacity={animateIn ? 0.7 : 0}
            style={{
              transition: 'opacity 0.3s ease-out'
            }}
          />
          
          {/* Scale value labels (added for clarity) */}
          {[2, 4, 6, 8, 10].map((level) => (
            <text 
              key={`scale-${level}`}
              x={centerX}
              y={centerY - (level / 10) * radius - 5}
              fontSize="8"
              fill="rgba(255, 255, 255, 0.5)"
              textAnchor="middle"
              opacity={animateIn ? 1 : 0}
              style={{
                transition: `opacity 0.5s ease-out ${0.3 + level * 0.05}s`,
                userSelect: 'none'
              }}
            >
              {level}
            </text>
          ))}
          
          {/* Dimension labels as separate elements outside the chart */}
          <g className="dimension-labels">
            {dimensions.map((dimension, i) => {
              const angle = i * angleStep - Math.PI / 2; // Start from top
              
              // Position labels further outside the chart
              const labelDistance = radius + 40;
              const x = centerX + Math.cos(angle) * labelDistance;
              const y = centerY + Math.sin(angle) * labelDistance;
              
              // Create label backgrounds for better readability
              // Adjust position and anchor based on location
              const isTop = angle > -Math.PI * 0.25 && angle < Math.PI * 0.25;
              const isBottom = angle < -Math.PI * 0.75 || angle > Math.PI * 0.75;
              const isLeft = angle > Math.PI * 0.25 && angle < Math.PI * 0.75;
              const isRight = angle > -Math.PI * 0.75 && angle < -Math.PI * 0.25;
              
              let textAnchor = 'middle';
              if (isLeft) textAnchor = 'end';
              if (isRight) textAnchor = 'start';
              
              let xOffset = 0;
              if (isLeft) xOffset = -10;
              if (isRight) xOffset = 10;
              
              let yOffset = 0;
              if (isTop) yOffset = -15;
              if (isBottom) yOffset = 15;
              
              return (
                <g 
                  key={`dim-label-${i}`} 
                  opacity={animateIn ? 1 : 0}
                  style={{
                    transition: `opacity 0.5s ease-out ${0.3 + i * 0.1}s`
                  }}
                >
                  {/* Background for better readability */}
                  <rect
                    x={x - (dimension.label.length * 3.5) + xOffset}
                    y={y - 10 + yOffset}
                    width={dimension.label.length * 7}
                    height={20}
                    rx={6}
                    fill="rgba(0, 0, 0, 0.7)"
                    style={{
                      filter: 'blur(4px)',
                    }}
                  />
                  
                  {/* Label text */}
                  <text 
                    x={x + xOffset} 
                    y={y + yOffset}
                    textAnchor={textAnchor}
                    fill="#F5F5F7"
                    fontSize="11"
                    fontWeight="500"
                    style={{
                      filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))',
                      userSelect: 'none'
                    }}
                  >
                    {dimension.label}
                    {dimension.invert && 
                      <tspan 
                        x={x + xOffset} 
                        dy="14" 
                        fontSize="9" 
                        opacity="0.8"
                        textAnchor={textAnchor}
                      >
                        (Inverted)
                      </tspan>
                    }
                  </text>
                </g>
              );
            })}
          </g>
          
          {/* Center info */}
          <g 
            opacity={animateIn ? 1 : 0} 
            style={{transition: 'opacity 0.5s ease-out 0.7s'}}
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={40}
              fill="rgba(0, 0, 0, 0.4)"
              style={{
                filter: 'blur(8px)'
              }}
            />
            <text 
              x={centerX} 
              y={centerY - 10} 
              textAnchor="middle" 
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="500"
            >
              {opportunity?.category}
            </text>
            <text 
              x={centerX} 
              y={centerY + 15} 
              textAnchor="middle" 
              fill="#30D158"
              fontSize="16"
              fontWeight="600"
            >
              {overallScore.toFixed(1)}/10
            </text>
          </g>
        </svg>
        
        {/* Opportunity selector */}
        <div className="opportunity-selector" style={{
          marginTop: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {onOpportunitySelect && (
            <>
              <label style={{ 
                marginBottom: '5px', 
                fontSize: '13px', 
                color: '#F5F5F7',
                fontWeight: 400,
                opacity: 0.9
              }}>
                Select Opportunity:
              </label>
              <select 
                value={selectedOpportunity || opportunityData[0].category}
                onChange={(e) => onOpportunitySelect(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(118, 118, 128, 0.3)',
                  backgroundColor: 'rgba(28, 28, 30, 0.8)',
                  color: '#F5F5F7',
                  fontSize: '13px',
                  width: '220px',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px top 50%',
                  backgroundSize: '10px auto',
                  paddingRight: '30px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {opportunityData.map(opp => (
                  <option key={opp.category} value={opp.category}>
                    {opp.category} ({opp.overallScore.toFixed(1)})
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
      
      {/* Investment metrics */}
      <div className="investment-metrics" style={{
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        gap: '15px'
      }}>
        <div className="metric-card" style={{
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          flex: 1,
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.4s ease-out 0.3s'
        }}>
          <h4 style={{ 
            margin: '0 0 10px 0', 
            fontSize: '15px', 
            color: '#F5F5F7',
            fontWeight: 500
          }}>
            Recommended Stage
          </h4>
          <p style={{ 
            margin: '0', 
            fontSize: '14px', 
            color: '#007AFF',
            fontWeight: 600
          }}>
            {timing.recommendedStage}
          </p>
          <p style={{ 
            margin: '5px 0 0 0', 
            fontSize: '11px', 
            color: '#8E8E93' 
          }}>
            Timing Score: {timing.timingScore}/10
          </p>
        </div>
        
        <div className="metric-card" style={{
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          flex: 1,
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.4s ease-out 0.4s'
        }}>
          <h4 style={{ 
            margin: '0 0 10px 0', 
            fontSize: '15px', 
            color: '#F5F5F7',
            fontWeight: 500
          }}>
            Valuation Premium
          </h4>
          <p style={{ 
            margin: '0', 
            fontSize: '14px', 
            color: '#007AFF',
            fontWeight: 600
          }}>
            {premium.expectedPremium.toFixed(1)}%
          </p>
          <p style={{ 
            margin: '5px 0 0 0', 
            fontSize: '11px', 
            color: '#8E8E93' 
          }}>
            Above Industry Average
          </p>
        </div>
        
        <div className="metric-card" style={{
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          flex: 1,
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.4s ease-out 0.5s'
        }}>
          <h4 style={{ 
            margin: '0 0 10px 0', 
            fontSize: '15px', 
            color: '#F5F5F7',
            fontWeight: 500
          }}>
            Exit Pathway
          </h4>
          <p style={{ 
            margin: '0', 
            fontSize: '14px', 
            color: '#007AFF',
            fontWeight: 600
          }}>
            {exit.recommendedPathway}
          </p>
          <p style={{ 
            margin: '5px 0 0 0', 
            fontSize: '11px', 
            color: '#8E8E93' 
          }}>
            Expected Multiple: {exit.expectedMultiple.toFixed(1)}x
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityRadar;
