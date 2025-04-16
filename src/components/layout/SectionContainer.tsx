import React from 'react';

interface SectionContainerProps {
  title?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ title, children }) => {
  return (
    <div className="section-container" style={{
      backgroundColor: '#2C2C2E',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      marginBottom: '20px'
    }}>
      {title && (
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          marginTop: '0',
          marginBottom: '16px',
          color: '#F5F5F7',
          borderBottom: '1px solid #3A3A3C',
          paddingBottom: '12px'
        }}>
          {title}
        </h2>
      )}
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
