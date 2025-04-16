import React, { useState } from 'react';
import { colors } from './ChartContainer';

interface BarChartItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface BarChartProps {
  data: BarChartItem[];
  maxValue?: number;
  barHeight?: number;
  showValues?: boolean;
  className?: string;
  barColor?: string;
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  maxValue, 
  barHeight = 24,
  showValues = true,
  className = '',
  barColor = colors.blue.primary
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const calculatedMax = maxValue || Math.max(...data.map(item => item.value)) * 1.1;
  
  return (
    <div className={`bar-chart ${className}`}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: hoverIndex === index ? 'rgba(58, 58, 60, 0.5)' : 'transparent',
              marginBottom: index < data.length - 1 ? '16px' : '0',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div style={{ 
              width: '180px', 
              fontSize: '14px',
              fontWeight: 500,
              paddingRight: '16px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {item.label}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                height: `${barHeight}px`,
                width: `${(item.value / calculatedMax) * 100}%`,
                background: `linear-gradient(90deg, ${barColor} 0%, ${colors.blue.lighter1} 100%)`,
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
                transform: hoverIndex === index ? 'scale(1.01)' : 'scale(1)'
              }}>
                {showValues && (
                  <span>
                    {item.prefix || ''}{item.value}{item.suffix || ''}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart; 