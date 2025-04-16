import React from 'react';
import { startupFundingData, startupCategoryData } from '../data/mockData';

const StartupEcosystemSection: React.FC = () => {
  return (
    <div className="startup-ecosystem-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Startup Funding by Stage</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Stage</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Count</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Avg Deal ($M)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Total Funding ($M)</th>
                </tr>
              </thead>
              <tbody>
                {startupFundingData.map((item) => (
                  <tr key={item.stage}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.stage}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>{item.count}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF' }}>${item.avgDeal.toFixed(1)}M</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#30D158' }}>${item.totalFunding.toFixed(1)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual representation of funding distribution */}
            <div style={{ marginTop: '20px', display: 'flex', height: '100px', alignItems: 'flex-end' }}>
              {startupFundingData.map((item, index) => (
                <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: index < startupFundingData.length - 1 ? '10px' : '0' }}>
                  <div style={{ 
                    width: '100%', 
                    height: `${(item.totalFunding / 1200) * 100}px`, 
                    backgroundColor: '#0A84FF',
                    borderRadius: '4px 4px 0 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingTop: '5px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    ${item.totalFunding}M
                  </div>
                  <div style={{ marginTop: '5px', fontSize: '12px' }}>{item.stage}</div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Series B and C rounds account for the largest share of total funding despite fewer deals, indicating concentration of capital in growth-stage companies.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Startup Categories</h3>
          <div className="chart-area" style={{ height: '350px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {startupCategoryData.sort((a, b) => b.growth - a.growth).map((item, index) => (
                <div key={item.category} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '180px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.category}
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                    {/* Bubble for company count */}
                    <div style={{ 
                      width: `${Math.max(30, (item.count / 100) * 60)}px`, 
                      height: `${Math.max(30, (item.count / 100) * 60)}px`, 
                      borderRadius: '50%', 
                      backgroundColor: '#5E5CE6',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '15px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {item.count}
                    </div>
                    
                    {/* Bar for funding */}
                    <div style={{ flex: 1, marginRight: '15px' }}>
                      <div style={{ 
                        height: '20px', 
                        width: `${(item.funding / 1300) * 100}%`, 
                        backgroundColor: '#0A84FF', 
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: '10px',
                        fontSize: '12px',
                        fontWeight: 'bold'
                      }}>
                        ${item.funding.toFixed(1)}M
                      </div>
                    </div>
                    
                    {/* Growth rate */}
                    <div style={{ 
                      width: '60px', 
                      textAlign: 'right', 
                      color: '#30D158',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}>
                      {item.growth.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Embedded Insurance shows the highest growth rate (38.5%), while Data & Analytics has the most startups (72) and highest funding ($1.05B).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupEcosystemSection;
