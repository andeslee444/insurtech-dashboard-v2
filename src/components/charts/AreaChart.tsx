import React, { useState } from 'react';
import { 
  AreaChart as RechartsAreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

interface AreaChartProps {
  data: any[];
  keys: string[];
  colors: string[];
  xAxisKey: string;
  stackId?: string;
  animationKey?: number | string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        <div className="tooltip-content">
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="tooltip-item">
              <div 
                className="tooltip-color" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="tooltip-name">{entry.name}: </span>
              <span className="tooltip-value">{entry.value.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const AreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  keys, 
  colors, 
  xAxisKey,
  stackId = 'stack',
  animationKey = 1
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="area-chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsAreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          key={animationKey}
        >
          <defs>
            {colors.map((color, index) => (
              <linearGradient key={`gradient-${keys[index]}`} id={`color-${keys[index]}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0.2} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey={xAxisKey} 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="top" 
            height={36}
            wrapperStyle={{ paddingTop: '10px' }}
            formatter={(value) => (
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>{value}</span>
            )}
          />
          {keys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId={stackId}
              stroke={colors[index]}
              fill={`url(#color-${key})`}
              animationDuration={800}
              animationEasing="ease-in-out"
              activeDot={{
                r: 6,
                stroke: colors[index],
                strokeWidth: 1,
                fill: '#fff',
                onMouseOver: () => setHoveredIndex(index),
                onMouseLeave: () => setHoveredIndex(null),
              }}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
