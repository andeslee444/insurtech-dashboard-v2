import React from 'react';
import { regulatoryImpactData, regulatoryHeatmapData } from '../data/mockData';

const RegulatoryLandscapeSection: React.FC = () => {
  return (
    <div className="regulatory-landscape-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Regulatory Impact Analysis</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Regulation</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Complexity (1-10)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Compliance (1-10)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Opportunity (1-10)</th>
                </tr>
              </thead>
              <tbody>
                {regulatoryImpactData.sort((a, b) => b.opportunity - a.opportunity).map((item) => (
                  <tr key={item.regulation}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.regulation}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: item.complexity > 8 ? '#FF453A' : '#FF9F0A' }}>{item.complexity.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: item.compliance < 6 ? '#FF9F0A' : '#30D158' }}>{item.compliance.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF', fontWeight: 'bold' }}>{item.opportunity.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual representation of regulatory opportunity */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
              {regulatoryImpactData.sort((a, b) => b.opportunity - a.opportunity).slice(0, 4).map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '120px', fontSize: '12px' }}>{item.regulation}</div>
                  <div style={{ flex: 1, marginLeft: '10px', position: 'relative' }}>
                    <div style={{ 
                      height: '20px', 
                      width: '100%', 
                      backgroundColor: '#2C2C2E', 
                      borderRadius: '4px',
                      border: '1px solid #5E5E5E'
                    }}>
                      {/* Complexity indicator */}
                      <div style={{ 
                        position: 'absolute',
                        height: '20px', 
                        width: `${(item.complexity / 10) * 100}%`, 
                        backgroundColor: '#FF453A', 
                        borderRadius: '4px 0 0 4px',
                        opacity: 0.5,
                        zIndex: 1
                      }} />
                      
                      {/* Compliance indicator */}
                      <div style={{ 
                        position: 'absolute',
                        height: '20px', 
                        width: `${(item.compliance / 10) * 100}%`, 
                        backgroundColor: '#30D158', 
                        borderRadius: '4px 0 0 4px',
                        opacity: 0.5,
                        zIndex: 2
                      }} />
                      
                      {/* Opportunity indicator */}
                      <div style={{ 
                        position: 'absolute',
                        height: '20px', 
                        width: `${(item.opportunity / 10) * 100}%`, 
                        backgroundColor: '#0A84FF', 
                        borderRadius: '4px 0 0 4px',
                        opacity: 0.8,
                        zIndex: 3
                      }} />
                    </div>
                    
                    {/* Opportunity score */}
                    <div style={{
                      position: 'absolute',
                      right: `${100 - (item.opportunity / 10) * 100}%`,
                      top: '0',
                      transform: 'translateX(50%)',
                      fontSize: '12px',
                      color: '#0A84FF',
                      fontWeight: 'bold'
                    }}>
                      {item.opportunity.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              AI Governance presents the highest opportunity (8.8) due to high complexity and low current compliance levels.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Regulatory Heatmap by Region</h3>
          <div className="chart-area" style={{ height: '350px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Region</th>
                  <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E' }}>Data Privacy</th>
                  <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E' }}>Consumer Protection</th>
                  <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E' }}>Capital Requirements</th>
                  <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E' }}>ESG Reporting</th>
                  <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E' }}>Cyber Security</th>
                  <th style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E' }}>AI Governance</th>
                </tr>
              </thead>
              <tbody>
                {regulatoryHeatmapData.map((item) => (
                  <tr key={item.region}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.region}</td>
                    <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E', backgroundColor: getHeatmapColor(item.dataPrivacy) }}>{item.dataPrivacy.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E', backgroundColor: getHeatmapColor(item.consumerProtection) }}>{item.consumerProtection.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E', backgroundColor: getHeatmapColor(item.capitalRequirements) }}>{item.capitalRequirements.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E', backgroundColor: getHeatmapColor(item.esgReporting) }}>{item.esgReporting.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E', backgroundColor: getHeatmapColor(item.cyberSecurity) }}>{item.cyberSecurity.toFixed(1)}</td>
                    <td style={{ padding: '8px', textAlign: 'center', borderBottom: '1px solid #5E5E5E', backgroundColor: getHeatmapColor(item.aiGovernance) }}>{item.aiGovernance.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Legend */}
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(255, 69, 58, 0.2)', marginRight: '5px' }}></div>
                <span style={{ fontSize: '12px', marginRight: '15px' }}>Low</span>
                
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(255, 159, 10, 0.4)', marginRight: '5px' }}></div>
                <span style={{ fontSize: '12px', marginRight: '15px' }}>Medium</span>
                
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(48, 209, 88, 0.6)', marginRight: '5px' }}></div>
                <span style={{ fontSize: '12px', marginRight: '15px' }}>High</span>
                
                <div style={{ width: '20px', height: '20px', backgroundColor: 'rgba(10, 132, 255, 0.8)', marginRight: '5px' }}></div>
                <span style={{ fontSize: '12px' }}>Very High</span>
              </div>
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Europe has the most stringent regulatory environment overall, particularly for data privacy (9.2) and ESG reporting (8.5).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get heatmap cell color based on value
const getHeatmapColor = (value: number): string => {
  if (value < 6.5) return 'rgba(255, 69, 58, 0.2)'; // Low - red with low opacity
  if (value < 7.5) return 'rgba(255, 159, 10, 0.4)'; // Medium - orange with medium opacity
  if (value < 8.5) return 'rgba(48, 209, 88, 0.6)'; // High - green with medium-high opacity
  return 'rgba(10, 132, 255, 0.8)'; // Very high - blue with high opacity
};

export default RegulatoryLandscapeSection;
