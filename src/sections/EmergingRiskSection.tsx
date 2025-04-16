import React from 'react';
import { emergingRisksData, riskMatrixData } from '../data/mockData';

const EmergingRiskSection: React.FC = () => {
  return (
    <div className="emerging-risk-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Emerging Risk Categories</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Risk Category</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Severity (1-10)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Readiness (1-10)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Opportunity (1-10)</th>
                </tr>
              </thead>
              <tbody>
                {emergingRisksData.sort((a, b) => b.opportunity - a.opportunity).map((item) => (
                  <tr key={item.category}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.category}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: item.severity > 8 ? '#FF453A' : '#F5F5F7' }}>{item.severity.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: item.readiness < 6 ? '#FF9F0A' : '#30D158' }}>{item.readiness.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF' }}>{item.opportunity.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Cyber Threats represent the highest severity risk with significant investment opportunity due to the gap between severity and readiness.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Risk Matrix</h3>
          <div className="chart-area" style={{ height: '400px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '50px', 
              left: '50px', 
              right: '50px', 
              bottom: '50px', 
              border: '1px solid #5E5E5E',
              borderRadius: '4px',
              background: 'linear-gradient(to right top, #FF453A, #FF9F0A, #30D158)'
            }}>
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
                
                return (
                  <div 
                    key={index}
                    style={{
                      position: 'absolute',
                      left: xPos,
                      top: yPos,
                      transform: 'translate(-50%, -50%)',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: '2px solid #F5F5F7',
                      zIndex: 2,
                      cursor: 'pointer',
                      boxShadow: '0 0 5px rgba(0,0,0,0.5)'
                    }}
                    title={`${item.risk}: Frequency ${item.frequency.toFixed(1)}, Impact ${item.impact.toFixed(1)}`}
                  />
                );
              })}
              
              {/* Axis labels */}
              <div style={{ position: 'absolute', left: '50%', bottom: '-30px', transform: 'translateX(-50%)', fontSize: '12px', color: '#8E8E93' }}>Frequency</div>
              <div style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%) rotate(-90deg)', fontSize: '12px', color: '#8E8E93' }}>Impact</div>
            </div>
            
            {/* Legend */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0A84FF', marginRight: '5px' }}></div>
                <span>Cyber</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#30D158', marginRight: '5px' }}></div>
                <span>Climate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF9F0A', marginRight: '5px' }}></div>
                <span>Compliance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#5E5CE6', marginRight: '5px' }}></div>
                <span>Technology</span>
              </div>
            </div>
            
            <div style={{ position: 'absolute', bottom: '10px', left: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Ransomware and Data Breach represent the highest impact cyber risks with significant frequency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergingRiskSection;
