import React from 'react';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="dashboard-container" style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '16px', color: '#F5F5F7' }}>Stripes VC Insurtech Dashboard</h1>
        <p style={{ marginBottom: '24px', color: '#8E8E93' }}>
          Interactive analytics for the insurtech sector
        </p>
        
        <div style={{ 
          backgroundColor: '#2C2C2E',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 600, 
            marginTop: 0, 
            marginBottom: '16px', 
            color: '#F5F5F7' 
          }}>
            Welcome to Stripes VC Insurtech Dashboard
          </h2>
          <p style={{ color: '#D1D1D6' }}>
            This dashboard provides interactive visualizations for venture capital investment in the insurtech sector.
          </p>
          <p style={{ color: '#D1D1D6' }}>
            Explore market trends, technology adoption, investment opportunities, and startup ecosystem data.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default App;