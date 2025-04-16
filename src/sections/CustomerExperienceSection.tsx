import React, { useState, useEffect } from 'react';
import { customerJourneyData, painPointsData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import { colors } from '../components/common/ChartContainer';

const CustomerExperienceSection: React.FC = () => {
  const [animateIn, setAnimateIn] = useState(false);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="customer-experience-section">
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Customer Journey Analysis"
            insight="The Purchase stage shows the largest experience gap (3.2) between traditional and InsurTech offerings, representing a significant opportunity for disruption."
          >
            <div style={{ 
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out'
            }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 6px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px', textAlign: 'left', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Journey Stage</th>
                    <th style={{ padding: '8px', textAlign: 'center', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Traditional</th>
                    <th style={{ padding: '8px', textAlign: 'center', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>InsurTech</th>
                    <th style={{ padding: '8px', textAlign: 'center', borderBottom: `1px solid ${colors.border}`, color: colors.textSecondary, fontSize: '14px' }}>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  {customerJourneyData.sort((a, b) => b.gap - a.gap).map((item, index) => (
                    <tr key={item.stage} style={{
                      backgroundColor: 'rgba(58, 58, 60, 0.3)',
                      borderRadius: '8px',
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.3s ease-out ${0.1 + index * 0.05}s`
                    }}>
                      <td style={{ padding: '12px 16px', textAlign: 'left', borderRadius: '8px 0 0 8px', fontWeight: 500 }}>{item.stage}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'center', color: colors.textSecondary }}>{item.traditional.toFixed(1)}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'center', color: colors.green }}>{item.insurtech.toFixed(1)}</td>
                      <td style={{ padding: '12px 8px', textAlign: 'center', color: colors.blue.primary, fontWeight: 'bold', borderRadius: '0 8px 8px 0' }}>+{item.gap.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Visual representation of customer journey gaps */}
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column' }}>
                {customerJourneyData.map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '12px',
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                    transition: `all 0.4s ease-out ${0.3 + index * 0.05}s`
                  }}>
                    <div style={{ width: '100px', fontSize: '13px', color: colors.textSecondary }}>{item.stage}</div>
                    <div style={{ flex: 1, marginLeft: '10px', position: 'relative' }}>
                      <div style={{ 
                        height: '24px', 
                        width: '100%', 
                        backgroundColor: 'rgba(44, 44, 46, 0.6)', 
                        borderRadius: '12px',
                        border: `1px solid ${colors.border}`,
                        overflow: 'hidden'
                      }}>
                        {/* Traditional score */}
                        <div style={{ 
                          position: 'absolute',
                          height: '24px', 
                          width: `${(item.traditional / 10) * 100}%`, 
                          backgroundColor: 'rgba(142, 142, 147, 0.7)', 
                          borderRadius: '12px 0 0 12px',
                          backdropFilter: 'blur(4px)',
                          zIndex: 1
                        }} />
                        
                        {/* InsurTech score */}
                        <div style={{ 
                          position: 'absolute',
                          height: '24px', 
                          width: `${(item.insurtech / 10) * 100}%`, 
                          background: `linear-gradient(90deg, ${colors.green}70, ${colors.green}40)`, 
                          borderRadius: '12px 0 0 12px',
                          boxShadow: '0 0 10px rgba(48, 209, 88, 0.3)',
                          zIndex: 2
                        }} />
                      </div>
                      
                      {/* Gap label */}
                      <div style={{
                        position: 'absolute',
                        right: `${100 - (item.insurtech / 10) * 100}%`,
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
                        +{item.gap.toFixed(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ChartContainer>
          
          <ChartContainer 
            title="Customer Pain Points"
            insight="Pricing Transparency shows the highest opportunity score (8.8) due to high severity and low solution maturity, creating a clear target for innovation."
          >
            <div style={{ 
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out 0.2s'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                padding: '0 10px 12px',
                borderBottom: `1px solid ${colors.border}`,
                color: colors.textSecondary,
                fontSize: '13px',
                fontWeight: 500
              }}>
                <div style={{ width: '180px' }}>Pain Point</div>
                <div style={{ width: '60px', textAlign: 'center' }}>Severity</div>
                <div style={{ flex: 1, textAlign: 'center' }}>Solution Maturity</div>
                <div style={{ width: '80px', textAlign: 'center' }}>Opportunity</div>
              </div>
              
              {painPointsData.sort((a, b) => b.opportunity - a.opportunity).map((item, index) => (
                <div key={item.painPoint} style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '14px 10px',
                  borderBottom: `1px solid rgba(94, 94, 94, 0.15)`,
                  backgroundColor: index % 2 === 0 ? 'rgba(44, 44, 46, 0.3)' : 'transparent',
                  borderRadius: '8px',
                  margin: '8px 0',
                  opacity: animateIn ? 1 : 0,
                  transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                  transition: `all 0.3s ease-out ${0.2 + index * 0.05}s`
                }}>
                  <div style={{ width: '180px', fontSize: '14px', fontWeight: 500 }}>
                    {item.painPoint}
                  </div>
                  <div style={{ 
                    width: '60px', 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: item.severity > 8 ? colors.red : colors.orange,
                  }}>
                    {item.severity.toFixed(1)}
                  </div>
                  
                  <div style={{ flex: 1, padding: '0 15px' }}>
                    <div style={{ 
                      position: 'relative',
                      height: '8px', 
                      backgroundColor: 'rgba(44, 44, 46, 0.6)', 
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '8px', 
                        width: `${(item.solutionMaturity / 10) * 100}%`, 
                        background: `linear-gradient(90deg, ${colors.purple}90, ${colors.purple}50)`, 
                        borderRadius: '4px',
                        boxShadow: '0 0 8px rgba(94, 92, 230, 0.3)',
                      }} />
                    </div>
                  </div>
                  
                  <div style={{ 
                    width: '80px', 
                    textAlign: 'center',
                  }}>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      backgroundColor: 'rgba(10, 132, 255, 0.15)',
                      color: colors.blue.primary,
                      boxShadow: item.opportunity > 8 ? '0 0 10px rgba(10, 132, 255, 0.2)' : 'none'
                    }}>
                      {item.opportunity.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
              
              <div style={{ 
                marginTop: '20px', 
                display: 'flex', 
                justifyContent: 'center', 
                fontSize: '12px', 
                color: colors.textSecondary,
                gap: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.red, marginRight: '6px' }}></div>
                  <span>Severity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.purple, marginRight: '6px' }}></div>
                  <span>Solution Maturity</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.blue.primary, marginRight: '6px' }}></div>
                  <span>Opportunity Score</span>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperienceSection;
