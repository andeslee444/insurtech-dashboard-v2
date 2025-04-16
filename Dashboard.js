import React from 'react';
import MarketDynamicsSection from './sections/MarketDynamicsSection';
import TechnologyAdoptionSection from './sections/TechnologyAdoptionSection';
import EmergingRiskSection from './sections/EmergingRiskSection';
import StartupEcosystemSection from './sections/StartupEcosystemSection';
import DistributionChannelSection from './sections/DistributionChannelSection';
import CustomerExperienceSection from './sections/CustomerExperienceSection';
import CapitalFlowSection from './sections/CapitalFlowSection';
import RegulatoryLandscapeSection from './sections/RegulatoryLandscapeSection';
import InvestmentOpportunitySection from './sections/InvestmentOpportunitySection';

const Dashboard = () => {
  const [activeSection, setActiveSection] = React.useState('investment');
  
  const renderSection = () => {
    switch(activeSection) {
      case 'market':
        return <MarketDynamicsSection />;
      case 'technology':
        return <TechnologyAdoptionSection />;
      case 'risk':
        return <EmergingRiskSection />;
      case 'startup':
        return <StartupEcosystemSection />;
      case 'distribution':
        return <DistributionChannelSection />;
      case 'customer':
        return <CustomerExperienceSection />;
      case 'capital':
        return <CapitalFlowSection />;
      case 'regulatory':
        return <RegulatoryLandscapeSection />;
      case 'investment':
      default:
        return <InvestmentOpportunitySection />;
    }
  };
  
  return (
    <div className="dashboard">
      <div className="dashboard-header" style={{
        marginBottom: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <button 
          className={`pill-button ${activeSection === 'investment' ? 'selected' : ''}`}
          onClick={() => setActiveSection('investment')}
        >
          Investment Opportunities
        </button>
        <button 
          className={`pill-button ${activeSection === 'market' ? 'selected' : ''}`}
          onClick={() => setActiveSection('market')}
        >
          Market Dynamics
        </button>
        <button 
          className={`pill-button ${activeSection === 'technology' ? 'selected' : ''}`}
          onClick={() => setActiveSection('technology')}
        >
          Technology Adoption
        </button>
        <button 
          className={`pill-button ${activeSection === 'risk' ? 'selected' : ''}`}
          onClick={() => setActiveSection('risk')}
        >
          Emerging Risks
        </button>
        <button 
          className={`pill-button ${activeSection === 'startup' ? 'selected' : ''}`}
          onClick={() => setActiveSection('startup')}
        >
          Startup Ecosystem
        </button>
        <button 
          className={`pill-button ${activeSection === 'distribution' ? 'selected' : ''}`}
          onClick={() => setActiveSection('distribution')}
        >
          Distribution Channels
        </button>
        <button 
          className={`pill-button ${activeSection === 'customer' ? 'selected' : ''}`}
          onClick={() => setActiveSection('customer')}
        >
          Customer Experience
        </button>
        <button 
          className={`pill-button ${activeSection === 'capital' ? 'selected' : ''}`}
          onClick={() => setActiveSection('capital')}
        >
          Capital Flow
        </button>
        <button 
          className={`pill-button ${activeSection === 'regulatory' ? 'selected' : ''}`}
          onClick={() => setActiveSection('regulatory')}
        >
          Regulatory Landscape
        </button>
      </div>
      
      <div className="dashboard-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default Dashboard;
