import React from 'react';

interface InsightCardProps {
  title: string;
  content: string;
  category?: string;
  icon?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, content, category = 'General', icon }) => {
  return (
    <div className="insight-card" style={{
      backgroundColor: '#2C2C2E',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      marginBottom: '16px',
      borderLeft: '4px solid #0A84FF'
    }}>
      <div className="insight-header" style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        {icon && (
          <div className="insight-icon" style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: '#0A84FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <span style={{ color: 'white', fontSize: '16px' }}>{icon}</span>
          </div>
        )}
        <div>
          <h3 style={{
            margin: '0 0 4px 0',
            fontSize: '16px',
            fontWeight: '600',
            color: '#F5F5F7'
          }}>
            {title}
          </h3>
          <div style={{
            fontSize: '12px',
            color: '#8E8E93'
          }}>
            {category}
          </div>
        </div>
      </div>
      <div className="insight-content" style={{
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#F5F5F7'
      }}>
        {content}
      </div>
    </div>
  );
};

export default InsightCard;
