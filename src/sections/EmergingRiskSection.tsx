import React, { useState, useEffect } from 'react';
import { emergingRisksData, riskMatrixData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import { colors } from '../components/common/ChartContainer';

const EmergingRiskSection: React.FC = () => {
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredRisk, setHoveredRisk] = useState<string | null>(null);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Calculate max severity for reference
  const maxSeverity = Math.max(...emergingRisksData.map(item => item.severity));
  
  return (
    <div className="emerging-risk-section animate-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Emerging Risk Categories"
            insight="Cyber Threats represent the highest severity risk with significant investment opportunity due to the gap between severity and readiness."
          >
            <div className="risk-scorecard">
              <div className="scorecard-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: `1px solid ${colors.border}`,
                paddingBottom: '15px',
                marginBottom: '15px',
                fontWeight: 500,
                fontSize: '14px'
              }}>
                <div style={{ flex: 3 }}>Risk Category</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Severity</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Readiness</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Opportunity</div>
              </div>
              
              {emergingRisksData.sort((a, b) => b.opportunity - a.opportunity).map((item, index) => (
                <div 
                  key={item.category}
                  className="risk-row"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 8px',
                    borderRadius: '8px',
                    backgroundColor: hoveredRisk === item.category ? 'rgba(72, 72, 74, 0.8)' : 'transparent',
                    marginBottom: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${0.1 + index * 0.05}s`,
                  }}
                  onMouseEnter={() => setHoveredRisk(item.category)}
                  onMouseLeave={() => setHoveredRisk(null)}
                >
                  <div style={{ flex: 3 }}>
                    <div style={{ fontWeight: 500, color: hoveredRisk === item.category ? colors.textPrimary : colors.textPrimary }}>
                      {item.category}
                    </div>
                  </div>
                  
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      backgroundColor: item.severity > 8 ? 'rgba(255, 69, 58, 0.2)' : 'rgba(255, 159, 10, 0.2)',
                      color: item.severity > 8 ? colors.red : colors.orange
                    }}>
                      {item.severity.toFixed(1)}
                    </div>
                  </div>
                  
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      backgroundColor: item.readiness < 6 ? 'rgba(255, 159, 10, 0.2)' : 'rgba(48, 209, 88, 0.2)',
                      color: item.readiness < 6 ? colors.orange : colors.green
                    }}>
                      {item.readiness.toFixed(1)}
                    </div>
                  </div>
                  
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      backgroundColor: 'rgba(10, 132, 255, 0.2)',
                      color: colors.blue.primary
                    }}>
                      {item.opportunity.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ 
              marginTop: '24px', 
              padding: '16px', 
              backgroundColor: 'rgba(44, 44, 46, 0.5)', 
              borderRadius: '12px',
              fontSize: '13px',
              lineHeight: '1.5',
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease',
              transitionDelay: '0.5s'
            }}>
              <div style={{ marginBottom: '8px', fontWeight: 500 }}>Risk Gap Analysis:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {emergingRisksData.sort((a, b) => (b.severity - b.readiness) - (a.severity - a.readiness)).slice(0, 3).map((item, index) => (
                  <div key={index} style={{ 
                    flex: '1 1 calc(33.333% - 12px)',
                    backgroundColor: 'rgba(44, 44, 46, 0.8)',
                    padding: '12px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                  }}>
                    <div style={{ fontWeight: 600, marginBottom: '4px', color: colors.blue.primary }}>{item.category}</div>
                    <div style={{ color: colors.textSecondary, fontSize: '12px', marginBottom: '8px' }}>
                      Gap: <span style={{ color: colors.orange, fontWeight: 500 }}>{(item.severity - item.readiness).toFixed(1)}</span>
                    </div>
                    <div style={{ position: 'relative', height: '6px', backgroundColor: 'rgba(72, 72, 74, 0.5)', borderRadius: '3px' }}>
                      <div style={{ 
                        position: 'absolute', 
                        left: 0, 
                        height: '6px', 
                        width: `${(item.readiness / 10) * 100}%`,
                        backgroundColor: colors.green,
                        borderRadius: '3px 0 0 3px'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        left: `${(item.readiness / 10) * 100}%`, 
                        height: '6px', 
                        width: `${((item.severity - item.readiness) / 10) * 100}%`,
                        backgroundColor: colors.red,
                        borderRadius: '0 3px 3px 0'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer 
            title="Risk Matrix"
            insight="Ransomware and Data Breach represent the highest impact cyber risks with significant frequency, requiring immediate investment in mitigation solutions."
          >
            <div style={{ 
              height: '400px', 
              position: 'relative',
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out 0.3s'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '40px', 
                left: '50px', 
                right: '20px', 
                bottom: '40px', 
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(255, 69, 58, 0.15), rgba(255, 159, 10, 0.1), rgba(48, 209, 88, 0.1))'
              }}>
                {/* Grid lines */}
                {[0, 2.5, 5, 7.5, 10].map((line) => (
                  <React.Fragment key={`grid-${line}`}>
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: `${line * 10}%`,
                      height: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: `${line * 10}%`,
                      width: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}></div>
                    
                    {/* Grid labels */}
                    <div style={{
                      position: 'absolute',
                      bottom: `${line * 10}%`,
                      left: '-30px',
                      transform: 'translateY(50%)',
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                      {line.toFixed(1)}
                    </div>
                    <div style={{
                      position: 'absolute',
                      left: `${line * 10}%`,
                      bottom: '-25px',
                      transform: 'translateX(-50%)',
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                      {line.toFixed(1)}
                    </div>
                  </React.Fragment>
                ))}
                
                {/* Quadrant labels */}
                <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '11px', opacity: 0.6 }}>Low Impact / Low Frequency</div>
                <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '11px', opacity: 0.6 }}>Low Impact / High Frequency</div>
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '11px', opacity: 0.6 }}>High Impact / Low Frequency</div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '11px', fontWeight: 600, color: colors.red }}>High Impact / High Frequency</div>
                
                {/* Risk points */}
                {riskMatrixData.map((item, index) => {
                  // Calculate position based on frequency (x) and impact (y)
                  const xPos = `${(item.frequency / 10) * 100}%`;
                  const yPos = `${100 - (item.impact / 10) * 100}%`;
                  
                  // Determine color based on category
                  let color = '#FFFFFF';
                  switch(item.category) {
                    case 'Cyber': color = '#0A84FF'; break;
                    case 'Climate': color = '#30D158'; break;
                    case 'Compliance': color = '#FF9F0A'; break;
                    case 'Technology': color = '#5E5CE6'; break;
                    case 'Operational': color = '#FF375F'; break;
                    case 'Health': color = '#BF5AF2'; break;
                    case 'ESG': color = '#64D2FF'; break;
                    case 'Geopolitical': color = '#FF9F0A'; break;
                    default: color = '#FFFFFF';
                  }
                  
                  const isHighRisk = item.impact > 8 && item.frequency > 7;
                  const isHovered = hoveredRisk === item.risk;
                  
                  return (
                    <div 
                      key={index}
                      style={{
                        position: 'absolute',
                        left: xPos,
                        top: yPos,
                        transform: 'translate(-50%, -50%)',
                        width: isHovered || isHighRisk ? '18px' : '12px',
                        height: isHovered || isHighRisk ? '18px' : '12px',
                        borderRadius: '50%',
                        backgroundColor: color,
                        border: `2px solid ${isHighRisk ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)'}`,
                        zIndex: isHovered ? 5 : (isHighRisk ? 4 : 2),
                        cursor: 'pointer',
                        boxShadow: isHovered || isHighRisk ? `0 0 12px ${color}` : `0 0 5px rgba(0, 0, 0, 0.3)`,
                        transition: 'all 0.2s ease-out',
                        opacity: animateIn ? 1 : 0,
                        animation: animateIn ? `riskPointFadeIn 0.5s ease-out ${0.3 + index * 0.05}s forwards` : 'none'
                      }}
                      onMouseEnter={() => setHoveredRisk(item.risk)}
                      onMouseLeave={() => setHoveredRisk(null)}
                    />
                  );
                })}
                
                {/* Hover tooltip */}
                {hoveredRisk && (() => {
                  const riskData = riskMatrixData.find(item => item.risk === hoveredRisk);
                  if (!riskData) return null;
                  
                  const xPos = (riskData.frequency / 10) * 100;
                  const yPos = 100 - (riskData.impact / 10) * 100;
                  
                  // Adjust tooltip position to avoid going off-screen
                  const tooltipX = xPos > 70 ? `calc(${xPos}% - 120px)` : `calc(${xPos}% + 15px)`;
                  const tooltipY = yPos < 30 ? `calc(${yPos}% + 15px)` : `calc(${yPos}% - 75px)`;
                  
                  return (
                    <div style={{
                      position: 'absolute',
                      left: tooltipX,
                      top: tooltipY,
                      backgroundColor: 'rgba(44, 44, 46, 0.95)',
                      padding: '12px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                      zIndex: 10,
                      pointerEvents: 'none',
                      minWidth: '180px'
                    }}>
                      <div style={{ fontWeight: 600, marginBottom: '6px' }}>{riskData.risk}</div>
                      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
                        Category: <span style={{ color: colors.blue.primary }}>{riskData.category}</span>
                      </div>
                      <div style={{ fontSize: '12px', marginBottom: '4px' }}>
                        Impact: <span style={{ color: colors.orange }}>{riskData.impact.toFixed(1)}/10</span>
                      </div>
                      <div style={{ fontSize: '12px' }}>
                        Frequency: <span style={{ color: colors.green }}>{riskData.frequency.toFixed(1)}/10</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
              
              {/* Axis labels */}
              <div style={{ position: 'absolute', left: '50%', bottom: '10px', transform: 'translateX(-50%)', fontSize: '13px', fontWeight: 500, color: colors.textSecondary }}>Frequency →</div>
              <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '13px', fontWeight: 500, color: colors.textSecondary }}>Impact →</div>
            </div>
            
            {/* Legend - Horizontal below the graph */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '16px', 
              flexWrap: 'wrap',
              gap: '12px',
              backgroundColor: 'rgba(28, 28, 30, 0.7)', 
              padding: '10px', 
              borderRadius: '8px',
              opacity: animateIn ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out 0.6s'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: colors.textPrimary, marginRight: '12px' }}>Risk Categories:</div>
              {['Cyber', 'Climate', 'Compliance', 'Technology', 'Operational', 'Health', 'ESG', 'Geopolitical'].map((category, i) => {
                let color;
                switch(category) {
                  case 'Cyber': color = '#0A84FF'; break;
                  case 'Climate': color = '#30D158'; break;
                  case 'Compliance': color = '#FF9F0A'; break;
                  case 'Technology': color = '#5E5CE6'; break;
                  case 'Operational': color = '#FF375F'; break;
                  case 'Health': color = '#BF5AF2'; break;
                  case 'ESG': color = '#64D2FF'; break;
                  case 'Geopolitical': color = '#FFF23F'; break;
                  default: color = '#FFFFFF';
                }
                
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color, marginRight: '6px' }}></div>
                    <span style={{ fontSize: '11px', color: colors.textSecondary }}>{category}</span>
                  </div>
                );
              })}
            </div>
          </ChartContainer>
        </div>
      </div>
      
      <style>
        {`
          @keyframes riskPointFadeIn {
            from {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.6);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default EmergingRiskSection;
