import React, { useState, useEffect } from 'react';
import { colors } from './ChartContainer';

interface DataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
}

interface AreaChartProps {
  data: DataPoint[];
  height?: number;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  areaOpacity?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  title1?: string;
  title2?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  height = 300,
  className = '',
  primaryColor = colors.green,
  secondaryColor = colors.blue.primary,
  areaOpacity = 0.15,
  showGrid = true,
  showTooltip = true,
  title1 = 'Primary',
  title2 = 'Secondary'
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationProgress, setAnimationProgress] = useState(0);
  
  // Animation effect
  useEffect(() => {
    let startTime: number;
    let rafId: number;
    const duration = 1000; // 1 second animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setAnimationProgress(progress);
      
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    rafId = requestAnimationFrame(animate);
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  
  if (!data || data.length === 0) return null;

  // Calculate points for the chart
  const chartWidth = 100;
  const chartHeight = 100;
  const padding = { top: 20, right: 0, bottom: 30, left: 0 };
  
  // Generate points for the line
  const pointsArray = data.map((point, index) => {
    const x = (index / (data.length - 1)) * chartWidth;
    // When animating, scale the y value
    const fullY = chartHeight - ((point.value / 100) * chartHeight);
    const y = isAnimating 
      ? chartHeight - (((point.value / 100) * chartHeight) * animationProgress)
      : fullY;
    return { x, y, fullY, ...point };
  });
  
  // Generate secondary points if they exist
  const hasSecondaryData = data.some(d => d.secondaryValue !== undefined);
  const secondaryPointsArray = hasSecondaryData 
    ? data.map((point, index) => {
        const x = (index / (data.length - 1)) * chartWidth;
        // When animating, scale the y value
        const fullY = chartHeight - (((point.secondaryValue || 0) / 100) * chartHeight);
        const y = isAnimating 
          ? chartHeight - (((point.secondaryValue || 0) / 100) * chartHeight) * animationProgress
          : fullY;
        return { x, y, fullY, ...point };
      })
    : [];

  // Generate the path for the area
  const generateAreaPath = (points: typeof pointsArray) => {
    let path = `M ${points[0].x} ${points[0].y}`;
    
    // Add line segments
    for (let i = 1; i < points.length; i++) {
      const { x, y } = points[i];
      // Use curveLinear (straight lines)
      path += ` L ${x} ${y}`;
    }
    
    // Complete the area by going down to the bottom and back to the start
    path += ` L ${points[points.length - 1].x} ${chartHeight}`;
    path += ` L ${points[0].x} ${chartHeight}`;
    path += ` Z`;
    
    return path;
  };

  // Generate the path for just the line
  const generateLinePath = (points: typeof pointsArray) => {
    let path = `M ${points[0].x} ${points[0].y}`;
    
    // Add line segments
    for (let i = 1; i < points.length; i++) {
      const { x, y } = points[i];
      // Use curveLinear (straight lines)
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  // Primary area and line paths
  const areaPath = generateAreaPath(pointsArray);
  const linePath = generateLinePath(pointsArray);

  // Secondary area and line paths (if data exists)
  const secondaryAreaPath = hasSecondaryData ? generateAreaPath(secondaryPointsArray) : '';
  const secondaryLinePath = hasSecondaryData ? generateLinePath(secondaryPointsArray) : '';

  return (
    <div 
      className={`area-chart ${className}`}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: `${height}px`,
        userSelect: 'none',
        opacity: isAnimating ? 0.9 + (0.1 * animationProgress) : 1,
        transition: 'opacity 0.3s ease'
      }}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {/* Chart SVG */}
      <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight + padding.top + padding.bottom}`} preserveAspectRatio="none">
        <g transform={`translate(0, ${padding.top})`}>
          {/* Grid lines (optional) */}
          {showGrid && (
            <>
              {[0, 25, 50, 75, 100].map(tick => (
                <line 
                  key={`grid-${tick}`}
                  x1="0" 
                  y1={chartHeight - ((tick / 100) * chartHeight)} 
                  x2={chartWidth} 
                  y2={chartHeight - ((tick / 100) * chartHeight)}
                  stroke={colors.border}
                  strokeWidth="0.5"
                  strokeDasharray="3,3"
                  style={{
                    opacity: isAnimating 
                      ? animationProgress * (tick === 0 ? 1 : tick / 100) 
                      : 1,
                    transition: 'opacity 0.5s ease'
                  }}
                />
              ))}
            </>
          )}

          {/* Secondary Area (if data exists) */}
          {hasSecondaryData && (
            <>
              <path
                d={secondaryAreaPath}
                fill={secondaryColor}
                fillOpacity={areaOpacity * (isAnimating ? animationProgress : 1)}
                strokeWidth="0"
              />
              <path
                d={secondaryLinePath}
                fill="none"
                stroke={secondaryColor}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                style={{
                  strokeDasharray: isAnimating ? "1000" : "0",
                  strokeDashoffset: isAnimating ? (1000 - (animationProgress * 1000)) : "0",
                  transition: 'stroke-dashoffset 0.5s ease'
                }}
              />
            </>
          )}

          {/* Primary Area */}
          <path
            d={areaPath}
            fill={primaryColor}
            fillOpacity={areaOpacity * (isAnimating ? animationProgress : 1)}
            strokeWidth="0"
          />

          {/* Primary Line */}
          <path
            d={linePath}
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{
              strokeDasharray: isAnimating ? "1000" : "0",
              strokeDashoffset: isAnimating ? (1000 - (animationProgress * 1000)) : "0",
              transition: 'stroke-dashoffset 0.5s ease'
            }}
          />

          {/* Data Points */}
          {pointsArray.map((point, i) => (
            <circle
              key={`point-${i}`}
              cx={point.x}
              cy={point.y}
              r={hoverIndex === i ? 5 : 4}
              fill={hoverIndex === i ? primaryColor : '#fff'}
              stroke={primaryColor}
              strokeWidth="2"
              style={{ 
                transition: 'all 0.2s ease',
                opacity: isAnimating 
                  ? Math.min(1, animationProgress * 3 - (i / pointsArray.length) * 2)
                  : 1
              }}
            />
          ))}

          {/* Secondary Data Points (if data exists) */}
          {hasSecondaryData && secondaryPointsArray.map((point, i) => (
            <circle
              key={`secondary-point-${i}`}
              cx={point.x}
              cy={point.y}
              r={hoverIndex === i ? 5 : 4}
              fill={hoverIndex === i ? secondaryColor : '#fff'}
              stroke={secondaryColor}
              strokeWidth="2"
              style={{ 
                transition: 'all 0.2s ease',
                opacity: isAnimating 
                  ? Math.min(1, animationProgress * 3 - (i / secondaryPointsArray.length) * 2)
                  : 1
              }}
            />
          ))}

          {/* X-axis */}
          <line 
            x1="0" 
            y1={chartHeight} 
            x2={chartWidth} 
            y2={chartHeight}
            stroke={colors.border}
            strokeWidth="1"
          />

          {/* X-axis Labels */}
          {data.map((point, i) => {
            const isVisible = !isAnimating || animationProgress > (i / data.length);
            return (
              <g 
                key={`label-${i}`}
                transform={`translate(${(i / (data.length - 1)) * chartWidth}, ${chartHeight + 15})`}
                style={{ 
                  transition: 'all 0.2s ease',
                  opacity: isVisible ? 1 : 0
                }}
              >
                <text
                  textAnchor="middle"
                  fill={hoverIndex === i ? colors.textPrimary : colors.textSecondary}
                  fontSize="8"
                  fontWeight={hoverIndex === i ? '500' : '400'}
                >
                  {point.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Invisible hover areas */}
      <div 
        style={{ 
          position: 'absolute', 
          top: padding.top, 
          left: 0, 
          width: '100%', 
          height: chartHeight, 
          display: 'flex',
          pointerEvents: isAnimating ? 'none' : 'auto'
        }}
      >
        {data.map((_, i) => (
          <div
            key={`hover-${i}`}
            style={{
              flex: 1,
              height: '100%',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoverIndex(i)}
          />
        ))}
      </div>

      {/* Tooltip */}
      {showTooltip && hoverIndex !== null && !isAnimating && (
        <div 
          style={{
            position: 'absolute',
            top: padding.top + pointsArray[hoverIndex].fullY - 70,
            left: pointsArray[hoverIndex].x,
            transform: 'translateX(-50%)',
            background: 'rgba(44, 44, 46, 0.9)',
            borderRadius: '8px',
            padding: '8px 12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            color: colors.textPrimary,
            fontSize: '13px',
            fontWeight: 500,
            pointerEvents: 'none',
            zIndex: 10,
            backdropFilter: 'blur(4px)',
            border: `1px solid ${colors.border}`,
            minWidth: '120px',
            textAlign: 'center',
            transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <div style={{ marginBottom: '4px', fontWeight: 600 }}>{data[hoverIndex].label}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
            <span style={{ color: colors.textSecondary }}>{title1}:</span>
            <span style={{ color: primaryColor, fontWeight: 600 }}>{data[hoverIndex].value}%</span>
          </div>
          {hasSecondaryData && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: colors.textSecondary }}>{title2}:</span>
              <span style={{ color: secondaryColor, fontWeight: 600 }}>{data[hoverIndex].secondaryValue}%</span>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          opacity: isAnimating ? animationProgress : 1,
          transform: `translateY(${isAnimating ? 10 - (animationProgress * 10) : 0}px)`,
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: primaryColor }}></div>
          <span style={{ fontSize: '12px', color: colors.textSecondary }}>{title1}</span>
        </div>
        {hasSecondaryData && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: secondaryColor }}></div>
            <span style={{ fontSize: '12px', color: colors.textSecondary }}>{title2}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaChart; 