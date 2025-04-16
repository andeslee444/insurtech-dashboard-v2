import React from 'react';
import { channelShareData, channelEfficiencyData } from '../data/mockData';

const DistributionChannelSection: React.FC = () => {
  return (
    <div className="distribution-channel-section">
      <div className="section-content">
        <div className="chart-container">
          <h3 className="chart-title">Distribution Channel Evolution</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Year</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Direct (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Broker (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Agent (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Embedded (%)</th>
                </tr>
              </thead>
              <tbody>
                {channelShareData.map((item) => (
                  <tr key={item.year}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.year}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF' }}>{item.direct}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#5E5CE6' }}>{item.broker}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#FF9F0A' }}>{item.agent}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#30D158' }}>{item.embedded}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual representation of channel evolution */}
            <div style={{ marginTop: '20px', display: 'flex', height: '120px' }}>
              {channelShareData.map((item, index) => (
                <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', marginRight: index < channelShareData.length - 1 ? '10px' : '0' }}>
                  <div style={{ 
                    width: '100%', 
                    height: `${item.embedded}%`, 
                    backgroundColor: '#30D158',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {item.embedded}%
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: `${item.agent}%`, 
                    backgroundColor: '#FF9F0A',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {item.agent}%
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: `${item.broker}%`, 
                    backgroundColor: '#5E5CE6',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {item.broker}%
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: `${item.direct}%`, 
                    backgroundColor: '#0A84FF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    {item.direct}%
                  </div>
                  <div style={{ marginTop: '5px', fontSize: '12px', textAlign: 'center' }}>{item.year}</div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Direct digital channels and embedded insurance are growing significantly, while traditional agent-based distribution is declining.
            </div>
          </div>
        </div>
        
        <div className="chart-container" style={{ marginTop: '30px' }}>
          <h3 className="chart-title">Channel Efficiency Analysis</h3>
          <div className="chart-area" style={{ height: '300px', backgroundColor: '#3A3A3C', borderRadius: '8px', padding: '20px', color: '#F5F5F7' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>Channel</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>CAC ($)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Conv. Rate (%)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>LTV ($)</th>
                  <th style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E' }}>Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {channelEfficiencyData.sort((a, b) => b.efficiency - a.efficiency).map((item) => (
                  <tr key={item.channel}>
                    <td style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #5E5E5E' }}>{item.channel}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#FF9F0A' }}>${item.cac}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#30D158' }}>{item.conversionRate}%</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', color: '#0A84FF' }}>${item.ltv}</td>
                    <td style={{ padding: '8px', textAlign: 'right', borderBottom: '1px solid #5E5E5E', fontWeight: 'bold' }}>{item.efficiency.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Visual representation of efficiency */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
              {channelEfficiencyData.sort((a, b) => b.efficiency - a.efficiency).map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ width: '120px', fontSize: '12px' }}>{item.channel}</div>
                  <div style={{ flex: 1, marginLeft: '10px' }}>
                    <div style={{ 
                      height: '20px', 
                      width: `${(item.efficiency / 10) * 100}%`, 
                      backgroundColor: '#0A84FF', 
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '10px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: 'white'
                    }}>
                      {item.efficiency.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#8E8E93' }}>
              Embedded/API channels show the highest efficiency (8.3) due to low customer acquisition costs and good conversion rates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionChannelSection;
