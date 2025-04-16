import React, { useState } from 'react';
import { technologyAdoptionData, technologyGapData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import BarChart from '../components/common/BarChart';
import { colors } from '../components/common/ChartContainer';

const TechnologyAdoptionSection: React.FC = () => {
  const [chartKey, setChartKey] = useState(0); // For animation rerendering
  
  // Format data for the adoption bar chart
  const adoptionChartData = technologyAdoptionData
    .sort((a, b) => b.adoption - a.adoption)
    .map(item => ({
      label: item.technology,
      value: item.adoption,
      suffix: '%'
    }));
  
  // Format data for the growth bar chart
  const growthChartData = technologyAdoptionData
    .sort((a, b) => b.growth - a.growth)
    .map(item => ({
      label: item.technology,
      value: item.growth,
      suffix: '%'
    }));
    
  // Format data for the investment bar chart
  const investmentChartData = technologyAdoptionData
    .sort((a, b) => b.investment - a.investment)
    .map(item => ({
      label: item.technology,
      value: item.investment,
      suffix: 'B',
      prefix: '$'
    }));

  return (
    <div className="technology-adoption-section animate-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Technology Adoption Rates" 
            insight="Cloud Computing has the highest adoption rate at 68%, while Digital Twins shows the lowest at 12%."
          >
            <BarChart 
              key={`adoption-${chartKey}`}
              data={adoptionChartData} 
              maxValue={80} 
              barColor={colors.blue.primary}
            />
          </ChartContainer>
          
          <ChartContainer 
            title="Technology Growth Rates" 
            insight="Digital Twins and Blockchain show the highest growth potential despite lower current adoption."
          >
            <BarChart 
              key={`growth-${chartKey}`}
              data={growthChartData} 
              maxValue={20} 
              barColor={colors.green}
            />
          </ChartContainer>
        </div>
        
        <ChartContainer 
          title="Investment in Technology ($B)" 
          insight="Cloud Computing and AI/ML receive the highest investment, indicating market confidence in these technologies."
        >
          <div style={{ height: '300px', paddingBottom: '20px', overflow: 'hidden' }}>
            <BarChart 
              key={`investment-${chartKey}`}
              data={investmentChartData} 
              maxValue={5.5} 
              barColor={colors.purple}
            />
          </div>
        </ChartContainer>
        
        <ChartContainer 
          title="Technology Gap Analysis" 
          insight="Underwriting shows the largest technology gap (35%), indicating significant opportunity for technology enablement."
        >
          <div style={{ height: '350px', padding: '20px 0' }}>
            {technologyGapData.sort((a, b) => b.gap - a.gap).map((item, index) => (
              <div key={item.category} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '24px',
                animation: `fadeIn 0.5s ease-out forwards ${0.1 + index * 0.05}s`,
                opacity: 0
              }}>
                <div style={{ 
                  width: '180px', 
                  fontSize: '14px', 
                  fontWeight: 500,
                  paddingRight: '16px',
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis' 
                }}>
                  {item.category}
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                  {/* Background bar (potential) */}
                  <div style={{ 
                    height: '24px', 
                    width: `${item.potential}%`, 
                    backgroundColor: 'rgba(94, 92, 230, 0.15)', 
                    borderRadius: '6px',
                    position: 'relative'
                  }}>
                    {/* Current progress */}
                    <div style={{ 
                      height: '24px', 
                      width: `${(item.current / item.potential) * 100}%`, 
                      background: `linear-gradient(90deg, ${colors.blue.primary} 0%, ${colors.blue.lighter1} 100%)`,
                      borderRadius: '6px 0 0 6px',
                      boxShadow: '0 2px 6px rgba(10, 132, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '8px',
                      transition: 'width 1s ease-out'
                    }}>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: 600, 
                        color: 'white',
                        opacity: item.current > 25 ? 1 : 0
                      }}>
                        {item.current}%
                      </span>
                    </div>
                    
                    {/* Gap indicator */}
                    <div style={{
                      position: 'absolute',
                      right: '0',
                      top: '-20px',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: colors.textPrimary
                    }}>
                      <span style={{ opacity: 0.7 }}>Potential:</span> {item.potential}%
                    </div>
                    
                    {/* Current indicator */}
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '-20px',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: colors.textPrimary
                    }}>
                      <span style={{ opacity: 0.7 }}>Current:</span> {item.current}%
                    </div>
                    
                    {/* Gap value - Repositioned to middle of bar */}
                    <div style={{
                      position: 'absolute',
                      left: `${item.current + (item.gap / 2)}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#fff',
                      backgroundColor: 'rgba(94, 92, 230, 0.9)',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      zIndex: 2,
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
                      display: item.gap < 10 ? 'none' : 'block'
                    }}>
                      {item.gap}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TechnologyAdoptionSection; 