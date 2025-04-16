import React, { useState, useEffect } from 'react';
import { channelShareData, channelEfficiencyData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import { colors } from '../components/common/ChartContainer';

const DistributionChannelSection: React.FC = () => {
  const [animateIn, setAnimateIn] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get maximum values for scaling
  const maxEfficiency = Math.max(...channelEfficiencyData.map(item => item.efficiency));
  
  // Calculate color based on efficiency
  const getEfficiencyColor = (efficiency: number): string => {
    if (efficiency >= 8) return colors.green;
    if (efficiency >= 7) return colors.blue.primary;
    if (efficiency >= 6) return colors.orange;
    return colors.red;
  };
  
  return (
    <div className="distribution-channel-section animate-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Distribution Channel Evolution" 
            insight="Direct digital channels and embedded insurance are growing significantly, while traditional agent-based distribution is declining."
          >
            <div style={{ marginBottom: '20px' }}>
              <div className="channel-evolution-chart" style={{ 
                height: '250px', 
                display: 'flex', 
                alignItems: 'flex-end',
                marginTop: '20px',
                position: 'relative',
                paddingLeft: '40px',
                paddingBottom: '30px'
              }}>
                {/* Y-axis */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: '30px', width: '40px' }}>
                  {[0, 25, 50, 75, 100].map((tick) => (
                    <div key={tick} style={{ position: 'absolute', bottom: `${tick}%`, left: 0, right: 0 }}>
                      <div style={{ 
                        position: 'absolute', 
                        right: '10px', 
                        transform: 'translateY(50%)', 
                        fontSize: '10px', 
                        color: colors.textSecondary 
                      }}>
                        {100 - tick}%
                      </div>
                      <div style={{ 
                        position: 'absolute', 
                        left: '15px', 
                        right: 0, 
                        height: '1px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                      }}></div>
                    </div>
                  ))}
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '10px', 
                    transform: 'rotate(-90deg) translateX(-50%)', 
                    transformOrigin: 'left', 
                    fontSize: '12px', 
                    color: colors.textSecondary,
                    whiteSpace: 'nowrap'
                  }}>
                    Market Share
                  </div>
                </div>
                
                {channelShareData.map((item, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      flex: 1, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'flex-end',
                      marginRight: index < channelShareData.length - 1 ? '15px' : '0',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{ 
                        height: `${item.embedded}%`, 
                        backgroundColor: colors.green,
                        transition: `height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + index * 0.1}s`,
                        transform: animateIn ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'bottom',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        borderTopLeftRadius: item.embedded > 5 ? '4px' : '0',
                        borderTopRightRadius: item.embedded > 5 ? '4px' : '0'
                      }}
                    >
                      {item.embedded > 5 && (
                        <span style={{ 
                          color: 'white', 
                          fontSize: '11px', 
                          fontWeight: 'bold',
                          opacity: animateIn ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out',
                          transitionDelay: '1s'
                        }}>
                          {item.embedded}%
                        </span>
                      )}
                    </div>
                    <div 
                      style={{ 
                        height: `${item.agent}%`, 
                        backgroundColor: colors.orange,
                        transform: animateIn ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'bottom',
                        transition: `height 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + index * 0.1}s`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {item.agent > 10 && (
                        <span style={{ 
                          color: 'white', 
                          fontSize: '11px', 
                          fontWeight: 'bold',
                          opacity: animateIn ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out',
                          transitionDelay: '1s'
                        }}>
                          {item.agent}%
                        </span>
                      )}
                    </div>
                    <div 
                      style={{ 
                        height: `${item.broker}%`, 
                        backgroundColor: colors.purple,
                        transform: animateIn ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'bottom',
                        transition: `height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.2 + index * 0.1}s`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {item.broker > 10 && (
                        <span style={{ 
                          color: 'white', 
                          fontSize: '11px', 
                          fontWeight: 'bold',
                          opacity: animateIn ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out',
                          transitionDelay: '1s'
                        }}>
                          {item.broker}%
                        </span>
                      )}
                    </div>
                    <div 
                      style={{ 
                        height: `${item.direct}%`, 
                        backgroundColor: colors.blue.primary,
                        transform: animateIn ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: 'bottom',
                        transition: `height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.25 + index * 0.1}s`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomLeftRadius: '4px',
                        borderBottomRightRadius: '4px'
                      }}
                    >
                      {item.direct > 10 && (
                        <span style={{ 
                          color: 'white', 
                          fontSize: '11px', 
                          fontWeight: 'bold',
                          opacity: animateIn ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out',
                          transitionDelay: '1s'
                        }}>
                          {item.direct}%
                        </span>
                      )}
                    </div>
                    <div style={{ 
                      marginTop: '8px', 
                      fontSize: '13px', 
                      textAlign: 'center',
                      color: colors.textPrimary,
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? 'translateY(0)' : 'translateY(-5px)',
                      transition: 'all 0.3s ease-in-out',
                      transitionDelay: `${0.6 + index * 0.1}s`
                    }}>
                      {item.year}
                    </div>
                    {/* X-axis tick mark */}
                    <div style={{ 
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      height: '8px',
                      width: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateX(-50%)'
                    }}></div>
                  </div>
                ))}
              </div>
              
              {/* Legend */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginTop: '16px',
                opacity: animateIn ? 1 : 0,
                transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s ease-in-out',
                transitionDelay: '0.8s'
              }}>
                {[
                  { label: 'Direct Digital', color: colors.blue.primary },
                  { label: 'Broker', color: colors.purple },
                  { label: 'Agent', color: colors.orange },
                  { label: 'Embedded', color: colors.green }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <div style={{ 
                      width: '12px', 
                      height: '12px', 
                      backgroundColor: item.color, 
                      marginRight: '6px',
                      borderRadius: '2px'
                    }}></div>
                    <span style={{ fontSize: '12px', color: colors.textSecondary }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ChartContainer>

          <ChartContainer 
            title="Channel Efficiency Analysis" 
            insight="Embedded/API channels show the highest efficiency (8.3) due to low customer acquisition costs and good conversion rates."
          >
            <div className="channel-efficiency-table" style={{ marginBottom: '20px' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
                borderBottom: `1px solid ${colors.border}`,
                paddingBottom: '10px',
                marginBottom: '5px',
                fontWeight: 500,
                fontSize: '13px'
              }}>
                <div>Channel</div>
                <div style={{ textAlign: 'right' }}>CAC ($)</div>
                <div style={{ textAlign: 'right' }}>Conv. (%)</div>
                <div style={{ textAlign: 'right' }}>LTV ($)</div>
                <div style={{ textAlign: 'right' }}>Efficiency</div>
              </div>
              
              {channelEfficiencyData.sort((a, b) => b.efficiency - a.efficiency).map((item, index) => (
                <div 
                  key={item.channel}
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
                    padding: '10px 0',
                    borderBottom: `1px solid ${colors.border}`,
                    alignItems: 'center',
                    backgroundColor: selectedChannel === item.channel ? 'rgba(72, 72, 74, 0.5)' : 'transparent',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${0.1 + index * 0.08}s`
                  }}
                  onMouseEnter={() => setSelectedChannel(item.channel)}
                  onMouseLeave={() => setSelectedChannel(null)}
                >
                  <div style={{ fontWeight: 500 }}>{item.channel}</div>
                  <div style={{ textAlign: 'right', color: colors.orange }}>${item.cac}</div>
                  <div style={{ textAlign: 'right', color: colors.green }}>{item.conversionRate}%</div>
                  <div style={{ textAlign: 'right', color: colors.blue.primary }}>${item.ltv}</div>
                  <div style={{ 
                    textAlign: 'right', 
                    fontWeight: 600,
                    color: getEfficiencyColor(item.efficiency)
                  }}>
                    {item.efficiency.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Efficiency visualization */}
            <div style={{ 
              marginTop: '24px',
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out',
              transitionDelay: '0.5s'
            }}>
              <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '16px', color: colors.textPrimary }}>
                Channel Efficiency Comparison
              </div>
              
              {channelEfficiencyData.sort((a, b) => b.efficiency - a.efficiency).map((item, index) => {
                const isSelected = selectedChannel === item.channel;
                const color = getEfficiencyColor(item.efficiency);
                
                return (
                  <div 
                    key={index}
                    style={{ 
                      marginBottom: '14px',
                      opacity: selectedChannel && !isSelected ? 0.6 : 1,
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={() => setSelectedChannel(item.channel)}
                    onMouseLeave={() => setSelectedChannel(null)}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '13px',
                        fontWeight: isSelected ? 600 : 500,
                        color: isSelected ? color : colors.textPrimary,
                        transition: 'all 0.2s ease'
                      }}>
                        {item.channel}
                      </div>
                      <div style={{ 
                        fontSize: '13px',
                        fontWeight: 600,
                        color: color
                      }}>
                        {item.efficiency.toFixed(1)}
                      </div>
                    </div>
                    
                    <div style={{ 
                      height: '8px',
                      backgroundColor: 'rgba(72, 72, 74, 0.5)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: `${(item.efficiency / 10) * 100}%`,
                        background: `linear-gradient(90deg, ${color}cc, ${color})`,
                        borderRadius: '4px',
                        transformOrigin: 'left',
                        transform: animateIn ? 'scaleX(1)' : 'scaleX(0)',
                        transition: `transform 1s cubic-bezier(0.17, 0.67, 0.32, 0.99) ${0.3 + index * 0.15}s`,
                        boxShadow: isSelected ? `0 0 10px ${color}99` : 'none'
                      }}></div>
                    </div>
                    
                    {isSelected && (
                      <div style={{ 
                        display: 'flex',
                        marginTop: '10px',
                        padding: '10px',
                        backgroundColor: 'rgba(58, 58, 60, 0.5)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        opacity: isSelected ? 1 : 0,
                        maxHeight: isSelected ? '100px' : '0',
                        transition: 'all 0.3s ease',
                        overflow: 'hidden'
                      }}>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                          <div style={{ color: colors.orange, fontWeight: 600, marginBottom: '4px' }}>${item.cac}</div>
                          <div style={{ color: colors.textSecondary, fontSize: '11px' }}>Acquisition Cost</div>
                        </div>
                        <div style={{ flex: 1, textAlign: 'center', borderLeft: `1px solid ${colors.border}`, borderRight: `1px solid ${colors.border}` }}>
                          <div style={{ color: colors.green, fontWeight: 600, marginBottom: '4px' }}>{item.conversionRate}%</div>
                          <div style={{ color: colors.textSecondary, fontSize: '11px' }}>Conversion Rate</div>
                        </div>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                          <div style={{ color: colors.blue.primary, fontWeight: 600, marginBottom: '4px' }}>${item.ltv}</div>
                          <div style={{ color: colors.textSecondary, fontSize: '11px' }}>Customer LTV</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default DistributionChannelSection;
