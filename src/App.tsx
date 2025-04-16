import React, { useState } from 'react';
import Layout from './components/layout/Layout';
// Remove old component imports if they are now part of sections
// import OpportunityRadar from './components/common/OpportunityRadar'; 
// ... other old imports

// Import Section Components
import MarketDynamicsSection from './sections/MarketDynamicsSection';
import TechnologyAdoptionSection from './sections/TechnologyAdoptionSection';
import EmergingRiskSection from './sections/EmergingRiskSection';
import StartupEcosystemSection from './sections/StartupEcosystemSection';
import DistributionChannelSection from './sections/DistributionChannelSection';
import CustomerExperienceSection from './sections/CustomerExperienceSection';
import CapitalFlowSection from './sections/CapitalFlowSection';
import RegulatoryLandscapeSection from './sections/RegulatoryLandscapeSection';
import InvestmentOpportunitySection from './sections/InvestmentOpportunitySection';
import MainPage from './pages/MainPage'; // Import the new MainPage
// Removed mockData import as it's likely used within sections now
// import { opportunityData } from './data/mockData'; 

function App() {
  // Start with 'home' section
  const [activeSection, setActiveSection] = useState('home'); 

  const renderSection = () => {
    switch (activeSection) {
      case 'home': // Add case for home
        return <MainPage onNavigate={setActiveSection} />;
      case 'market':
        return <MarketDynamicsSection />;
      case 'tech':
        return <TechnologyAdoptionSection />;
      case 'risk':
        return <EmergingRiskSection />;
      case 'startup':
        return <StartupEcosystemSection />;
      case 'distribution':
        return <DistributionChannelSection />;
      case 'cx':
        return <CustomerExperienceSection />;
      case 'capital':
        return <CapitalFlowSection />;
      case 'regulatory':
        return <RegulatoryLandscapeSection />;
      case 'opportunity':
        return <InvestmentOpportunitySection />;
      default:
        return <MainPage onNavigate={setActiveSection} />; // Default to home
    }
  };

  return (
    <Layout onNavigate={setActiveSection} activeSection={activeSection}>
      {/* Remove the old static grid layout */}
      {/* The content area will now be filled by the active section */}
      {renderSection()}
    </Layout>
  );
}

export default App;
