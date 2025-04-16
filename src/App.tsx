import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import SectionContainer from './components/layout/SectionContainer';
import OpportunityRadar from './components/common/OpportunityRadar';
import WhiteSpaceIdentifier from './components/common/WhiteSpaceIdentifier';
import InvestmentTimingAnalyzer from './components/common/InvestmentTimingAnalyzer';
import ValuationPremiumCalculator from './components/common/ValuationPremiumCalculator';
import ExitPathwayAnalyzer from './components/common/ExitPathwayAnalyzer';
import InvestmentOpportunityScorecard from './components/common/InvestmentOpportunityScorecard';
import { opportunityData } from './data/mockData';

function App() {
  const [selectedOpportunity, setSelectedOpportunity] = useState(opportunityData[0].category);

  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Stripes Venture Capital Investment Dashboard</h1>
        <p className="dashboard-description">
          Identify the biggest gap areas to invest in within VC/PE
        </p>
        
        <div className="dashboard-grid">
          <SectionContainer title="Investment Opportunity Scorecard">
            <InvestmentOpportunityScorecard 
              onOpportunitySelect={setSelectedOpportunity}
            />
          </SectionContainer>
          
          <SectionContainer title="Opportunity Analysis">
            <OpportunityRadar 
              selectedOpportunity={selectedOpportunity}
              onOpportunitySelect={setSelectedOpportunity}
            />
          </SectionContainer>
          
          <SectionContainer title="White Space Identification">
            <WhiteSpaceIdentifier 
              onOpportunitySelect={setSelectedOpportunity}
            />
          </SectionContainer>
          
          <SectionContainer title="Investment Timing">
            <InvestmentTimingAnalyzer 
              onOpportunitySelect={setSelectedOpportunity}
            />
          </SectionContainer>
          
          <SectionContainer title="Valuation Premium">
            <ValuationPremiumCalculator 
              onOpportunitySelect={setSelectedOpportunity}
            />
          </SectionContainer>
          
          <SectionContainer title="Exit Pathway Analysis">
            <ExitPathwayAnalyzer 
              onOpportunitySelect={setSelectedOpportunity}
            />
          </SectionContainer>
        </div>
      </div>
    </Layout>
  );
}

export default App;
