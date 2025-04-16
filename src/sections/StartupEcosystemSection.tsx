import React, { useState, useEffect } from 'react';
import { startupFundingData, startupCategoryData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import DataTable from '../components/common/DataTable';
import { colors } from '../components/common/ChartContainer';

const StartupEcosystemSection: React.FC = () => {
  const [hoverBarIndex, setHoverBarIndex] = useState<number | null>(null);
  const [hoverCategoryIndex, setHoverCategoryIndex] = useState<number | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  
  // Animation effect
  useEffect(() => {
    // Small delay to trigger animations
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Format funding data for the table
  const fundingTableData = startupFundingData.map(item => ({
    stage: item.stage,
    count: item.count,
    avgDeal: item.avgDeal.toFixed(1),
    totalFunding: item.totalFunding.toFixed(1)
  }));

  // Define table columns
  const fundingColumns = [
    { key: 'stage', header: 'Stage', align: 'left' as const },
    { key: 'count', header: 'Count', align: 'right' as const },
    { 
      key: 'avgDeal', 
      header: 'Avg Deal ($M)', 
      align: 'right' as const,
      format: (value: string) => `$${value}M`,
      cellStyle: { color: colors.blue.primary, fontWeight: 500 }
    },
    { 
      key: 'totalFunding', 
      header: 'Total Funding ($M)', 
      align: 'right' as const,
      format: (value: string) => `$${value}M`,
      cellStyle: { color: colors.green, fontWeight: 500 }
    }
  ];

  // Calculate the maximum funding amount for proportional scaling
  const maxFunding = Math.max(...startupFundingData.map(item => item.totalFunding));
  const maxCategoryFunding = Math.max(...startupCategoryData.map(item => item.funding));

  return (
    <div className="startup-ecosystem-section animate-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          <ChartContainer 
            title="Startup Funding by Stage"
            insight="Series B and C rounds account for the largest share of total funding despite fewer deals, indicating concentration of capital in growth-stage companies."
          >
            <DataTable 
              columns={fundingColumns} 
              data={fundingTableData} 
            />
            
            {/* Visual representation of funding distribution */}
            <div style={{ marginTop: '32px', display: 'flex', height: '180px', alignItems: 'flex-end' }}>
              {startupFundingData.map((item, index) => {
                const barHeight = (item.totalFunding / maxFunding) * 140;
                return (
                  <div 
                    key={index} 
                    style={{ 
                      flex: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      marginRight: index < startupFundingData.length - 1 ? '16px' : '0',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={() => setHoverBarIndex(index)}
                    onMouseLeave={() => setHoverBarIndex(null)}
                  >
                    <div 
                      className="funding-bar"
                      style={{ 
                        width: '100%', 
                        height: animateIn ? `${barHeight}px` : '0',
                        background: `linear-gradient(to top, ${colors.blue.primary} 0%, ${colors.blue.lighter1} 100%)`,
                        borderRadius: '6px 6px 0 0',
                        boxShadow: hoverBarIndex === index ? '0 4px 12px rgba(10, 132, 255, 0.4)' : '0 2px 8px rgba(10, 132, 255, 0.2)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingTop: '8px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: colors.textPrimary,
                        transform: hoverBarIndex === index ? 'translateY(-4px) scale(1.03)' : 'translateY(0) scale(1)',
                        opacity: animateIn ? 1 : 0,
                        transition: `all 0.6s ease-out ${0.2 + index * 0.1}s`
                      }}
                    >
                      ${item.totalFunding}M
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '-24px',
                      fontSize: '11px',
                      color: colors.textSecondary,
                      fontWeight: 400,
                      opacity: hoverBarIndex === index ? 1 : 0,
                      transform: hoverBarIndex === index ? 'translateY(0)' : 'translateY(-10px)',
                      transition: 'all 0.2s ease'
                    }}>
                      {item.count} companies
                    </div>
                    <div style={{ 
                      marginTop: '8px', 
                      fontSize: '13px',
                      color: hoverBarIndex === index ? colors.textPrimary : colors.textSecondary,
                      fontWeight: hoverBarIndex === index ? 600 : 500,
                      transition: 'all 0.2s ease' 
                    }}>
                      {item.stage}
                    </div>
                  </div>
                );
              })}
            </div>
          </ChartContainer>

          <ChartContainer 
            title="Average Deal Size by Stage" 
            insight="Deal size grows exponentially from Seed ($2.5M) to Series D+ ($120M), reflecting increasing capital requirements and valuation growth."
          >
            <div style={{ height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {startupFundingData.map((item, index) => {
                // Calculate bubble size based on average deal size
                const size = Math.max(40, Math.min(180, (item.avgDeal / 120) * 180));
                const delay = 0.3 + index * 0.15;
                
                return (
                  <div 
                    key={index}
                    className="deal-bubble"
                    style={{
                      position: 'relative',
                      margin: '0 10px',
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? 'scale(1)' : 'scale(0.6)',
                      transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`
                    }}
                    onMouseEnter={() => setHoverBarIndex(index)}
                    onMouseLeave={() => setHoverBarIndex(null)}
                  >
                    <div style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      borderRadius: '50%',
                      background: `radial-gradient(circle at 30% 30%, ${colors.orange}88, ${colors.orange})`,
                      boxShadow: hoverBarIndex === index ? '0 8px 24px rgba(255, 159, 10, 0.4)' : '0 4px 12px rgba(255, 159, 10, 0.2)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      padding: '12px',
                      color: 'white',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{ fontSize: size > 100 ? '18px' : '14px', fontWeight: 600 }}>
                        ${item.avgDeal}M
                      </div>
                      <div style={{ fontSize: size > 100 ? '14px' : '12px', opacity: 0.9 }}>
                        {item.stage}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ChartContainer>
        </div>

        <ChartContainer 
          title="Startup Categories" 
          insight="Embedded Insurance shows the highest growth rate (38.5%), while Data & Analytics has the most startups (72) and highest funding ($1.05B)."
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {startupCategoryData.sort((a, b) => b.growth - a.growth).map((item, index) => {
              const delay = 0.1 + index * 0.08;
              
              return (
                <div 
                  key={item.category}
                  className="category-row"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: index < startupCategoryData.length - 1 ? '20px' : '0',
                    padding: '10px',
                    borderRadius: '10px',
                    backgroundColor: hoverCategoryIndex === index ? 'rgba(58, 58, 60, 0.5)' : 'transparent',
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? 'translateY(0)' : 'translateY(10px)',
                    transition: `background-color 0.15s ease, opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`
                  }}
                  onMouseEnter={() => setHoverCategoryIndex(index)}
                  onMouseLeave={() => setHoverCategoryIndex(null)}
                >
                  <div style={{ 
                    width: '180px', 
                    fontSize: '14px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis' 
                  }}>
                    {item.category}
                  </div>
                  <div style={{ flex: 1, marginLeft: '16px', display: 'flex', alignItems: 'center' }}>
                    {/* Bubble for company count */}
                    <div style={{ 
                      width: `${Math.max(36, (item.count / 100) * 65)}px`, 
                      height: `${Math.max(36, (item.count / 100) * 65)}px`, 
                      borderRadius: '50%', 
                      background: `radial-gradient(circle at 30% 30%, ${colors.purple}AA, ${colors.purple})`,
                      boxShadow: '0 2px 8px rgba(94, 92, 230, 0.3)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: '20px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'white',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      transform: hoverCategoryIndex === index ? 'scale(1.08)' : 'scale(1)',
                    }}>
                      {item.count}
                    </div>
                    
                    {/* Bar for funding */}
                    <div style={{ flex: 1, marginRight: '20px' }}>
                      <div style={{ position: 'relative' }}>
                        <div style={{ 
                          height: '24px', 
                          width: `${(item.funding / maxCategoryFunding) * 100}%`, 
                          background: `linear-gradient(90deg, ${colors.blue.primary} 0%, ${colors.blue.lighter1} 100%)`, 
                          borderRadius: '6px',
                          boxShadow: '0 2px 6px rgba(10, 132, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: '12px',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: 'white',
                          transition: 'all 0.2s ease',
                          transform: hoverCategoryIndex === index ? 'scaleX(1.02)' : 'scaleX(1)',
                          transformOrigin: 'left'
                        }}>
                          ${item.funding.toFixed(1)}M
                        </div>
                      </div>
                    </div>
                    
                    {/* Growth rate */}
                    <div style={{ 
                      minWidth: '70px',
                      padding: '6px 10px',
                      borderRadius: '12px',
                      backgroundColor: hoverCategoryIndex === index ? 'rgba(48, 209, 88, 0.2)' : 'rgba(48, 209, 88, 0.1)',
                      textAlign: 'center',
                      color: colors.green,
                      fontWeight: 600,
                      fontSize: '14px',
                      transition: 'all 0.2s ease'
                    }}>
                      {item.growth.toFixed(1)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ChartContainer>
      </div>
    </div>
  );
};

export default StartupEcosystemSection;
