import React, { useState, useEffect } from 'react';
import { investmentFlowData, valuationTrendsData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import { colors } from '../components/common/ChartContainer';

const CapitalFlowSection: React.FC = () => {
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Investment source categories with their colors
  const sourceCategories = [
    { name: 'VC Firms', value: '$2.8B', color: colors.blue.primary, height: 80 },
    { name: 'PE Firms', value: '$1.6B', color: colors.purple, height: 60 },
    { name: 'Corporate VC', value: '$1.2B', color: colors.orange, height: 40 }
  ];
  
  // Technology categories with their colors
  const techCategories = [
    { name: 'Underwriting Tech', value: '$1.6B', color: colors.green, height: 70 },
    { name: 'Claims Tech', value: '$1.3B', color: colors.red, height: 60 },
    { name: 'Distribution Tech', value: '$1.2B', color: colors.purple, height: 50 },
    { name: 'Data Analytics', value: '$1.6B', color: colors.blue.lighter2, height: 60 }
  ];
  
  // Investment stages
  const stageCategories = [
    { name: 'Early Stage', value: '$2.1B', color: colors.orange, height: 100 },
    { name: 'Growth Stage', value: '$3.5B', color: colors.blue.primary, height: 140 }
  ];
  
  return (
    <div className="capital-flow-section">
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Investment Flow Analysis"
            insight="VC firms are the largest source of capital ($2.8B), with Underwriting Tech and Data Analytics receiving the most funding ($1.6B each)."
          >
            <div style={{ 
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out'
            }}>
              {/* Simplified Sankey diagram representation */}
              <div style={{ display: 'flex', height: '320px', alignItems: 'center' }}>
                {/* Sources column */}
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  {sourceCategories.map((source, index) => (
                    <div 
                      key={index}
                      style={{ 
                        backgroundColor: source.color,
                        background: `linear-gradient(135deg, ${source.color}, ${source.color}80)`,
                        padding: '10px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        height: `${source.height}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                        transform: animateIn ? 'translateX(0)' : 'translateX(-30px)',
                        opacity: animateIn ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${0.2 + index * 0.1}s`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setHoveredCategory(source.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div>
                        {source.name}<br />
                        <span style={{ fontSize: '16px', fontWeight: 700 }}>{source.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Flow arrows */}
                <div style={{ width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ 
                    borderTop: `2px solid ${colors.border}`,
                    width: '100%',
                    position: 'relative',
                    opacity: animateIn ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out 0.5s'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '-6px', 
                      right: '-4px', 
                      width: '0', 
                      height: '0', 
                      borderTop: '7px solid transparent', 
                      borderBottom: '7px solid transparent', 
                      borderLeft: `10px solid ${colors.border}`
                    }} />
                  </div>
                </div>
                
                {/* Categories column */}
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  {techCategories.map((tech, index) => (
                    <div 
                      key={index}
                      style={{ 
                        backgroundColor: tech.color,
                        background: `linear-gradient(135deg, ${tech.color}, ${tech.color}80)`,
                        padding: '10px', 
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        height: `${tech.height}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                        transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
                        opacity: animateIn ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${0.3 + index * 0.1}s`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setHoveredCategory(tech.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div>
                        {tech.name}<br />
                        <span style={{ fontSize: '16px', fontWeight: 700 }}>{tech.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Flow arrows */}
                <div style={{ width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ 
                    borderTop: `2px solid ${colors.border}`,
                    width: '100%',
                    position: 'relative',
                    opacity: animateIn ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out 0.6s'
                  }}>
                    <div style={{ 
                      position: 'absolute', 
                      top: '-6px', 
                      right: '-4px', 
                      width: '0', 
                      height: '0', 
                      borderTop: '7px solid transparent', 
                      borderBottom: '7px solid transparent', 
                      borderLeft: `10px solid ${colors.border}`
                    }} />
                  </div>
                </div>
                
                {/* Stages column */}
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  {stageCategories.map((stage, index) => (
                    <div 
                      key={index}
                      style={{ 
                        backgroundColor: stage.color,
                        background: `linear-gradient(135deg, ${stage.color}, ${stage.color}80)`,
                        padding: '10px', 
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        height: `${stage.height}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                        transform: animateIn ? 'translateX(0)' : 'translateX(30px)',
                        opacity: animateIn ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${0.4 + index * 0.1}s`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setHoveredCategory(stage.name)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div>
                        {stage.name}<br />
                        <span style={{ fontSize: '16px', fontWeight: 700 }}>{stage.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Investment flow labels */}
              <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-around', opacity: animateIn ? 1 : 0, transition: 'opacity 0.5s ease-in-out 0.7s' }}>
                <div style={{ width: '25%', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: colors.textSecondary }}>Sources</div>
                <div style={{ width: '25%', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: colors.textSecondary, marginLeft: '10%' }}>Categories</div>
                <div style={{ width: '25%', textAlign: 'center', fontSize: '14px', fontWeight: 500, color: colors.textSecondary, marginLeft: '10%' }}>Stages</div>
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer 
            title="Valuation Trends by Stage"
            insight="Cyber Solutions and Embedded Platforms command the highest valuations across all funding stages, with significant increases from Series B to Series C."
          >
            <div style={{ 
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out 0.2s'
            }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 6px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px', textAlign: 'left', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Category</th>
                    <th style={{ padding: '8px', textAlign: 'right', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Seed ($M)</th>
                    <th style={{ padding: '8px', textAlign: 'right', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Series A ($M)</th>
                    <th style={{ padding: '8px', textAlign: 'right', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Series B ($M)</th>
                    <th style={{ padding: '8px', textAlign: 'right', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Series C ($M)</th>
                  </tr>
                </thead>
                <tbody>
                  {valuationTrendsData.sort((a, b) => b.seriesC - a.seriesC).map((item, index) => (
                    <tr 
                      key={item.category} 
                      style={{
                        backgroundColor: hoveredCategory === item.category ? 'rgba(58, 58, 60, 0.6)' : 'rgba(58, 58, 60, 0.3)',
                        borderRadius: '8px',
                        opacity: animateIn ? 1 : 0,
                        transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.3s ease-out ${0.1 + index * 0.05}s`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={() => setHoveredCategory(item.category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <td style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '8px 0 0 8px', fontWeight: 500 }}>{item.category}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'right', color: colors.green }}>${item.seed}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'right', color: colors.orange }}>${item.seriesA}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'right', color: colors.purple }}>${item.seriesB}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'right', color: colors.blue.primary, fontWeight: 'bold', borderRadius: '0 8px 8px 0' }}>${item.seriesC}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Visual representation of valuation trends */}
              <div style={{ marginTop: '24px', display: 'flex', height: '180px', alignItems: 'flex-end', gap: '4px' }}>
                {valuationTrendsData.map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      flex: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.4s ease-out ${0.3 + index * 0.1}s`,
                      cursor: 'pointer',
                      height: '100%',
                    }}
                    onMouseEnter={() => setHoveredCategory(item.category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <div style={{ 
                        width: hoveredCategory === item.category ? '85%' : '75%', 
                        height: `${(item.seed / 400) * 100}px`, 
                        background: `linear-gradient(to top, ${colors.green}, ${colors.green}80)`,
                        borderRadius: '0 0 6px 6px',
                        transition: 'width 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: hoveredCategory === item.category ? `0 2px 8px ${colors.green}50` : 'none',
                      }}></div>
                      <div style={{ 
                        width: hoveredCategory === item.category ? '85%' : '75%', 
                        height: `${(item.seriesA / 400) * 100}px`, 
                        background: `linear-gradient(to top, ${colors.orange}, ${colors.orange}80)`,
                        transition: 'width 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: hoveredCategory === item.category ? `0 2px 8px ${colors.orange}50` : 'none',
                      }}></div>
                      <div style={{ 
                        width: hoveredCategory === item.category ? '85%' : '75%', 
                        height: `${(item.seriesB / 400) * 100}px`, 
                        background: `linear-gradient(to top, ${colors.purple}, ${colors.purple}80)`,
                        transition: 'width 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: hoveredCategory === item.category ? `0 2px 8px ${colors.purple}50` : 'none',
                      }}></div>
                      <div style={{ 
                        width: hoveredCategory === item.category ? '85%' : '75%', 
                        height: `${(item.seriesC / 400) * 100}px`, 
                        background: `linear-gradient(to top, ${colors.blue.primary}, ${colors.blue.primary}80)`,
                        borderRadius: '6px 6px 0 0',
                        transition: 'width 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: hoveredCategory === item.category ? `0 2px 8px ${colors.blue.primary}50` : 'none',
                      }}></div>
                    </div>
                    <div style={{ 
                      marginTop: '10px', 
                      fontSize: '11px', 
                      textAlign: 'center', 
                      maxWidth: '100%', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      whiteSpace: 'nowrap',
                      color: hoveredCategory === item.category ? colors.textPrimary : colors.textSecondary,
                      fontWeight: hoveredCategory === item.category ? 500 : 400,
                      transition: 'color 0.2s ease, font-weight 0.2s ease'
                    }}>
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div style={{ 
                marginTop: '20px', 
                display: 'flex', 
                justifyContent: 'center', 
                fontSize: '12px', 
                color: colors.textSecondary,
                gap: '16px',
                opacity: animateIn ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out 0.6s'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: colors.green, marginRight: '6px' }}></div>
                  <span>Seed</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: colors.orange, marginRight: '6px' }}></div>
                  <span>Series A</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: colors.purple, marginRight: '6px' }}></div>
                  <span>Series B</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: colors.blue.primary, marginRight: '6px' }}></div>
                  <span>Series C</span>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default CapitalFlowSection;
