import React from 'react';
import styled from 'styled-components';

interface OpportunityCardProps {
  category: string;
  marketSize: number;
  growth: number;
  techGap: number;
  overallScore: number;
  onClick?: () => void;
}

// Styled component for the card
const StyledCard = styled.div`
  background-color: #2C2C2E;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  category,
  marketSize,
  growth,
  techGap,
  overallScore,
  onClick
}) => {
  return (
    <StyledCard 
      className="opportunity-card" 
      onClick={onClick}
    >
      <div className="opportunity-header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <h3 style={{
          margin: '0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#F5F5F7'
        }}>
          {category}
        </h3>
        <div className="opportunity-score" style={{
          backgroundColor: '#0A84FF',
          color: 'white',
          borderRadius: '8px',
          padding: '4px 8px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          {overallScore.toFixed(1)}
        </div>
      </div>
      
      <div className="opportunity-metrics" style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '12px'
      }}>
        <div className="metric" style={{ textAlign: 'center' }}>
          <div className="metric-value" style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#F5F5F7'
          }}>
            ${marketSize.toFixed(1)}B
          </div>
          <div className="metric-label" style={{
            fontSize: '12px',
            color: '#8E8E93'
          }}>
            Market Size
          </div>
        </div>
        
        <div className="metric" style={{ textAlign: 'center' }}>
          <div className="metric-value" style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#30D158'
          }}>
            {growth.toFixed(1)}%
          </div>
          <div className="metric-label" style={{
            fontSize: '12px',
            color: '#8E8E93'
          }}>
            Growth
          </div>
        </div>
        
        <div className="metric" style={{ textAlign: 'center' }}>
          <div className="metric-value" style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#F5F5F7'
          }}>
            {techGap.toFixed(1)}/10
          </div>
          <div className="metric-label" style={{
            fontSize: '12px',
            color: '#8E8E93'
          }}>
            Tech Gap
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default OpportunityCard;
