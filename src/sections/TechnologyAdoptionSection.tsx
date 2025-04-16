import React from 'react';
import { technologyAdoptionData, technologyGapData } from '../data/mockData';

const TechnologyAdoptionSection: React.FC = () => {
  return (
    <div className="technology-adoption-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Technology Adoption Rates</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Technology</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Adoption (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Growth (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Investment ($B)</th>
                </tr>
              </thead>
              <tbody>
                {technologyAdoptionData.sort((a, b) => b.adoption - a.adoption).map((item) => (
                  <tr key={item.technology}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.technology}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>{item.adoption}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#30D158' }}>{item.growth}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF' }}>${item.investment}B</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Cloud Computing has the highest adoption rate, while Digital Twins shows the highest growth potential despite low current adoption.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Technology Gap Analysis</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {technologyGapData.sort((a, b) => b.gap - a.gap).map((item, index) => (
                <div key={item.category} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '180px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.category}
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px', position: 'relative' }}>
                    <div style={{ 
                      height: '20px', 
                      width: `${(item.potential / 100) * 100}%`, 
                      backgroundColor: '#3A3A3C', 
                      borderRadius: '4px',
                      border: '1px solid #5E5E5E'
                    }}>
                      <div style={{ 
                        height: '20px', 
                        width: `${(item.current / 100) * 100}%`, 
                        backgroundColor: '#0A84FF', 
                        borderRadius: '4px 0 0 4px',
                      }} />
                    </div>
                    <div style={{
                      position: 'absolute',
                      right: `${100 - (item.potential / 100) * 100}%`,
                      top: '0',
                      transform: 'translateX(50%)',
                      fontSize: '12px',
                      color: '#F5F5F7'
                    }}>
                      {item.potential}%
                    </div>
                    <div style={{
                      position: 'absolute',
                      right: `${100 - (item.current / 100) * 100}%`,
                      bottom: '-20px',
                      transform: 'translateX(50%)',
                      fontSize: '12px',
                      color: '#8E8E93'
                    }}>
                      {item.current}%
                    </div>
                    <div style={{
                      position: 'absolute',
                      right: `${100 - ((item.current + (item.gap / 2)) / 100) * 100}%`,
                      top: '0',
                      transform: 'translateX(50%)',
                      fontSize: '12px',
                      color: '#FF9F0A',
                      fontWeight: 'bold'
                    }}>
                      Gap: {item.gap}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '30px', fontSize: '14px', color: '#8E8E93' }}>
              Underwriting shows the largest technology gap (35%), indicating significant opportunity for technology enablement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAdoptionSection; 