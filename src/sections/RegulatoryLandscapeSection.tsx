import React, { useState, useEffect } from 'react';
import { regulatoryImpactData, regulatoryHeatmapData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import { colors } from '../components/common/ChartContainer';

const RegulatoryLandscapeSection: React.FC = () => {
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredRegulation, setHoveredRegulation] = useState<string | null>(null);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Enhanced heatmap color function with more Apple-like colors and transparency
  const getHeatmapColor = (value: number): string => {
    if (value < 6.5) return `rgba(255, 69, 58, ${value / 10})`; // Low - red with dynamic opacity
    if (value < 7.5) return `rgba(255, 159, 10, ${value / 12})`; // Medium - orange with dynamic opacity
    if (value < 8.5) return `rgba(48, 209, 88, ${value / 14})`; // High - green with dynamic opacity
    return `rgba(10, 132, 255, ${value / 13})`; // Very high - blue with dynamic opacity
  };
  
  return (
    <div className="regulatory-landscape-section">
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Regulatory Impact Analysis"
            insight="AI Governance presents the highest opportunity (8.8) due to high complexity and low current compliance levels, creating a strategic investment window."
          >
            <div style={{ 
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out'
            }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 6px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px', textAlign: 'left', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Regulation</th>
                    <th style={{ padding: '8px', textAlign: 'center', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Complexity</th>
                    <th style={{ padding: '8px', textAlign: 'center', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Compliance</th>
                    <th style={{ padding: '8px', textAlign: 'center', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Opportunity</th>
                  </tr>
                </thead>
                <tbody>
                  {regulatoryImpactData.sort((a, b) => b.opportunity - a.opportunity).map((item, index) => (
                    <tr 
                      key={item.regulation} 
                      style={{
                        backgroundColor: hoveredRegulation === item.regulation ? 'rgba(58, 58, 60, 0.6)' : 'rgba(58, 58, 60, 0.3)',
                        borderRadius: '8px',
                        opacity: animateIn ? 1 : 0,
                        transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.3s ease-out ${0.1 + index * 0.05}s`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setHoveredRegulation(item.regulation)}
                      onMouseLeave={() => setHoveredRegulation(null)}
                    >
                      <td style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '8px 0 0 8px', fontWeight: 500 }}>{item.regulation}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                        <div style={{ 
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '13px',
                          fontWeight: 600,
                          backgroundColor: item.complexity > 8 ? 'rgba(255, 69, 58, 0.15)' : 'rgba(255, 159, 10, 0.15)',
                          color: item.complexity > 8 ? colors.red : colors.orange,
                          boxShadow: hoveredRegulation === item.regulation ? `0 2px 8px ${item.complexity > 8 ? 'rgba(255, 69, 58, 0.2)' : 'rgba(255, 159, 10, 0.2)'}` : 'none',
                          transition: 'box-shadow 0.2s ease'
                        }}>
                          {item.complexity.toFixed(1)}
                        </div>
                      </td>
                      <td style={{ padding: '12px 8px', textAlign: 'center' }}>
                        <div style={{ 
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '13px',
                          fontWeight: 600,
                          backgroundColor: item.compliance < 6 ? 'rgba(255, 159, 10, 0.15)' : 'rgba(48, 209, 88, 0.15)',
                          color: item.compliance < 6 ? colors.orange : colors.green,
                          boxShadow: hoveredRegulation === item.regulation ? `0 2px 8px ${item.compliance < 6 ? 'rgba(255, 159, 10, 0.2)' : 'rgba(48, 209, 88, 0.2)'}` : 'none',
                          transition: 'box-shadow 0.2s ease'
                        }}>
                          {item.compliance.toFixed(1)}
                        </div>
                      </td>
                      <td style={{ padding: '12px 8px', textAlign: 'center', borderRadius: '0 8px 8px 0' }}>
                        <div style={{ 
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '13px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(10, 132, 255, 0.15)',
                          color: colors.blue.primary,
                          boxShadow: hoveredRegulation === item.regulation ? '0 0 12px rgba(10, 132, 255, 0.3)' : 'none',
                          transition: 'box-shadow 0.2s ease'
                        }}>
                          {item.opportunity.toFixed(1)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Visual representation of regulatory opportunity */}
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column' }}>
                {regulatoryImpactData.sort((a, b) => b.opportunity - a.opportunity).slice(0, 4).map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px',
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.4s ease-out ${0.3 + index * 0.05}s`,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredRegulation(item.regulation)}
                    onMouseLeave={() => setHoveredRegulation(null)}
                  >
                    <div style={{ width: '120px', fontSize: '13px', color: hoveredRegulation === item.regulation ? colors.textPrimary : colors.textSecondary }}>{item.regulation}</div>
                    <div style={{ flex: 1, marginLeft: '10px', position: 'relative' }}>
                      <div style={{ 
                        height: '24px', 
                        width: '100%', 
                        backgroundColor: 'rgba(44, 44, 46, 0.6)', 
                        borderRadius: '12px',
                        border: `1px solid ${colors.border}`,
                        overflow: 'hidden'
                      }}>
                        {/* Complexity indicator */}
                        <div style={{ 
                          position: 'absolute',
                          height: '24px', 
                          width: `${(item.complexity / 10) * 100}%`, 
                          background: `linear-gradient(90deg, ${colors.red}70, ${colors.red}40)`, 
                          borderRadius: '12px 0 0 12px',
                          zIndex: 1,
                          opacity: hoveredRegulation === item.regulation ? 0.8 : 0.5,
                          transition: 'opacity 0.2s ease'
                        }} />
                        
                        {/* Compliance indicator */}
                        <div style={{ 
                          position: 'absolute',
                          height: '24px', 
                          width: `${(item.compliance / 10) * 100}%`, 
                          background: `linear-gradient(90deg, ${colors.green}70, ${colors.green}40)`, 
                          borderRadius: '12px 0 0 12px',
                          zIndex: 2,
                          opacity: hoveredRegulation === item.regulation ? 0.8 : 0.5,
                          transition: 'opacity 0.2s ease'
                        }} />
                        
                        {/* Opportunity indicator */}
                        <div style={{ 
                          position: 'absolute',
                          height: '24px', 
                          width: `${(item.opportunity / 10) * 100}%`, 
                          background: `linear-gradient(90deg, ${colors.blue.primary}90, ${colors.blue.primary}50)`, 
                          borderRadius: '12px 0 0 12px',
                          boxShadow: hoveredRegulation === item.regulation ? `0 0 10px ${colors.blue.primary}50` : 'none',
                          zIndex: 3,
                          opacity: hoveredRegulation === item.regulation ? 1 : 0.8,
                          transition: 'opacity 0.2s ease, box-shadow 0.2s ease'
                        }} />
                      </div>
                      
                      {/* Opportunity score */}
                      <div style={{
                        position: 'absolute',
                        right: `${100 - (item.opportunity / 10) * 100}%`,
                        top: '50%',
                        transform: 'translate(50%, -50%)',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: colors.blue.primary,
                        color: '#FFFFFF',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        boxShadow: '0 2px 8px rgba(10, 132, 255, 0.3)'
                      }}>
                        {item.opportunity.toFixed(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div style={{ 
                marginTop: '16px', 
                display: 'flex', 
                justifyContent: 'center', 
                fontSize: '12px', 
                color: colors.textSecondary,
                gap: '16px',
                opacity: animateIn ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out 0.6s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.red, marginRight: '6px' }}></div>
                  <span>Complexity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.green, marginRight: '6px' }}></div>
                  <span>Compliance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.blue.primary, marginRight: '6px' }}></div>
                  <span>Opportunity</span>
                </div>
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer 
            title="Regulatory Heatmap by Region"
            insight="Europe has the most stringent regulatory environment, particularly for data privacy (9.2) and ESG reporting (8.5), demanding specialized compliance solutions."
          >
            <div style={{ 
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out 0.2s'
            }}>
              <div className="heatmap-table-container" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '3px', marginBottom: '20px' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: colors.textSecondary }}>Region</th>
                      <th style={{ padding: '8px', textAlign: 'center', fontSize: '14px', color: colors.textSecondary }}>Data Privacy</th>
                      <th style={{ padding: '8px', textAlign: 'center', fontSize: '14px', color: colors.textSecondary }}>Consumer Protection</th>
                      <th style={{ padding: '8px', textAlign: 'center', fontSize: '14px', color: colors.textSecondary }}>Capital Requirements</th>
                      <th style={{ padding: '8px', textAlign: 'center', fontSize: '14px', color: colors.textSecondary }}>ESG Reporting</th>
                      <th style={{ padding: '8px', textAlign: 'center', fontSize: '14px', color: colors.textSecondary }}>Cyber Security</th>
                      <th style={{ padding: '8px', textAlign: 'center', fontSize: '14px', color: colors.textSecondary }}>AI Governance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regulatoryHeatmapData.map((item, index) => (
                      <tr key={item.region} style={{
                        opacity: animateIn ? 1 : 0,
                        transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.3s ease-out ${0.1 + index * 0.05}s`
                      }}>
                        <td style={{ 
                          padding: '12px 16px', 
                          textAlign: 'left', 
                          backgroundColor: 'rgba(58, 58, 60, 0.3)', 
                          borderRadius: '8px',
                          fontWeight: 500
                        }}>
                          {item.region}
                        </td>
                        {[
                          item.dataPrivacy,
                          item.consumerProtection,
                          item.capitalRequirements,
                          item.esgReporting,
                          item.cyberSecurity,
                          item.aiGovernance
                        ].map((value, i) => (
                          <td 
                            key={i} 
                            style={{ 
                              padding: '12px 8px', 
                              textAlign: 'center', 
                              backgroundColor: getHeatmapColor(value),
                              borderRadius: '8px',
                              fontWeight: value > 8 ? 600 : 400,
                              boxShadow: value > 8.5 ? '0 2px 6px rgba(0, 0, 0, 0.2)' : 'none',
                              color: value > 8 ? '#FFFFFF' : colors.textPrimary,
                              transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            {value.toFixed(1)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Interactive Legend */}
              <div style={{ 
                marginTop: '20px', 
                padding: '12px', 
                borderRadius: '10px', 
                backgroundColor: 'rgba(44, 44, 46, 0.6)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                opacity: animateIn ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out 0.5s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: 'rgba(255, 69, 58, 0.3)', 
                      borderRadius: '4px',
                      marginRight: '8px' 
                    }}></div>
                    <span style={{ fontSize: '13px' }}>Low (5.0-6.5)</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: 'rgba(255, 159, 10, 0.4)', 
                      borderRadius: '4px',
                      marginRight: '8px' 
                    }}></div>
                    <span style={{ fontSize: '13px' }}>Medium (6.6-7.5)</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: 'rgba(48, 209, 88, 0.5)', 
                      borderRadius: '4px',
                      marginRight: '8px' 
                    }}></div>
                    <span style={{ fontSize: '13px' }}>High (7.6-8.5)</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '20px', 
                      height: '20px', 
                      backgroundColor: 'rgba(10, 132, 255, 0.6)', 
                      borderRadius: '4px',
                      marginRight: '8px' 
                    }}></div>
                    <span style={{ fontSize: '13px' }}>Very High (8.6-10)</span>
                  </div>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default RegulatoryLandscapeSection;
