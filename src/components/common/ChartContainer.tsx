import React, { ReactNode } from 'react';

// Apple-inspired color palette - shared across components
export const colors = {
  primary: '#0A84FF',
  background: '#1C1C1E',
  cardBg: '#2C2C2E',
  border: '#3A3A3C',
  textPrimary: '#F5F5F7',
  textSecondary: '#8E8E93',
  green: '#30D158',
  purple: '#5E5CE6',
  orange: '#FF9F0A',
  red: '#FF453A',
  blue: {
    primary: '#0A84FF',
    lighter1: '#5AC8FA',
    lighter2: '#64D2FF'
  },
  shadow: 'rgba(0, 0, 0, 0.2)'
};

interface ChartContainerProps {
  title: string;
  children: ReactNode;
  insight?: string;
  className?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, 
  children, 
  insight,
  className = ''
}) => {
  return (
    <div className={`chart-container ${className}`} style={{ marginBottom: '32px' }}>
      <h3 className="chart-title" style={{ 
        fontSize: '18px',
        fontWeight: 500,
        marginTop: 0,
        marginBottom: '16px',
        color: colors.textPrimary
      }}>
        {title}
      </h3>
      <div className="section-container" style={{ 
        backgroundColor: colors.cardBg, 
        borderRadius: '12px', 
        padding: '24px', 
        color: colors.textPrimary,
        boxShadow: `0 4px 12px ${colors.shadow}`,
        transition: 'all 0.2s ease-in-out'
      }}>
        <div className="chart-content">
          {children}
        </div>
        
        {insight && (
          <div style={{ 
            marginTop: '24px', 
            fontSize: '14px', 
            color: colors.textSecondary,
            lineHeight: '1.5',
            padding: '0 8px'
          }}>
            {insight}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartContainer; 