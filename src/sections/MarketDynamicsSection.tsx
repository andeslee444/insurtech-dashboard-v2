import React, { useState } from 'react';
import { marketShareData, growthRateData } from '../data/mockData';
import ChartContainer from '../components/common/ChartContainer';
import DataTable from '../components/common/DataTable';
import BarChart from '../components/common/BarChart';
import AreaChart from '../components/common/AreaChart';
import { colors } from '../components/common/ChartContainer';

// Time periods for filtering
const periods = [
  { id: 'all', label: 'All Time' },
  { id: 'last4', label: 'Last 4 Quarters' },
  { id: 'y2018', label: '2018' },
  { id: 'y2019', label: '2019' },
];

const MarketDynamicsSection: React.FC = () => {
  const [showAsTable, setShowAsTable] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [chartKey, setChartKey] = useState(0); // To force re-render for animation

  // Filter market share data based on selected period
  const filteredMarketData = marketShareData.filter(item => {
    if (selectedPeriod === 'all') return true;
    if (selectedPeriod === 'last4') return marketShareData.indexOf(item) >= marketShareData.length - 4;
    if (selectedPeriod === 'y2018') return item.time.includes('2018');
    if (selectedPeriod === 'y2019') return item.time.includes('2019');
    return true;
  });

  // Format market share data for the area chart
  const marketShareChartData = filteredMarketData.map(item => ({
    label: item.time,
    value: item.marketShare,
    secondaryValue: 100 - item.marketShare
  }));

  // Format market share data for the table (as fallback)
  const marketShareTableData = filteredMarketData.map(item => ({
    time: item.time,
    traditional: (100 - item.marketShare).toFixed(1),
    insurtech: item.marketShare.toFixed(1)
  }));

  // Define table columns
  const marketShareColumns = [
    { key: 'time', header: 'Year', align: 'left' as const },
    { 
      key: 'traditional', 
      header: 'Traditional (%)', 
      align: 'right' as const,
      format: (value: string) => `${value}%`
    },
    { 
      key: 'insurtech', 
      header: 'InsurTech (%)', 
      align: 'right' as const,
      format: (value: string) => `${value}%`,
      cellStyle: { color: colors.green, fontWeight: 500 }
    }
  ];

  // Format growth rate data for bar chart
  const growthRateChartData = growthRateData
    .sort((a, b) => b.rate - a.rate)
    .map(item => ({
      label: item.category,
      value: item.rate,
      suffix: '%'
    }));

  // Handle period change
  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setChartKey(prev => prev + 1); // Force re-render for animation
  };

  // Handle toggle between chart and table
  const handleToggleView = (showTable: boolean) => {
    setShowAsTable(showTable);
    if (!showTable) {
      // Set timeout to allow fade out before re-rendering chart
      setTimeout(() => setChartKey(prev => prev + 1), 300);
    }
  };

  return (
    <div className="market-dynamics-section animate-in" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-content">
        <ChartContainer 
          title="Market Share Evolution"
          insight="InsurTech market share has grown from 32% to 62% over the past 5 years, indicating a significant shift in the industry."
        >
          <div style={{ position: 'relative' }}>
            {/* Controls row */}
            <div style={{ 
              position: 'relative',
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              zIndex: 5
            }}>
              {/* View toggle */}
              <div 
                className="pill-button-group"
                style={{ 
                  display: 'inline-flex',
                  background: 'rgba(44, 44, 46, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '20px',
                  padding: '4px',
                  border: `1px solid ${colors.border}`
                }}
              >
                <button 
                  className={!showAsTable ? 'pill-button selected' : 'pill-button'} 
                  style={{ 
                    margin: 0, 
                    minWidth: '80px',
                    padding: '6px 12px'
                  }}
                  onClick={() => handleToggleView(false)}
                >
                  Chart
                </button>
                <button 
                  className={showAsTable ? 'pill-button selected' : 'pill-button'} 
                  style={{ 
                    margin: 0, 
                    minWidth: '80px',
                    padding: '6px 12px'
                  }}
                  onClick={() => handleToggleView(true)}
                >
                  Table
                </button>
              </div>

              {/* Period selector */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {periods.map(period => (
                  <button
                    key={period.id}
                    className={selectedPeriod === period.id ? 'pill-button selected' : 'pill-button'}
                    onClick={() => handlePeriodChange(period.id)}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart/Table container */}
            <div style={{ 
              height: '370px', 
              position: 'relative',
              transition: 'opacity 0.3s ease-in-out',
              opacity: 1
            }}>
              {showAsTable ? (
                <div className="animate-in" style={{ height: '100%', overflow: 'auto' }}>
                  <DataTable 
                    columns={marketShareColumns} 
                    data={marketShareTableData} 
                  />
                </div>
              ) : (
                <AreaChart 
                  key={chartKey}
                  data={marketShareChartData}
                  height={350}
                  primaryColor={colors.green}
                  secondaryColor={colors.blue.primary}
                  areaOpacity={0.2}
                  title1="InsurTech"
                  title2="Traditional"
                />
              )}
            </div>
          </div>
        </ChartContainer>

        <ChartContainer 
          title="Growth Rate by Category" 
          insight="Cyber Insurance and Climate Risk categories show the highest growth rates, presenting significant investment opportunities."
        >
          <BarChart 
            data={growthRateChartData} 
            maxValue={30} 
          />
        </ChartContainer>
      </div>
    </div>
  );
};

export default MarketDynamicsSection;
