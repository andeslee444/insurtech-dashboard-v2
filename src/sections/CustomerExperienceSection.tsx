import React from 'react';
import { customerJourneyData, painPointsData } from '../data/mockData';

const CustomerExperienceSection: React.FC = () => {
  return (
    <div className="customer-experience-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Customer Journey Analysis</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Journey Stage</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Traditional (1-10)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>InsurTech (1-10)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Gap</th>
                </tr>
              </thead>
              <tbody>
                {customerJourneyData.sort((a, b) => b.gap - a.gap).map((item) => (
                  <tr key={item.stage}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.stage}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>{item.traditional.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#30D158' }}>{item.insurtech.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF', fontWeight: 'bold' }}>{item.gap.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual representation of customer journey gaps */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
              {customerJourneyData.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '100px', fontSize: '12px' }}>{item.stage}</div>
                  <div style={{ flex: 1, marginLeft: '10px', position: 'relative' }}>
                    <div style={{ 
                      height: '20px', 
                      width: '100%', 
                      backgroundColor: '#2C2C2E', 
                      borderRadius: '4px',
                      border: '1px solid #5E5E5E'
                    }}>
                      {/* Traditional score */}
                      <div style={{ 
                        position: 'absolute',
                        height: '20px', 
                        width: `${(item.traditional / 10) * 100}%`, 
                        backgroundColor: '#8E8E93', 
                        borderRadius: '4px 0 0 4px',
                        zIndex: 1
                      }} />
                      
                      {/* InsurTech score */}
                      <div style={{ 
                        position: 'absolute',
                        height: '20px', 
                        width: `${(item.insurtech / 10) * 100}%`, 
                        backgroundColor: '#30D158', 
                        borderRadius: '4px 0 0 4px',
                        opacity: 0.7,
                        zIndex: 2
                      }} />
                    </div>
                    
                    {/* Gap label */}
                    <div style={{
                      position: 'absolute',
                      right: `${100 - (item.insurtech / 10) * 100}%`,
                      top: '0',
                      transform: 'translateX(50%)',
                      fontSize: '12px',
                      color: '#0A84FF',
                      fontWeight: 'bold'
                    }}>
                      +{item.gap.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              The Purchase stage shows the largest experience gap (3.2) between traditional and InsurTech offerings.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Customer Pain Points</h3>
          <div className="chart-area" style={{ height: '350px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {painPointsData.sort((a, b) => b.opportunity - a.opportunity).map((item, index) => (
                <div key={item.painPoint} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '180px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.painPoint}
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                    {/* Severity indicator */}
                    <div style={{ 
                      width: '60px', 
                      textAlign: 'center', 
                      color: item.severity > 8 ? '#FF453A' : '#FF9F0A',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginRight: '10px'
                    }}>
                      {item.severity.toFixed(1)}
                    </div>
                    
                    {/* Solution maturity bar */}
                    <div style={{ flex: 1, marginRight: '15px' }}>
                      <div style={{ 
                        height: '20px', 
                        width: `${(item.solutionMaturity / 10) * 100}%`, 
                        backgroundColor: '#5E5CE6', 
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '10px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        {item.solutionMaturity.toFixed(1)}
                      </div>
                    </div>
                    
                    {/* Opportunity score */}
                    <div style={{ 
                      width: '60px', 
                      textAlign: 'center', 
                      color: '#0A84FF',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      backgroundColor: '#2C2C2E',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {item.opportunity.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span><span style={{ color: '#FF453A', fontWeight: 'bold' }}>Red</span>: Severity</span>
                <span><span style={{ color: '#5E5CE6', fontWeight: 'bold' }}>Purple</span>: Solution Maturity</span>
                <span><span style={{ color: '#0A84FF', fontWeight: 'bold' }}>Blue</span>: Opportunity Score</span>
              </div>
              Pricing Transparency shows the highest opportunity score (8.8) due to high severity and low solution maturity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperienceSection;
