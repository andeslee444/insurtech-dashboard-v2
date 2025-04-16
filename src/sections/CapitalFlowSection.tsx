import React from 'react';
import { investmentFlowData, valuationTrendsData } from '../data/mockData';

const CapitalFlowSection: React.FC = () => {
  return (
    <div className="capital-flow-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Investment Flow Analysis</h3>
          <div className="chart-area" style={{ height: '350px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            {/* Simplified Sankey diagram representation */}
            <div style={{ display: 'flex', height: '300px' }}>
              {/* Sources column */}
              <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <div style={{ 
                  backgroundColor: '#0A84FF', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  VC Firms<br />$2.8B
                </div>
                <div style={{ 
                  backgroundColor: '#5E5CE6', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  PE Firms<br />$1.6B
                </div>
                <div style={{ 
                  backgroundColor: '#FF9F0A', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Corporate VC<br />$1.2B
                </div>
              </div>
              
              {/* Flow arrows */}
              <div style={{ width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ borderTop: '2px solid #8E8E93', width: '100%' }}></div>
              </div>
              
              {/* Categories column */}
              <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <div style={{ 
                  backgroundColor: '#30D158', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Underwriting Tech<br />$1.6B
                </div>
                <div style={{ 
                  backgroundColor: '#FF453A', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Claims Tech<br />$1.3B
                </div>
                <div style={{ 
                  backgroundColor: '#BF5AF2', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Distribution Tech<br />$1.2B
                </div>
                <div style={{ 
                  backgroundColor: '#64D2FF', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Data Analytics<br />$1.6B
                </div>
              </div>
              
              {/* Flow arrows */}
              <div style={{ width: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ borderTop: '2px solid #8E8E93', width: '100%' }}></div>
              </div>
              
              {/* Stages column */}
              <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <div style={{ 
                  backgroundColor: '#FF9F0A', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Early Stage<br />$2.1B
                </div>
                <div style={{ 
                  backgroundColor: '#0A84FF', 
                  padding: '10px', 
                  borderRadius: '4px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  height: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  Growth Stage<br />$3.5B
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              VC firms are the largest source of capital ($2.8B), with Underwriting Tech and Data Analytics receiving the most funding ($1.6B each).
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Valuation Trends by Stage</h3>
          <div className="chart-area" style={{ height: '350px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Category</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Seed ($M)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Series A ($M)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Series B ($M)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Series C ($M)</th>
                </tr>
              </thead>
              <tbody>
                {valuationTrendsData.sort((a, b) => b.seriesC - a.seriesC).map((item) => (
                  <tr key={item.category}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.category}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>${item.seed}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>${item.seriesA}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>${item.seriesB}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF' }}>${item.seriesC}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual representation of valuation trends */}
            <div style={{ marginTop: '20px', display: 'flex', height: '150px', alignItems: 'flex-end' }}>
              {valuationTrendsData.map((item, index) => (
                <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: index < valuationTrendsData.length - 1 ? '10px' : '0' }}>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ 
                      width: '80%', 
                      height: `${(item.seriesC / 400) * 100}px`, 
                      backgroundColor: '#0A84FF',
                      borderRadius: '4px 4px 0 0',
                    }}></div>
                    <div style={{ 
                      width: '80%', 
                      height: `${(item.seriesB / 400) * 100}px`, 
                      backgroundColor: '#5E5CE6',
                    }}></div>
                    <div style={{ 
                      width: '80%', 
                      height: `${(item.seriesA / 400) * 100}px`, 
                      backgroundColor: '#FF9F0A',
                    }}></div>
                    <div style={{ 
                      width: '80%', 
                      height: `${(item.seed / 400) * 100}px`, 
                      backgroundColor: '#30D158',
                      borderRadius: '0 0 4px 4px',
                    }}></div>
                  </div>
                  <div style={{ marginTop: '5px', fontSize: '10px', textAlign: 'center', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Cyber Solutions and Embedded Platforms command the highest valuations across all funding stages.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalFlowSection;
