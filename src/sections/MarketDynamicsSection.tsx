import React from 'react';
import { marketShareData, growthRateData } from '../data/mockData';

const MarketDynamicsSection: React.FC = () => {
  return (
    <div className="market-dynamics-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Market Share Evolution</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Year</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Traditional (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>InsurTech (%)</th>
                </tr>
              </thead>
              <tbody>
                {marketShareData.map((item) => (
                  <tr key={item.year}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.year}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>{item.traditional}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#30D158' }}>{item.insurtech}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              InsurTech market share has grown from 32% to 62% over the past 5 years, indicating a significant shift in the industry.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Growth Rate by Category</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {growthRateData.sort((a, b) => b.rate - a.rate).map((item, index) => (
                <div key={item.category} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '180px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.category}
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px' }}>
                    <div style={{ 
                      height: '20px', 
                      width: `${(item.rate / 30) * 100}%`, 
                      backgroundColor: '#0A84FF', 
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '10px',
                      fontSize: '12px',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      {item.rate}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Cyber Insurance and Climate Risk categories show the highest growth rates, presenting significant investment opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDynamicsSection;
